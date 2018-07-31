'use strict';
var Courses = require('../utils/database').Course;
var Applications = require('../utils/database').Application;


var knex = require('../utils/database').knex;
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var Errors = require('../utils/errors');
var moment = require('moment');

/**
 * apply to participate in specific course
 * apply to participate in specific course
 *
 * course_id Integer 
 * returns Course
 **/
exports.coursesCourse_idApplyPOST = function (course_id, req) {
  let user_id = getUserFromToken(req);

  //first we have to check if the user is already applied or not
  return new Promise(function (resolve, reject) {
    Courses.where({
        kurs_id: course_id
      })
      .fetch()
      .then((course) => {
        if (course != null) {
          Applications
            .fetchAll()
            .then((applications) => {
              if (applicationFound(applications, user_id, course_id)) {
                new Applications(generateApplicationFor(user_id, course_id))
                  .save()
                  .then((application) => {
                    resolve(application);
                  })
                  .catch((error) => {
                    reject(error);
                  });
              } else {
                //Resource 'appliaction with course_id and user_id' already exists.
                reject(Errors.conflict("Application for course " + course_id + " and user " + user_id));
              }
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(Errors.notFound("course with ID ", course_id));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getUserFromToken(req) {
  let token = req.headers['authorization'];
  token = token.replace("Bearer ", "");
  return jwt.decode(token).id;
}

function applicationFound(applications, user_id, course_id) {
  let applicationFound = true;
  applications.forEach(application => {
    if ((application.attributes.ANM_TEIL_ID == user_id) &&
      (application.attributes.ANM_KURS_ID == course_id)) {
      applicationFound = false;
    }
  });
  return applicationFound;
}

function generateApplicationFor(user_id, course_id) {
  return {
    ANM_DATUM: moment().format('YYYY-MM-DD'),
    ANM_TEIL_ID: user_id,
    ANM_KURS_ID: course_id,
    ANM_BEARBEITER: 0,
    ANM_STAT_ID: 0,
    ANM_ABR_DATUM: 0,
    ANM_ABR_RUECKLAST_DATUM: 0,
    ANM_TNB_GEM_DRUCKEN: 0,
    ANM_TEIL_ID_ZAHLER: 0,
    ANM_WARTEL_INFORMIEREN: 0,
    ANM_ABR_ABRECHNEN: 0,
    ANM_ABR_ABGERECHNET: 0,
    EINGEGEBEN_VON_USER: user_id,
    EINGEGEBEN_AM_DATUM: 0,
    EINGEGEBEN_AM_ZEIT: 0,
    DATENHISTORY: ""
  };
}

exports.generateApplicationFor = generateApplicationFor; 

/**
 * give feedback to a course
 * give feedback to a course
 *
 * course_id String 
 * data CourseFeedback  (optional)
 * returns CourseFeedback
 **/
exports.coursesCourse_idFeedbackPOST = function (course_id, data) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "text": "This app is great!",
      "email": "this@me.com"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get course by id
 * get course by id
 *
 * course_id Integer 
 * returns Course
 **/
exports.coursesCourse_idGET = function (course_id) {
  return new Promise(function (resolve, reject) {
    Courses.where({
        kurs_id: course_id
      })
      .fetch()
      .then((course) => {
        if (!course) {
          reject(Errors.notFound("GET ID " + course_id, "COURSE"));
        }
        resolve(course);
      })
      .catch((error) => {
        reject(error);
      });
  });
}


/**
 * signoff to participate in specific course
 * signoff to participate in specific course
 *
 * course_id Integer 
 * returns Course
 **/
exports.coursesCourse_idSignoffPOST = function (course_id, req) {
  return new Promise(function (resolve, reject) {
    let user_id = getUserFromToken(req);

    Applications.where({
        ANM_TEIL_ID: user_id,
        ANM_KURS_ID: course_id
      })
      .save({ANM_ABR_ABRECHNEN: 1, ANM_ABR_DATUM: moment().format('YYYY-MM-DD')}, {
        patch: true
      })
      .then(applicationModel => {
        if (!applicationModel) {
          reject(Errors.notFound("course with ID ", course_id));
        }
        resolve(applicationModel);
      })
      .catch(err => {
        reject(Errors.notFound("course with ID ", course_id));
      });
  });
}


/**
 * get all courses
 * get all courses
 *
 * returns List
 **/
exports.coursesGET = function () {
  return new Promise(function (resolve, reject) {
    Courses
      .fetchAll()
      .then((course) => {
        resolve(course.map(item => item.attributes));
      })
      .catch((error) => {
        reject(error);
      });
  });
}


/**
 * get currated highlights
 * get currated highlights
 *
 * returns List
 **/
exports.coursesHighlightsGET = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "max_age": 99,
      "name": "Kunst-Grundkurs",
      "id": 1,
      "text": "Dass Kunst nicht immer fad ist, soll in diesem Kurs klar gemacht werden",
      "min_age": 1
    }, {
      "max_age": 99,
      "name": "Kunst-Grundkurs",
      "id": 1,
      "text": "Dass Kunst nicht immer fad ist, soll in diesem Kurs klar gemacht werden",
      "min_age": 1
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

exports.coursesLastminuteGET = function() {
  return new Promise(function(resolve, reject) {
    Courses
      .forge()
      .query(function(qb) {
        qb.whereBetween('KURS_ANMFRIST', [moment().format('YYYY-MM-DD'), moment().add(6, 'weeks').format('YYYY-MM-DD')]);
      })
      .fetchAll({withRelated: ["applications"]})
      .then((courses) => {
        resolve(courses
          .filter(item => item.related('applications').toJSON().length < item.attributes.KURS_TEIL_MAX)
          .filter(item => item.attributes.KURS_KURSSTAT_ID === 3)
          .map(item => item.attributes)
        )
      })
      .catch((error) => {
        reject(error);
      });
  });
}

if (process.env.NODE_ENV === 'test') {
  exports.clearDataBase = () => {
    console.log("Clearing all Content in Table vhslq_kurse");
    return new Promise((resolve, reject) => {
      knex("vhslq_kurse")
        .del()
        .then(() => {
          console.log("Finished clearing all Content in Table vhslq_kurse");
          resolve("clean");
        })
        .catch((error) => {
          reject(error);
        })
    })
  }

  exports.setupDataBase = () => {
    console.log("Setting up Content in Table vhslq_kurse")
    return new Promise((resolve, reject) => {
      let sample = require('../utils/sampleData').courses();
      let _Courses = require('../utils/database').Courses;
      let courses = _Courses.forge(sample);

      Promise.all(courses.invokeMap('save'))
        .then((data) => {
          console.log("Finished Setting up Content in Table vhslq_kurse")
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        })
    });
  }

  exports.setupLastMinute = () => {
    console.log("Setting up Last Minute Content in Table vhslq_kurse")
    return new Promise((resolve, reject) => {
      let sample = require('../utils/sampleData').coursesForLastMinute();
      let _Courses = require('../utils/database').Courses;
      let courses = _Courses.forge(sample);
        
      Promise.all(courses.invokeMap('save'))
        .then((data) => {
          let courseIDs = data.map(item => item.attributes.id);
          let fullCourse = courseIDs[2];
          let _Applications = require('../utils/database').Applications
          let applications = _Applications.forge([
            generateApplicationFor(1222313, fullCourse),
            generateApplicationFor(1222312, fullCourse)
          ])
          Promise.all(applications.invokeMap('save')).then(() => {
            console.log("Finished Setting up Last Minute Content in Table vhslq_kurse")
            resolve("done");
          }).catch((error) => {
            console.log(error)
            reject(error);
          })
        })
        .catch((error) => {
          reject(error);
        })
    });
  }


  exports.setupCoursesOfCategory = (category_id) => {
    return new Promise((resolve, reject) => {
      console.log("Setting up Content for Category with ID " + category_id);
      let sample = require('../utils/sampleData').coursesForCategory(category_id);
      let _Courses = require('../utils/database').Courses;
      let courses = _Courses
        .forge(sample)

      Promise.all(courses.invokeMap('save'))
        .then((data) => {
          console.log("Finished Setting up Content in Table vhslq_rubriken");
          resolve("done");
        })
        .catch((error) => {
          reject(error);
        })
    });
  }
}
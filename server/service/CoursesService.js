'use strict';
var Courses = require('../utils/database').Course;

var knex = require('../utils/database').knex;

/**
 * apply to participate in specific course
 * apply to participate in specific course
 *
 * course_id Integer 
 * returns Course
 **/
exports.coursesCourse_idApplyPOST = function(course_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "max_age" : 99,
      "name" : "Kunst-Grundkurs",
      "id" : 1,
      "text" : "Dass Kunst nicht immer fad ist, soll in diesem Kurs klar gemacht werden",
      "min_age" : 1
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * give feedback to a course
 * give feedback to a course
 *
 * course_id String 
 * data CourseFeedback  (optional)
 * returns CourseFeedback
 **/
exports.coursesCourse_idFeedbackPOST = function(course_id,data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "text" : "This app is great!",
      "email" : "this@me.com"
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
exports.coursesCourse_idGET = function(course_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "max_age" : 99,
      "name" : "Kunst-Grundkurs",
      "id" : 1,
      "text" : "Dass Kunst nicht immer fad ist, soll in diesem Kurs klar gemacht werden",
      "min_age" : 1
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * signoff to participate in specific course
 * signoff to participate in specific course
 *
 * course_id Integer 
 * returns Course
 **/
exports.coursesCourse_idSignoffPOST = function(course_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "max_age" : 99,
      "name" : "Kunst-Grundkurs",
      "id" : 1,
      "text" : "Dass Kunst nicht immer fad ist, soll in diesem Kurs klar gemacht werden",
      "min_age" : 1
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all courses
 * get all courses
 *
 * returns List
 **/
exports.coursesGET = function() {
  return new Promise(function(resolve, reject) {
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
exports.coursesHighlightsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
      "max_age" : 99,
      "name" : "Kunst-Grundkurs",
      "id" : 1,
      "text" : "Dass Kunst nicht immer fad ist, soll in diesem Kurs klar gemacht werden",
      "min_age" : 1
    }, {
      "max_age" : 99,
      "name" : "Kunst-Grundkurs",
      "id" : 1,
      "text" : "Dass Kunst nicht immer fad ist, soll in diesem Kurs klar gemacht werden",
      "min_age" : 1
    } ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
          resolve("done");
        })
        .catch((error) => {
          reject(error);
        })
    });
  }
}


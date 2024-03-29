var knex = require('../../utils/database').knex;

var User = require('../../utils/database').User;
var Categories = require('../../utils/database').Category;
var Courses = require('../../utils/database').Course;
var Applications = require('../../utils/database').Application;
var CourseFeedback = require('../../utils/database').CourseFeedback;
var User = require('../../utils/database').User;
var Applications = require('../../utils/database').Application;
var Location = require('../../utils/database').Location;

let sampleUser = require('./sampleData').user();

var generateApplicationFor = require('../../service/CoursesService').generateApplicationFor;



const AuthHelper = {
  clearDataBaseInsertUser: () => {
    return new Promise((resolve, reject) => {
      console.log("Clearing all Content in Table vhslq_teilnehmer and Insert valid user");
      
      knex("vhslq_teilnehmer")
        .del()
        .then(() => {
          console.log("Finished clearing all Content in Table vhslq_teilnehmer");
          new User(sampleUser)
            .save()
            .then((user) => {
              resolve(user);
            })
            .catch((error) => {
              reject(error);
            });
          resolve();
        })
        .catch((error) => {
          reject(error);
        })
    });
  }
}
const CategoriesHelper = {
  clearDataBase: () => {
    return new Promise((resolve, reject) => {
      console.log("Clearing all Content in Table vhslq_rubriken");
      knex("vhslq_rubriken")
        .del()
        .then(() => {
          console.log("Finished clearing all Content in Table vhslq_rubriken");
          resolve("clean");
        })
        .catch((error) => {
          reject(error);
        })
    })
  },

  setupDataBase: () => {
    return new Promise((resolve, reject) => {
      console.log("Setting up Content in Table vhslq_rubriken")
      let sample = require('./sampleData').categories();
      let _Categories = require('../../utils/database').Categories;
      let categories = _Categories
        .forge(sample)
        
      Promise.all(categories.invokeMap('save'))
        .then((data) => {
          console.log("Finished Setting up Content in Table vhslq_rubriken")
          resolve("done");
        })
        .catch((error) => {
          reject(error);
        })
    });
  }
}
const CoursesHelper = {
  clearDataBase: () => {
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
  },

  setupDataBase: () => {
    Location
      .fetchAll()
      .then(locations => {
        if (locations.length == 0) {
          console.log("No Locations found. Adding a sample Location");
          let sampleLocation = require('./sampleData').location();
          new Location(sampleLocation)
            .save()
            .then(() => {
              console.log("Location added!");
            });
        }
      })
    console.log("Setting up Content in Table vhslq_kurse")
    return new Promise((resolve, reject) => {
      let sample = require('./sampleData').courses();
      let _Courses = require('../../utils/database').Courses;
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
  },

  setupHighlightsCoursesWithTeacher: () => {
    return new Promise((resolve, reject) => {
      User.where({TEIL_VORNAME: "John"})
        .fetch()
        .then(user => {
          Courses
          .where({KURS_HIGHLIGHT: 1})
          .save({KURS_REFERENT_ID: user.attributes.TEIL_ID}, {patch: true})
          .then(courses => {
            resolve(courses.toJSON());
          })
        })
    })
  },

  setupLastMinute: () => {
    console.log("Setting up Last Minute Content in Table vhslq_kurse")
    return new Promise((resolve, reject) => {
      let sample = require('./sampleData').coursesForLastMinute();
      let _Courses = require('../../utils/database').Courses;
      let courses = _Courses.forge(sample);
        
      Promise.all(courses.invokeMap('save'))
        .then((data) => {
          let courseIDs = data.map(item => item.attributes.id);
          let fullCourse = courseIDs[2];
          let _Applications = require('../../utils/database').Applications
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
  },

  setupHighlights: () => {
    console.log("Setting up Highlights Content in Table vhslq_kurse")
    return new Promise((resolve, reject) => {
      let sample = require('./sampleData').coursesForHighlights();
      let _Courses = require('../../utils/database').Courses;
      let courses = _Courses.forge(sample);
        
      Promise.all(courses.invokeMap('save'))
        .then((data) => {
          console.log("Finished Setting up Last Minute Content in Table vhslq_kurse")
          resolve("done");
        }).catch((error) => {
          console.log(error)
          reject(error);
        })
    });
  },


  setupCoursesOfCategory: (category_id) => {
    return new Promise((resolve, reject) => {
      console.log("Setting up Content for Category with ID " + category_id);
      let sample = require('./sampleData').coursesForCategory(category_id);
      let _Courses = require('../../utils/database').Courses;
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
const UserHelper = {
  clearDataBase: () => {
    return new Promise((resolve, reject) => {
      console.log("Clearing all Content in Table vhslq_teilnehmer");
      knex("vhslq_teilnehmer")
        .del()
        .then(() => {
          console.log("Finished clearing all Content in Table vhslq_teilnehmer");
          resolve();
        })
        .catch((error) => {
          reject(error);
        })
    })
  },

  addCoursesToSampleUser: (user_id) => {
    return new Promise((resolve, reject) => {
      console.log("Adding Sample Courses To User ID " + user_id);
      CoursesHelper.setupDataBase().then((courses) => {
        let applications = [];
        courses.map(item => {
            let courseId = item.attributes.id;
            // this is a valid application (ANM_STAT_ID is 1)
            applications.push(generateApplicationFor(user_id, courseId));
            // this is a cancelled application (ANM_STAT_ID is 3) and should be filtered by api/v1/user/me/courses
            let invalidApplication = generateApplicationFor(user_id, courseId);
            invalidApplication.ANM_STAT_ID = 3;
            applications.push(invalidApplication);
          })
        let _Applications = require('../../utils/database').Applications
        Promise.all(_Applications.forge(applications).invokeMap('save')).then(() => {
          console.log("Finished Adding Courses to User ID " + user_id);
          resolve("done");
        }).catch((error) => {
          console.log(error)
          reject(error);
        })
      })
    });
  }
}


exports.Auth = AuthHelper;
exports.Categories = CategoriesHelper;
exports.Courses = CoursesHelper;
exports.User = UserHelper;
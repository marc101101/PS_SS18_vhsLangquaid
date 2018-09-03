'use strict';

var User = require('../utils/database').User;
var Applications = require('../utils/database').Application
var knex = require('../utils/database').knex;

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../config'); // get config file
var Errors = require('../utils/errors');

/**
 * get me
 * Get authorized User (me)
 *
 * returns User
 **/
exports.userMeGET = function (id) {
  return new Promise((resolve, reject) => {
    User.where({
        teil_id: id
      })
      .fetch()
      .then((user) => {
        if (!user) {
          reject(Errors.notFound("GET ID " + id, "USER"))
        }
        /*let trimmedUser = {
          "firstname": user.attributes.TEIL_VORNAME,
          "address": user.attributes.TEIL_ORT,
          "id": user.attributes.TEIL_ID,
          "email": user.attributes.TEIL_EMAIL,
          "lastname": user.attributes.TEIL_NACHNAME
        };*/
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

exports.userMeCoursesGET = function (user_id) {
  return new Promise(function (resolve, reject) {
    Applications
      .where({
        ANM_TEIL_ID: user_id
      })
      .fetchAll({
        withRelated: ["course"]
      })
      .then((applications) => {
        resolve(applications.models);
      })
      .catch((error) => {
        reject(error);
      });
  });
}


/**
 * register a new user
 * register new user
 *
 * data Object user data
 * returns Object
 **/
exports.userPOST = function (data) {
  return new Promise(function (resolve, reject) {
    new User(data)
      .save()
      .then((user) => {
        let token = jwt.sign({
          id: user.attributes.id
        }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        resolve({
          user: user,
          token: token
        });
      })
      .catch((error) => {
        reject(error);
      })
  });
}


/**
 * edit user details
 *
 * user_id Integer 
 * returns Object
 **/
exports.userPUT = function (id, data) {
  return new Promise(function (resolve, reject) {
    User.where({
        teil_id: id
      })
      .save(data, {
        patch: true
      })
      .then(userModel => {
        if (!userModel) {
          reject(Errors.notFound("PUT ID " + id, "USER"));
        }
        resolve(userModel);
      })
      .catch(err => {
        reject(err);
      });
  });
}

if (process.env.NODE_ENV === 'test') {
  exports.clearDataBase = () => {
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
  }

  exports.addCoursesToSampleUser = (user_id) => {
    return new Promise((resolve, reject) => {
      console.log("Adding Sample Courses To User ID " + user_id);
      let setupCourses = require('../service/CoursesService').setupDataBase;
      setupCourses().then((courses) => {
        let _Applications = require('../utils/database').Applications
        let generateApplicationFor = require('../service/CoursesService').generateApplicationFor;
        let applications = courses
          .map(item => item.attributes.id)
          .map(course_id => generateApplicationFor(user_id, course_id))
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
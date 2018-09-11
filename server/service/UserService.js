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
        withRelated: ["course.location"]
      })
      .then((applications) => {
        let courses = applications.map(item => item.related('course').toJSON());
        resolve(courses);
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
    User.where({teil_email: data.teil_email})
      .fetch()
      .then((model) => {
          if (!model) {
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
          } else {
            reject(Errors.conflict("POST USER EMAIL"))
          }
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
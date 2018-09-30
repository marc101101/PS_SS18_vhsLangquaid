'use strict';

var User = require('../utils/database').User;
var Applications = require('../utils/database').Application
var knex = require('../utils/database').knex;

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../config'); // get config file
var Errors = require('../utils/errors');
var Trimmer = require('../utils/trim');

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
        resolve(Trimmer.user(user.toJSON()));
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * get courses of one user
 *
 * data Object user id
 * returns application of user to courses
 **/
exports.userMeCoursesGET = function (user_id) {
  return new Promise(function (resolve, reject) {
    Applications
      .query({
        where: {
          ANM_TEIL_ID: user_id,
          ANM_STAT_ID: 2
        },
        orWhere: 
        { ANM_TEIL_ID: user_id,
          ANM_STAT_ID: 1
        }
      })
      .fetchAll({
        withRelated: ["course.location"]
      })
      .then((applications) => {
        let courses = applications.map(item => item.related('course').toJSON());
        resolve(Trimmer.courses(courses));
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
    User.where({TEIL_EMAIL  : data.TEIL_EMAIL})
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
              // for some reason, bookshelf returns TEIL_ID just as id after saving
              let trimmedUser = Trimmer.user(user.toJSON());
              trimmedUser.TEIL_ID = user.attributes.id;
              resolve({
                user: trimmedUser,
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
      .then(user => {
        if (!user) {
          reject(Errors.notFound("PUT ID " + id, "USER"));
        }
        resolve(Trimmer.user(user.toJSON()));
      })
      .catch(err => {
        reject(err);
      });
  });
}

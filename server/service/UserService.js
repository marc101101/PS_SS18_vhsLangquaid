'use strict';

var User = require('../utils/database').User;
var knex = require('../utils/database').knex;

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../config'); // get config file

/**
 * get me
 * Get authorized User (me)
 *
 * returns User
 **/
exports.userGET = function(id) {
  return new Promise((resolve, reject) => {
    User.where({teil_id: id})
      .fetch()
      .then((user) => {
        resolve(user);
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
exports.userPOST = function(data) {
  return new Promise(function(resolve, reject) {
    new User(data)
      .save()
      .then((user) => {
        let token = jwt.sign({ id: user.attributes.id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        resolve({user: user, token: token});
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
exports.userPUT = function(id, data) {
  return new Promise(function(resolve, reject) {
    User.where({teil_id: id})
        .save(data, {patch: true})
        .then(userModel => {
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
}
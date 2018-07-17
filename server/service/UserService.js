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
exports.userUser_idPUT = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

if (process.env.NODE_ENV === 'test') {
  console.log("Clearing all Content in Table vhslq_teilnehmer");
  exports.clearDataBase = () => {
    return new Promise((resolve, reject) => {
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
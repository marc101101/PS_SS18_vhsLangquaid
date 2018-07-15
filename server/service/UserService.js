'use strict';

var User = require('../utils/database').User;
var knex = require('../utils/database').knex;
/**
 * get me
 * Get authorized User (me)
 *
 * returns User
 **/
exports.userGET = function() {
  return new Promise((resolve, reject) => {

    // TODO: For testing only, needs to be changed to get id from authtoken or similar
    User.where({teil_vorname: "John"})
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
        resolve(user);
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
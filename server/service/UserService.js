'use strict';


/**
 * get me
 * Get authorized User (me)
 *
 * returns User
 **/
exports.userGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstname" : "Hans",
  "password" : "hunter22",
  "id" : 1,
  "email" : "email@internet.com",
  "lastname" : "Schuller"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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


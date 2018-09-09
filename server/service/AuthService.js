'use strict';

var VerifyToken = require('../utils/VerifyToken');
var User = require('../utils/database').User;
var knex = require('../utils/database').knex;

/**
 * Configure JWT
 */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../config'); // get config file
var Errors = require('../utils/errors');

/**
 * get authtoken from server
 *
 * data UserData 
 * returns AuthData
 **/
exports.authPOST = function (data) {
    return new Promise((resolve, reject) => {
      User.where({ TEIL_EMAIL: data.email })
        .fetch()
        .then((userModell) => {
          let user = userModell.attributes;
          var passwordIsValid = data.password.localeCompare(user.TEIL_PASSWORT) == 0;
          if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
          let token = jwt.sign({ id: user.TEIL_ID }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
          });
        resolve({token: token});
        })
        .catch((error) => {
          reject(Errors.invalidAuth());
        });
    });
  
}
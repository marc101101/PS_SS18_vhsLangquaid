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

/**
 * get authtoken from server
 *
 * data UserData 
 * returns AuthData
 **/
exports.authPOST = function (data) {
 
  /*return new Promise(function (resolve, reject) {
    
    User.where({ email: data.email }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
      
      // check if the password is valid
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
  
      // if user is found and password is valid
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
  
      // return the information including token as JSON
      res.status(200).send({ auth: true, token: token });
    });
    });*/

    return new Promise((resolve, reject) => {

      User.where({ TEIL_EMAIL: data.email })
        .fetch()
        .then((user) => {
          let token = jwt.sign({ id: user.attributes.TEIL_ID }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
          });
        resolve({token: token});
        })
        .catch((error) => {
          reject(error);
        });
    });
  
}
'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get config file

module.exports.userGET = function userGET (req, res, next) {  
  var token = req.headers['authorization'];
  if (!token) { 
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }
  token = token.replace("Bearer ", "");
  jwt.verify(token, config.secret, function(err, decoded) {
  if (err) { 
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  }
  User.userGET(decoded.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response.message, response.code);
    });
  });
};

module.exports.userPOST = function userPOST (req, res, next) {
  var data = req.swagger.params['data'].value;
  User.userPOST(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUser_idPUT = function userUser_idPUT (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  User.userUser_idPUT(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

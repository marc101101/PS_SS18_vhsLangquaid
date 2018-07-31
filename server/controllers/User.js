'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

var verifyToken = require('../utils/VerifyToken');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get config file

module.exports.userMeGET = function userMeGET (req, res, next) {  
  verifyToken(req, res, (decoded) => {
    User.userMeGET(decoded.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
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

module.exports.userPUT = function userPUT (req, res, next) {
  var data = req.swagger.params['data'].value;
  verifyToken(req, res, (decoded) => {
    User.userPUT(decoded.id, data)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
  });
};

'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userGET = function userGET (req, res, next) {
  User.userGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
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

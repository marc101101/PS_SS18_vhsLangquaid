'use strict';

var utils = require('../utils/writer.js');
var Contact = require('../service/ContactService');

module.exports.contactPOST = function contactPOST (req, res, next) {
  var data = req.swagger.params['data'].value;
  Contact.contactPOST(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

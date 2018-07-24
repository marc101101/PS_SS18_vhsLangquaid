'use strict';

var utils = require('../utils/writer.js');
var Categories = require('../service/CategoriesService');

module.exports.categoriesCategory_idCoursesGET = function categoriesCategory_idCoursesGET (req, res, next) {
  var category_id = req.swagger.params['category_id'].value;
  Categories.categoriesCategory_idCoursesGET(category_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.code);
    });
};

module.exports.categoriesCategory_idGET = function categoriesCategory_idGET (req, res, next) {
  var category_id = req.swagger.params['category_id'].value;
  Categories.categoriesCategory_idGET(category_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesGET = function categoriesGET (req, res, next) {
  Categories.categoriesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

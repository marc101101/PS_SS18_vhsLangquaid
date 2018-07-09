'use strict';

var utils = require('../utils/writer.js');
var Courses = require('../service/CoursesService');

module.exports.coursesCourse_idApplyPOST = function coursesCourse_idApplyPOST (req, res, next) {
  var course_id = req.swagger.params['course_id'].value;
  Courses.coursesCourse_idApplyPOST(course_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.coursesCourse_idFeedbackPOST = function coursesCourse_idFeedbackPOST (req, res, next) {
  var course_id = req.swagger.params['course_id'].value;
  var data = req.swagger.params['data'].value;
  Courses.coursesCourse_idFeedbackPOST(course_id,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.coursesCourse_idGET = function coursesCourse_idGET (req, res, next) {
  var course_id = req.swagger.params['course_id'].value;
  Courses.coursesCourse_idGET(course_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.coursesCourse_idSignoffPOST = function coursesCourse_idSignoffPOST (req, res, next) {
  var course_id = req.swagger.params['course_id'].value;
  Courses.coursesCourse_idSignoffPOST(course_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.coursesGET = function coursesGET (req, res, next) {
  Courses.coursesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.coursesHighlightsGET = function coursesHighlightsGET (req, res, next) {
  Courses.coursesHighlightsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

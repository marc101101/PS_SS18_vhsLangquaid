'use strict';

var AppFeedback = require('../utils/database').AppFeedback;
var knex = require('../utils/database').knex;
var Errors = require('../utils/errors');

/**
 * give general feedback to the team
 * give general feedback to the team
 *
 * data GeneralFeedback 
 * returns GeneralFeedback
 **/
exports.contactPOST = function(data) {
  return new Promise(function(resolve, reject) {
    new AppFeedback(data)
      .save()
      .then((feedback) => {
        resolve(feedback.attributes);
      })
      .catch((error) => {
        reject(error);
      })
  });
}


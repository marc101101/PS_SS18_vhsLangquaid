'use strict';


/**
 * give general feedback to the team
 * give general feedback to the team
 *
 * data GeneralFeedback 
 * returns GeneralFeedback
 **/
exports.contactPOST = function(data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "text" : "This app is great!",
  "email" : "this@me.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


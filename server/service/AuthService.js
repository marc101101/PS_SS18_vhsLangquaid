'use strict';


/**
 * get authtoken from server
 * get authtoken from server
 *
 * data UserData 
 * returns AuthData
 **/
exports.authPOST = function(data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "token" : "abc.123321.cba"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


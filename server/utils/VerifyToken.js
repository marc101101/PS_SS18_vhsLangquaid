//source: https://github.com/adnanrahic/securing-restful-apis-with-jwt/blob/master/auth/VerifyToken.js

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file

var Errors = require('./errors');

function verifyToken(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.headers['authorization'];
    // verifies secret and checks exp
    if (!token) { 
      let err = Errors.missingAuth();
      return res.status(err.code).send(err);
    }
    token = token.replace("Bearer ", "");
    jwt.verify(token, config.secret, function(err, decoded) {
    if (err) { 
      let error = Errors.invalidAuth()
      return res.status(error.code).json(error);
    }
    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    next(decoded);
  });
}

module.exports = verifyToken;
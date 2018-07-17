//source: https://github.com/adnanrahic/securing-restful-apis-with-jwt/blob/master/auth/VerifyToken.js

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file

function verifyToken(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.headers['authorization'];
    // verifies secret and checks exp
    if (!token) { 
      return res.status(401).send({ auth: false, message: 'No token provided.' });
    }
    token = token.replace("Bearer ", "");
    jwt.verify(token, config.secret, function(err, decoded) {
    if (err) { 
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    next(decoded);
  });
}

module.exports = verifyToken;
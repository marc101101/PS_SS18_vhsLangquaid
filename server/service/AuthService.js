'use strict';

var VerifyToken = require('../utils/VerifyToken');
var User = require('../utils/database').User;
var knex = require('../utils/database').knex;

/**
 * Configure JWT
 */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../config'); // get config file

/**
 * get authtoken from server
 *
 * data UserData 
 * returns AuthData
 **/
exports.authPOST = function (data) {
    return new Promise((resolve, reject) => {
      User.where({ TEIL_EMAIL: data.email })
        .fetch()
        .then((user) => {
          /* check if the password is valid
          var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
          if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
          */
          let token = jwt.sign({ id: user.attributes.TEIL_ID }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
          });
        resolve({token: token});
        })
        .catch((error) => {
          reject(error);
        });
    });
  
}

if (process.env.NODE_ENV === 'test') {
  console.log("Clearing all Content in Table vhslq_teilnehmer and Insert valid user");
  exports.clearDataBaseInsertUser = () => {
    return new Promise((resolve, reject) => {
      let user =  {
        teil_vorname: "John",
        teil_nachname: "Doe",
        teil_email: "johndoe@vhslq.de",
        teil_notizen: "john's notes",
        eingegeben_von_user: 0,
        eingegeben_am_datum: "2018-01-01",
        eingegeben_am_zeit: "00:00:00",
        datenhistory: "John's data history"
      };
      
      knex("vhslq_teilnehmer")
        .del()
        .then(() => {
          console.log("Finished clearing all Content in Table vhslq_teilnehmer");
          new User(user)
            .save()
            .then((user) => {
              console.log("Insert valid user.");
              resolve(user);
            })
            .catch((error) => {
              reject(error);
            });
          resolve();
        })
        .catch((error) => {
          reject(error);
        })
    });
  }
}
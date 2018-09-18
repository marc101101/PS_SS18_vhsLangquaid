let dbHelper = require('./helpers/dbhelpers')


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');
let Errors = require('../utils/errors');

let sampleUser = require('./helpers/sampleData').user();

let should = chai.should();

chai.use(chaiHttp);

describe('User', () => {
  let authToken = "";
  let userID = "";
  let teacherID = "";
  before(() => {
    return dbHelper.User
      .clearDataBase()
  });
  it("it should fail with 401 because auth token is missing", (done) => {
    chai.request(server)
      .get('/v1/user/me')
      .end((err, res) => {
        let compareError = Errors.missingAuth();
        res.should.have.status(compareError.code);
        res.body.message.should.equal(compareError.message);
        done();
      })
  })
  it("it should fail with 401 because auth token is incorrect", (done) => {
    chai.request(server)
      .get('/v1/user/me')
      .set('authorization', 'Bearer ' + "obviously.incorrect.token")
      .end((err, res) => {
        let compareError = Errors.invalidAuth();
        res.should.have.status(compareError.code);
        res.body.message.should.equal(compareError.message);
        done();
      });
  })
  it("it should create user John Doe", (done) => {
    chai.request(server)
      .post('/v1/user')
      .set("Content-Type", "application/json")
      .send(sampleUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.user.TEIL_VORNAME.should.equal(sampleUser.TEIL_VORNAME);
        res.body.user.TEIL_NACHNAME.should.equal(sampleUser.TEIL_NACHNAME);
        res.body.user.TEIL_EMAIL.should.equal(sampleUser.TEIL_EMAIL);
        userID = res.body.user.TEIL_ID;
        authToken = res.body.token;
        done();
      })
  });
  it("it should get user John Doe", (done) => {
    chai.request(server)
      .get('/v1/user/me')
      .set('authorization', 'Bearer ' + authToken)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.TEIL_VORNAME.should.equal("John");
        res.body.TEIL_NACHNAME.should.equal("Doe");
        done();
      })
  });
  it("it should update John Doe's Name to John Although", (done) => {
    chai.request(server)
      .put('/v1/user/me')
      .set('authorization', 'Bearer ' + authToken)
      .send({TEIL_NACHNAME: "Although"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.TEIL_NACHNAME.should.equal("Although");
        chai.request(server)
          .get('/v1/user/me')
          .set('authorization', 'Bearer ' + authToken)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.TEIL_VORNAME.should.equal("John");
            res.body.TEIL_NACHNAME.should.equal("Although");           
            done();
          });
      });
  });
  it("it should get John Doe's Courses", (done) => {
    dbHelper.User.addCoursesToSampleUser(userID).then(() => {

      chai.request(server)
      .get('/v1/user/me/courses')
      .set('authorization', 'Bearer ' + authToken)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.equal(2);
        res.body[0].DATENHISTORY.should.equal("COURSE_IDENTIFIER");
        res.body[1].DATENHISTORY.should.equal("COURSE_IDENTIFIER");
        done();
      })
    })
  })
  it("it should try to create a user with an already used emai and fail", (done) => {
    let user =  {
      TEIL_VORNAME: "Peter",
      TEIL_NACHNAME: "Lustig",
      TEIL_EMAIL: "johndoe@vhslq.de",
      TEIL_NOTIZEN: "Peter's notes",
      TEIL_PASSWORT: "hunter22",
      EINGEGEBEN_VON_USER: 0,
      EINGEGEBEN_AM_DATUM: "2018-01-01",
      EINGEGEBEN_AM_ZEIT: "00:00:00",
      DATENHISTORY: "Peters's data history"
    }
    chai.request(server)
      .post('/v1/user')
      .set("Content-Type", "application/json")
      .send(user)
      .end((err, res) => {
        res.should.have.status(409);
        done();
      })
  });
});
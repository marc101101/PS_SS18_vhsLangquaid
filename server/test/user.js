let userService = require('../service/UserService');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');

let should = chai.should();

chai.use(chaiHttp);

describe('User', () => {
  let authToken = "";
  before(() => {
    return userService
      .clearDataBase()
  });
  it("it should fail with 401 because auth token is missing", (done) => {
    chai.request(server)
      .get('/v1/user')
      .end((err, res) => {
        res.should.have.status(401);
        done();
      })
  })
  it("it should fail with 500 because auth token is incorrect", (done) => {
    chai.request(server)
      .get('/v1/user')
      .set('authorization', 'Bearer ' + "obviously.incorrect.token")
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  })
  it("it should create user John Doe", (done) => {
    let user =  {
      teil_vorname: "John",
      teil_nachname: "Doe",
      teil_email: "johndoe@vhslq.de",
      teil_notizen: "john's notes",
      eingegeben_von_user: 0,
      eingegeben_am_datum: "2018-01-01",
      eingegeben_am_zeit: "00:00:00",
      datenhistory: "John's data history"
    }
    chai.request(server)
      .post('/v1/user')
      .set("Content-Type", "application/json")
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.user.teil_vorname.should.equal(user.teil_vorname);
        res.body.user.teil_nachname.should.equal(user.teil_nachname);
        res.body.user.teil_email.should.equal(user.teil_email);
        authToken = res.body.token;
        done();
      })
  });
  it("it should get user John Doe", (done) => {
    chai.request(server)
      .get('/v1/user')
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
      .put('/v1/user')
      .set('authorization', 'Bearer ' + authToken)
      .send({teil_nachname: "Although"})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.teil_nachname.should.equal("Although");
        chai.request(server)
          .get('/v1/user')
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
});
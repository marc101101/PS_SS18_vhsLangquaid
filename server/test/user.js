let userService = require('../service/UserService');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');

let should = chai.should();

chai.use(chaiHttp);

describe('User', () => {
  before(() => {
    return userService
      .clearDataBase()
  });
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
        res.body.teil_vorname.should.equal(user.teil_vorname);
        res.body.teil_nachname.should.equal(user.teil_nachname);
        res.body.teil_email.should.equal(user.teil_email);
        done();
      })
  });
  it("it should get user John Doe", (done) => {
    chai.request(server)
      .get('/v1/user')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.TEIL_VORNAME.should.equal("John");
        res.body.TEIL_NACHNAME.should.equal("Doe");
        done();
      })
  });
});
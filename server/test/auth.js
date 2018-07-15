let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');

let should = chai.should();

chai.use(chaiHttp);

let validUser = {email: 'johndoe@vhslq.de', password: 'hunter22'};
let invalidUser = {email: 'franzXYZ@vhslq.de', password: 'hunter22'}

describe('Authentication', () => {
    /*before(() => {
      return userService
        .clearDataBase()
    });*/
  
  it("it should return an valid jwt token", (done) => {
    chai.request(server)
      .post('/v1/auth')
      .send(validUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');        
        res.body.should.contain.keys('token');
        done();
      })
  });

  //it("it should return status 401 (not authorized)")
  it("it should return empty user", (done) => {
    chai.request(server)
      .post('/v1/auth')
      .send(invalidUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object')
        done();
      })
  });

});
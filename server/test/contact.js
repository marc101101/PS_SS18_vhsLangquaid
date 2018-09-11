let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../..');

let should = chai.should();

chai.use(chaiHttp);

describe('Contact', () => {
    it("it should post a feedback of the app", (done) => {
      chai.request(server)
      .post('/v1/contact/')
      .set("Content-Type", "application/json")
      .send({
        text: "Solid App! 10/10",
        bewertung: 5,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.bewertung.should.equal(5);
        res.body.should.be.a('object');
        done();
      })
    });
});
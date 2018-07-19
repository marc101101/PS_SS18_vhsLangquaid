let coursesService = require('../service/CoursesService');
let sampleCourses = require('../utils/sampleData').courses();

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');

let should = chai.should();

chai.use(chaiHttp);

describe('Courses', () => {

  it("it should get no course", (done) => {
    coursesService.clearDataBase().then(() => {
      chai.request(server)
        .get('/v1/courses')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.should.be.empty;
          done();
        });
    })
  });

  it("it should course by ID", (done) => {
    coursesService.setupDataBase().then(() => {
      chai.request(server)
        .get('/v1/courses')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.equal(sampleCourses.length);
          res.body
            .forEach((item) => {
              let index = sampleCourses.map(item => item.KURS_NAME).indexOf(item.KURS_NAME);
              item.KURS_NAME.should.equal(sampleCourses[index].KURS_NAME);
            });
          done();
        })
    })
  });
});
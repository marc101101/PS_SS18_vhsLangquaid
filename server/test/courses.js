let coursesService = require('../service/CoursesService');
let sampleCourses = require('../utils/sampleData').courses();
let sampleAppliactions = require('../utils/sampleData').applications();

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');

let should = chai.should();

chai.use(chaiHttp);

let user = {email: 'johndoe@vhslq.de', password: 'hunter22'};
let authToken = "";

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

  it("it should get all courses", (done) => {
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

  it("it should get single course by ID", (done) => {
    chai.request(server)
      .get('/v1/courses' + '/2018175')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.KURS_NAME.should.equal('Test course for testing purposes');
        done();
      });
  });

  it("it should get no course and 404 status", (done) => {
    coursesService.clearDataBase().then(() => {
      chai.request(server)
        .get('/v1/courses/' + '/2018175')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    })
  });

  it("it should get no course for an not existing course ", (done) => {
    coursesService.clearDataBase().then(() => {
      chai.request(server)
        .get('/v1/courses/' + '/NOT_EXISTING_COURSE_ID')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    })
  });

  it("it should return the course when applying to it", (done) => {
    chai.request(server)
      .post('/v1/user')
      .set("Content-Type", "application/json")
      .send(user)
      .end((err, res) => {
        authToken = res.body.token;
        done();
      })
      
      coursesService.setupCoursesOfCategory().then(() => {
        chai.request(server)
          .post('/v1/courses/' + '2018236' + '/apply')
          .set('authorization', 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTA0OCwiaWF0IjoxNTMyMzMyNjczLCJleHAiOjE1MzI0MTkwNzN9.9i4nDUg6f-IrgvCxGo-5LW0k9CSMLjHM89r0EnbbX3I")
          .end((err, res) => {
            res.should.have.status(200);
            res.body.length.should.equal(0);
            done();
          });
        });
    });

    it("it should return that the application by this user for this course already exists", (done) => {
      chai.request(server)
        .post('/v1/courses/' + '2018236' + '/apply')
        .set('authorization', 'Bearer ' + authToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.length.should.equal(1);
          done();
        });
    });

    it("it should return that the course ID is not existing for the appliaction", (done) => {
      chai.request(server)
        .post('/v1/courses/' + 'NOT_EXISTING_COURSE_ID' + '/apply')
        .set('authorization', 'Bearer ' + authToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.length.should.equal(1);
          done();
        });
    });


});
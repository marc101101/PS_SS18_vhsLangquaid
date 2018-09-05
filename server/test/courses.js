let coursesService = require('../service/CoursesService');
let sampleCourses = require('../utils/sampleData').courses();
let sampleAppliactions = require('../utils/sampleData').applications();

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');
let moment = require('moment');

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

  it("it should return the application entry after successfull apply", (done) => {
    chai.request(server)
      .post('/v1/auth')
      .set("Content-Type", "application/json")
      .send(user)
      .end((err, res) => {
        authToken = res.body.token;
      });
      
      coursesService.setupDataBase().then(() => {
        coursesService.setupCoursesOfCategory(818).then(() => {
          chai.request(server)
            .post('/v1/courses/' + '2018175' + '/apply')
            .set('authorization', 'Bearer ' + authToken)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.ANM_KURS_ID.should.equal(2018175);
              done();
            });
          });
        });
    });

    it("it should return that the application by this user for this course already exists", (done) => {
      chai.request(server)
        .post('/v1/courses/' + '2018175' + '/apply')
        .set('authorization', 'Bearer ' + authToken)
        .end((err, res) => {
          res.should.have.status(409);          
          res.body.message.should.include("Resource Application for course 2018175");
          done();
        });
    });

    it("it should return that the course ID is not existing for the appliaction", (done) => {
      chai.request(server)
        .post('/v1/courses/' + '11111111' + '/apply')
        .set('authorization', 'Bearer ' + authToken)
        .end((err, res) => {          
          res.should.have.status(404);
          res.body.message.should.equal("Resource course with ID 11111111 not found.");
          done();
        });
    });

    it("it should return that the user successfully signed off the course appliaction", (done) => {
      chai.request(server)
        .post('/v1/courses/' + '2018175' + '/signoff')
        .set('authorization', 'Bearer ' + authToken)
        .end((err, res) => {
          res.should.have.status(200);          
          res.body.ANM_ABR_ABRECHNEN.should.equal(1);
          res.body.ANM_ABR_DATUM.should.equal(moment().format('YYYY-MM-DD'));
          done();
        });
    });

    it("it should return that no rows where updated", (done) => {
      chai.request(server)
        .post('/v1/courses/' + '11111111' + '/signoff')
        .set('authorization', 'Bearer ' + authToken)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.message.should.equal("Resource course with ID 11111111 not found.");
          done();
        });
    });
    
});

describe("Courses Last Minute", () => {
  it("it should get an empty array of courses", (done) => {
    coursesService.clearDataBase().then(() => {
      chai.request(server)
        .get('/v1/courses/lastminute')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.should.be.empty;
          done();
        })
    })
  });

  it("it should create 4 courses but only return 1 course as valid last minute course", (done) => {
    coursesService.setupLastMinute().then(() => {
      chai.request(server)
        .get('/v1/courses/lastminute')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.equal(1);
          done();
        })
    })
  });
}); 

describe("Courses Highlights", () => {
  it("it should get an empty array of courses", (done) => {
    coursesService.clearDataBase().then(() => {
      chai.request(server)
        .get('/v1/courses/highlights')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.should.be.empty;
          done();
        })
    })
  });

  it("it should create 4 courses but only return 1 course as valid highlight course", (done) => {
    coursesService.setupHighlights().then(() => {
      chai.request(server)
        .get('/v1/courses/highlights')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.equal(1);
          done();
        })
    })
  });
}); 
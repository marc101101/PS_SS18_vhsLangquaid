let coursesService = require('../service/CoursesService');
let sampleCourses = require('./helpers/sampleData').courses();
let sampleAppliactions = require('./helpers/sampleData').applications();
let dbHelper = require('./helpers/dbhelpers')


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
    dbHelper.Courses.clearDataBase().then(() => {
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
    dbHelper.Courses.setupDataBase().then(() => {
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
    dbHelper.Courses.clearDataBase().then(() => {
      chai.request(server)
        .get('/v1/courses/' + '/2018175')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    })
  });

  it("it should get no course for an not existing course ", (done) => {
    dbHelper.Courses.clearDataBase().then(() => {
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
      
      dbHelper.Courses.setupDataBase().then(() => {
        dbHelper.Courses.setupCoursesOfCategory(818).then(() => {
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
          res.body.message.should.include("Course ID 2018175");
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
          res.body.ANM_STAT_ID.should.equal(3);
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
    dbHelper.Courses.clearDataBase().then(() => {
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
    dbHelper.Courses.setupLastMinute().then(() => {
      chai.request(server)
        .get('/v1/courses/lastminute')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.equal(1);
          res.body[0].DATENHISTORY.should.equal("COURSE_IDENTIFIER");
          done();
        })
    })
  });
}); 

describe("Courses Highlights", () => {
  var courseID = 0;
  it("it should get an empty array of courses", (done) => {
    dbHelper.Courses.clearDataBase().then(() => {
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
    dbHelper.Courses.setupHighlights().then(() => {
      chai.request(server)
        .get('/v1/courses/highlights')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.equal(1);
          courseID = res.body[0].KURS_ID;
          done();
        })
    })
  });

  it("it should create a feedback for the found highlight course", (done) => {
    chai.request(server)
      .post('/v1/courses/'+courseID+'/feedback')
      .set("Content-Type", "application/json")
      .send({
        text: "Solid Course! 10/10",
        bewertung: 5,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.bewertung.should.equal(5);
        res.body.should.be.a('object');
        done();
      })
  })

  it("it should show valid teacher data for all highlight courses", (done) => {

    dbHelper.Courses.setupHighlightsCoursesWithTeacher()
      .then(() => {
        chai.request(server)
      .get('/v1/courses/highlights')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.forEach(item => {
          item.teacher.TEIL_VORNAME.should.equal("John");
          item.teacher.DATENHISTORY.should.equal("USER_IDENTIFIER");
        })        
        done();
      })
      })
  })
  it("it should get all courses with found by a query", (done) => {
    chai.request(server)
      .get('/v1/courses')
      .query({search: 'schuhe'})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.forEach(item => {
          item.KURS_NAME.toLowerCase().should.contain('schuhe');
          item.DATENHISTORY.should.equal("COURSE_IDENTIFIER");
        })
        done();
      })
  })
}); 
let coursesService = require('../service/CoursesService');
let sampleCategories = require('../utils/sampleData').courses();

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
        res.body.length.should.equal(sampleCategories.length);
        res.body
          .forEach((item) => {
            let index = sampleCategories.map(item => item.rub_name).indexOf(item.RUB_NAME);
            item.RUB_TITEL.should.equal(sampleCategories[index].rub_titel);
            item.RUB_NAME.should.equal(sampleCategories[index].rub_name);
            item.RUB_TEXT.should.equal(sampleCategories[index].rub_text);
          });
        done();
      })
    })
  });
});
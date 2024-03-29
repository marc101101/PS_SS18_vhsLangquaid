let sampleCategories = require('./helpers/sampleData').categories();
let dbHelper = require('./helpers/dbhelpers')


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');

let should = chai.should();

chai.use(chaiHttp);

describe('Categories', () => {
  it("it should get no categories", (done) => {
    dbHelper.Categories.clearDataBase().then(() => {
      chai.request(server)
      .get('/v1/categories')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.should.be.empty;
        done();
      });
    })
  });
  it("should fail for category id 42", (done) => {
    chai.request(server)
      .get('/v1/categories/42/courses')
      .end((err, res) => {
        res.should.have.status(404);
        done();
    })
  })
  let categoryIDs = new Promise((resolve, reject) => {
    it("it should get all categories", (done) => {
      dbHelper.Categories.setupDataBase().then(() => {
        dbHelper.Courses.clearDataBase().then(() => {
          chai.request(server)
          .get('/v1/categories')
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

            resolve(res.body.map(item => item.RUB_ID));
            done();
          });
        });
      })
    });
  });
  
  categoryIDs.then(ids => {
    describe("Courses For Category", () => {
    ids.forEach((id) => {
      it("should get all courses from category "+id, (done) => {
        dbHelper.Courses.setupCoursesOfCategory(id).then(() => {
          chai.request(server)
            .get('/v1/categories/'+id+'/courses')
            .end((err, res) => {
              res.should.have.status(200);
              res.body.length.should.equal(3);
              res.body[0].DATENHISTORY.should.equal("COURSE_IDENTIFIER");
              res.body[1].DATENHISTORY.should.equal("COURSE_IDENTIFIER");
              res.body[2].DATENHISTORY.should.equal("COURSE_IDENTIFIER");
              done();
            })
          })
        })
      })
    })
  })
});
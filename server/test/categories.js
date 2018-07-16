let categoriesService = require('../service/CategoriesService');
let sampleCategories = require('../utils/sampleData').categories();

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');

let should = chai.should();

chai.use(chaiHttp);

describe('Categories', () => {
  it("it should get no categories", (done) => {
    categoriesService.clearDataBase().then(() => {
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
  
  it("it should get all categories", (done) => {
    categoriesService.setupDataBase().then(() => {
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
        done();
      })
    })
  });
});
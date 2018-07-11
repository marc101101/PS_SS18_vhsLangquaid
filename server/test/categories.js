let categoriesService = require('../service/CategoriesService');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');

let should = chai.should();

chai.use(chaiHttp);

describe('Categories', () => {
  before(() => {
    return Promise.all([
      categoriesService.clearDataBase(),
      categoriesService.setupDataBase()]);
  });
  
  it("it should get all categories", (done) => {
    chai.request(server)
      .get('/v1/categories')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      })
  })
});
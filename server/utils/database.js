var knex = require('knex')({
  client: 'mariasql',
  debug: false,
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    db: 'usr_p100480_1',
    charset: 'utf8'
  }
});
var bookshelf = require('bookshelf')(knex);
exports.knex = knex;


let course = bookshelf.Model.extend({
  tableName: "vhslq_kurse",
  // use function() instead of lambda big arrow here otherwise "this" is not the correct this ....
  category: function() {
    return this.belongsTo(category, "RUB_ID")
  }
})

let category  = bookshelf.Model.extend({
  tableName: 'vhslq_rubriken',
  // use function() instead of lambda big arrow here otherwise "this" is not the correct this ....
  courses: function() {
    return this.hasMany(course, "KURS_RUB_ID", "RUB_ID")
  }
})

exports.User = bookshelf.Model.extend({
  tableName: 'vhslq_teilnehmer',
});

exports.Category = category
exports.Categories = bookshelf.Collection.extend({
  model: category
})

exports.Course = course
exports.Courses = bookshelf.Collection.extend({
  model: course
})
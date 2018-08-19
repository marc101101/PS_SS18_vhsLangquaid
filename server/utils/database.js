let connection = {}
if (process.env.NODE_ENV === 'test') {
  connection = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    db: 'usr_p100480_1',
    charset: 'utf8'
  }
} else {
  connection = {
    host: 'nivk0hz7m5elq4ql.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    user: 'va2ahq8gtxkt5ary',
    password: 'pzco6x0m6cuzs2r2',
    db: 'tm2irn2isbk6f1fx',
    charset: 'utf8'
  }
}

var knex = require('knex')({
  client: 'mariasql',
  debug: false,
  connection: connection
});

var moment = require('moment');
var bookshelf = require('bookshelf')(knex);
exports.knex = knex;

// -- COURSES
let course = bookshelf.Model.extend({
  tableName: "vhslq_kurse",
  // use function() instead of lambda big arrow here otherwise "this" is not the correct this ....
  category: function() {
    return this.belongsTo(category, "RUB_ID")
  },
  applications: function() {
    return this.hasMany(application, "ANM_KURS_ID", "KURS_ID")
  },
})

exports.Course = course
exports.Courses = bookshelf.Collection.extend({
  model: course
})

// -- CATEGORIES
let category  = bookshelf.Model.extend({
  tableName: 'vhslq_rubriken',
  // use function() instead of lambda big arrow here otherwise "this" is not the correct this ....
  courses: function() {
    return this.hasMany(course, "KURS_RUB_ID", "RUB_ID")
  }
})

exports.Category = category
exports.Categories = bookshelf.Collection.extend({
  model: category
})

// -- USER
exports.User = bookshelf.Model.extend({
  tableName: 'vhslq_teilnehmer',
});

// -- APPLICATIONS
let application  = bookshelf.Model.extend({
  tableName: 'vhslq_anmeldungen',
  course: function() {
    return this.belongsTo(course, "KURS_ID", "ANM_KURS_ID")
  },
  user: function() {
    return this.belongsTo(user, "TEIL_ID", "ANM_TEIL_ID")
  }
})

exports.Application = application;
exports.Applications = bookshelf.Collection.extend({
  model: application
})

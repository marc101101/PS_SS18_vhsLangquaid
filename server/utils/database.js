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

exports.User = bookshelf.Model.extend({
  tableName: 'vhslq_teilnehmer',
});

exports.knex = knex;

let category  = bookshelf.Model.extend({
  tableName: 'vhslq_rubriken',
})
exports.Category = category

exports.Categories = bookshelf.Collection.extend({
  model: category
})
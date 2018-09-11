'use strict';

var Categories = require('../utils/database').Category;
var knex = require('../utils/database').knex;
var Errors = require('../utils/errors');
/**
 * get all courses of a category
 * get all courses of a category
 *
 * category_id Integer 
 * returns List
 **/
exports.categoriesCategory_idCoursesGET = function(category_id) {
  return new Promise(function(resolve, reject) {
    Categories
      .where({rub_id: category_id})
      .fetch({withRelated: ["courses"]})
      .then((category => {
        if (!category) {
          reject(Errors.notFound("GET ID " +category_id, "Category"));
        }
        let courses = category.related("courses").toJSON();
        resolve(courses);
      }))
      .catch((error) => {
        reject(error);
      })
  });
}


/**
 * get category by id
 * get category by id
 *
 * category_id Integer 
 * returns Category
 **/
exports.categoriesCategory_idGET = function(category_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Kunst",
  "id" : 1,
  "text" : "Kunst ist toll"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all categories
 * get all categories
 *
 * returns List
 **/
exports.categoriesGET = function() {
  return new Promise(function(resolve, reject) {
    Categories
      .fetchAll()
      .then((categories) => {
        resolve(categories.map(item => item.attributes));
      })
      .catch((error) => {
        reject(error);
      });
  });
}

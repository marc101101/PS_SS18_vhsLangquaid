'use strict';

var Categories = require('../utils/database').Category;
var knex = require('../utils/database').knex;
/**
 * get all courses of a category
 * get all courses of a category
 *
 * category_id Integer 
 * returns List
 **/
exports.categoriesCategory_idCoursesGET = function(category_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "max_age" : 99,
  "name" : "Kunst-Grundkurs",
  "id" : 1,
  "text" : "Dass Kunst nicht immer fad ist, soll in diesem Kurs klar gemacht werden",
  "min_age" : 1
}, {
  "max_age" : 99,
  "name" : "Kunst-Grundkurs",
  "id" : 1,
  "text" : "Dass Kunst nicht immer fad ist, soll in diesem Kurs klar gemacht werden",
  "min_age" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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

if (process.env.NODE_ENV === 'test') {
  exports.clearDataBase = () => {
    return new Promise((resolve, reject) => {
      console.log("Clearing all Content in Table vhslq_rubriken");
      knex("vhslq_rubriken")
        .del()
        .then(() => {
          console.log("Finished clearing all Content in Table vhslq_rubriken");
          resolve("clean");
        })
        .catch((error) => {
          reject(error);
        })
    })
  }

  exports.setupDataBase = () => {
    return new Promise((resolve, reject) => {
      console.log("Setting up Content in Table vhslq_rubriken")
      let sample = require('../utils/sampleData').categories();
      let _Categories = require('../utils/database').Categories;
      let categories = _Categories
        .forge(sample)
        
      Promise.all(categories.invokeMap('save'))
        .then((data) => {
          console.log("Finished Setting up Content in Table vhslq_rubriken")
          resolve("done");
        })
        .catch((error) => {
          reject(error);
        })
    });
  }
}
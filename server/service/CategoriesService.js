'use strict';


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
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Kunst",
  "id" : 1,
  "text" : "Kunst ist toll"
}, {
  "name" : "Kunst",
  "id" : 1,
  "text" : "Kunst ist toll"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


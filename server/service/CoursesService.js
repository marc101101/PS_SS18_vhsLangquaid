'use strict';


/**
 * apply to participate in specific course
 * apply to participate in specific course
 *
 * course_id Integer 
 * returns Course
 **/
exports.coursesCourse_idApplyPOST = function(course_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "max_age" : 99,
  "name" : "Kunst-Grundkurs",
  "id" : 1,
  "text" : "Dass Kunst nicht immer fad ist, soll in diesem Kurs klar gemacht werden",
  "min_age" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * give feedback to a course
 * give feedback to a course
 *
 * course_id String 
 * data CourseFeedback  (optional)
 * returns CourseFeedback
 **/
exports.coursesCourse_idFeedbackPOST = function(course_id,data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "text" : "This app is great!",
  "email" : "this@me.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get course by id
 * get course by id
 *
 * course_id Integer 
 * returns Course
 **/
exports.coursesCourse_idGET = function(course_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "max_age" : 99,
  "name" : "Kunst-Grundkurs",
  "id" : 1,
  "text" : "Dass Kunst nicht immer fad ist, soll in diesem Kurs klar gemacht werden",
  "min_age" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * signoff to participate in specific course
 * signoff to participate in specific course
 *
 * course_id Integer 
 * returns Course
 **/
exports.coursesCourse_idSignoffPOST = function(course_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "max_age" : 99,
  "name" : "Kunst-Grundkurs",
  "id" : 1,
  "text" : "Dass Kunst nicht immer fad ist, soll in diesem Kurs klar gemacht werden",
  "min_age" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all courses
 * get all courses
 *
 * returns List
 **/
exports.coursesGET = function() {
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
 * get currated highlights
 * get currated highlights
 *
 * returns List
 **/
exports.coursesHighlightsGET = function() {
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


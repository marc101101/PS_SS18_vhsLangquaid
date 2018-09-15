
let courseFields = ["KURS_ID", "KURS_NAME", "KURS_BESCHREIBUNG", "location", "teacher"];
let userFields = ["TEIL_ID", "TEIL_EMAIL"];
let locationFields = ["ORT_ID", "ORT_NAME", "ORT_STRASSE", "ORT_PLZ", "ORT_ORTSNAME"];

let trimObject = (object, array) => {
    return array
    .map(item => object[item] ? {[item]: object[item]} : null)
    .filter(item => item)
    .reduce((old, current) => { 
        return {...old, ...current}
    }, {});
};

let trimCourse = (course) => {
    let newCourse = trimObject(course, courseFields);
    newCourse.teacher = newCourse.teacher ? trimUser(newCourse.teacher) : {};
    newCourse.location = newCourse.location ? trimLocation(newCourse.location) : {};
    return newCourse;
}
let trimCourses = (courses) => {
    return courses.map(course => trimCourse(course));
}
let trimUser = (user) => {
    return trimObject(user, userFields);
}
let trimUsers = (users) => {
    return users.map(user => trimUser(user));
}
let trimLocation = (location) => {
    return trimObject(location, locationFields);
}


exports.course = trimCourse;
exports.courses = trimCourses;

exports.user = trimUser;
exports.users = trimUsers;
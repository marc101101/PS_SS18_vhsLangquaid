
let courseFields = ["KURS_ID", "KURS_SUBNAME", "KURS_TEIL_MAX", "KURS_TEIL_MIN", "KURS_ANZAHLTERMINE", "KURS_MITZUBRINGEN", "KURS_PREIS", "KURS_ANMFRIST", "KURS_NAME", "KURS_BEGINN_UHRZEIT", "KURS_ENDE_UHRZEIT", "KURS_BESCHREIBUNG", "location", "teacher"];
let categoryFields = ["RUB_ID", "RUB_NAME", "RUB_TITEL", "RUB_TEXT"];
let userFields = ["TEIL_ID", "TEIL_EMAIL", "TEIL_VORNAME", "TEIL_NACHNAME"];
let locationFields = ["ORT_ID", "ORT_NAME", "ORT_STRASSE", "ORT_PLZ", "ORT_ORTSNAME"];

// for testing purposes also add field DATENHISTORY to each object 
if (process.env.NODE_ENV === 'test') {
    courseFields.push("DATENHISTORY");
    categoryFields.push("DATENHISTORY");
    userFields.push("DATENHISTORY");
    locationFields.push("DATENHISTORY");
}

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
let trimCategory = (category) => {
    let newCategory = trimObject(category, categoryFields);
    newCategory.courses = newCategory.courses ? trimCourses(newCategory.courses) : {};
    return newCategory;
}

let trimCategories = (categories) => { 
    return categories.map(category => trimCategory(category));
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

exports.category = trimCategory;
exports.categories = trimCategories;

exports.user = trimUser;
exports.users = trimUsers;
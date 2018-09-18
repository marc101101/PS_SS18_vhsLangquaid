(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-home-home-module"],{

/***/ "./client/app/components/home/categories/categories.component.html":
/*!*************************************************************************!*\
  !*** ./client/app/components/home/categories/categories.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container fullScreenBackground\">\r\n  <div class=\"circleBackground\"></div>   \r\n  <div class=\"columns is-mobile\">\r\n    <div class=\"column is-12\" style=\"z-index: 0; padding: 2rem; padding-left: 5rem;\">\r\n      <div style=\"font-size: 1.5rem; color:white;\">\r\n        Kurs Kategorien\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"column\" style=\"margin-top: -2rem;padding: 1.0rem;\">\r\n    <alert></alert>\r\n  </div>\r\n\r\n  <section style=\"padding: 1rem;\" *ngIf=\"dataIsAvailable\">\r\n    <div class=\"card\" *ngFor=\"let category of categories; let i=index\" (click)=\"routeToCourse(category.RUB_ID, colorArray[i], category.RUB_NAME)\">\r\n      <div class=\"color-marker\" [ngClass]=\"colorArray[i]\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <p class=\"title\">\r\n          {{category.RUB_NAME}}\r\n        </p>\r\n        <p class=\"subtitle\">\r\n          {{category.RUB_TEXT}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  \r\n</div>"

/***/ }),

/***/ "./client/app/components/home/categories/categories.component.scss":
/*!*************************************************************************!*\
  !*** ./client/app/components/home/categories/categories.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circleBackground {\n  height: 30rem;\n  width: 30rem;\n  z-index: 0;\n  background-color: #209cee;\n  border-radius: 15rem;\n  position: absolute;\n  margin-top: -13rem;\n  margin-left: -7rem; }\n\n.fullScreenBackground {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  overflow: hidden; }\n\n.card {\n  margin-top: 1rem;\n  border-radius: 0.5rem; }\n\n.title {\n  font-size: 1.25rem !important;\n  padding-left: 1rem; }\n\n.subtitle {\n  font-size: 0.9rem;\n  padding-left: 1rem; }\n\n.color-marker {\n  float: right;\n  height: 100%;\n  position: absolute;\n  width: 10px;\n  border-top-left-radius: 0.8rem;\n  border-bottom-left-radius: 0.8rem; }\n\n.primary {\n  background-color: #00d1b2; }\n\n.link {\n  background-color: #3273dc; }\n\n.info {\n  background-color: #23d160; }\n\n.success {\n  background-color: #ffdd57; }\n\n.warning {\n  background-color: #ffbc6b; }\n\n.danger {\n  background-color: #ff3860; }\n"

/***/ }),

/***/ "./client/app/components/home/categories/categories.component.ts":
/*!***********************************************************************!*\
  !*** ./client/app/components/home/categories/categories.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/category.service */ "./client/app/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/communication.service */ "./client/app/components/home/shared/communication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoryService, router, comService) {
        this.categoryService = categoryService;
        this.router = router;
        this.comService = comService;
        this.dataIsAvailable = false;
        this.colorArray = ["primary", "link", "danger", "success", "warning", "info"];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getAllCategories().subscribe(function (response) {
            if (response.name != "HttpResponseError") {
                _this.dataIsAvailable = true;
                _this.categories = response;
            }
        });
    };
    CategoriesComponent.prototype.routeToCourse = function (categoryId, color, category) {
        this.router.navigateByUrl('#/home/kurs-uebersicht/' + categoryId);
        this.comService.setInfo(color, category);
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./client/app/components/home/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./client/app/components/home/categories/categories.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./client/app/components/home/contact/contact.component.html":
/*!*******************************************************************!*\
  !*** ./client/app/components/home/contact/contact.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container fullScreenBackground\">\r\n  <div class=\"circleBackground\"></div>\r\n  <div class=\"columns is-mobile\">\r\n    <div class=\"column is-12\" style=\"z-index: 0; padding: 2rem; padding-left: 5rem; padding-bottom: 0rem;\">\r\n      <div style=\"font-size: 1.5rem; color:white;\">\r\n        {{headerText}}\r\n      </div>\r\n    </div>\r\n    <div class=\"columns is-mobile\">\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"padding:1rem\">\r\n    <textarea class=\"textarea\" placeholder=\"Wir freuen uns über Ihr Feedback.\" [(ngModel)]=\"contactMessage.text\" ></textarea>\r\n  </div>\r\n\r\n  <div class=\"colum is-12\" style=\"text-align: center; font-size: 2rem;\">\r\n    <i *ngIf=\"contactMessage.bewertung<1\" class=\"fa fa-star-o\" aria-hidden=\"true\" (click)=\"contactMessage.bewertung = 1\"></i>\r\n    <i *ngIf=\"contactMessage.bewertung>=1\" class=\"fa fa-star\" aria-hidden=\"true\" (click)=\"contactMessage.bewertung = 1\"></i>\r\n\r\n    <i *ngIf=\"contactMessage.bewertung<2\" class=\"fa fa-star-o\" aria-hidden=\"true\" (click)=\"contactMessage.bewertung = 2\"></i>\r\n    <i *ngIf=\"contactMessage.bewertung>=2\" class=\"fa fa-star\" aria-hidden=\"true\" (click)=\"contactMessage.bewertung = 2\"></i>\r\n\r\n    <i *ngIf=\"contactMessage.bewertung<3\" class=\"fa fa-star-o\" aria-hidden=\"true\" (click)=\"contactMessage.bewertung = 3\"></i>\r\n    <i *ngIf=\"contactMessage.bewertung>=3\" class=\"fa fa-star\" aria-hidden=\"true\" (click)=\"contactMessage.bewertung = 3\"></i>\r\n\r\n    <i *ngIf=\"contactMessage.bewertung<4\" class=\"fa fa-star-o\" aria-hidden=\"true\" (click)=\"contactMessage.bewertung = 4\"></i>\r\n    <i *ngIf=\"contactMessage.bewertung>=4\" class=\"fa fa-star\" aria-hidden=\"true\" (click)=\"contactMessage.bewertung = 4\"></i>\r\n\r\n    <i *ngIf=\"contactMessage.bewertung<5\" class=\"fa fa-star-o\" aria-hidden=\"true\" (click)=\"contactMessage.bewertung = 5\"></i>\r\n    <i *ngIf=\"contactMessage.bewertung>=5\" class=\"fa fa-star\" aria-hidden=\"true\" (click)=\"contactMessage.bewertung = 5\"></i>\r\n  </div>\r\n  \r\n  <div class=\"column is-12\" style=\"padding: 1rem; padding-top:0rem\">\r\n    <button #send class=\"button is-primary is-medium is-fullwidth\" style=\"margin-top:1.5rem\" [disabled]=\"contactMessage.text == ''\" (click)=\"submit()\">\r\n      <div>{{button_text}}</div>            \r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./client/app/components/home/contact/contact.component.scss":
/*!*******************************************************************!*\
  !*** ./client/app/components/home/contact/contact.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circleBackground {\n  height: 30rem;\n  width: 30rem;\n  z-index: -1;\n  background-color: #209cee;\n  border-radius: 15rem;\n  position: absolute;\n  margin-top: -13rem;\n  margin-left: -7rem; }\n\n.fullScreenBackground {\n  position: absolute;\n  width: 100%;\n  overflow: hidden; }\n\n.card {\n  margin-top: 1rem;\n  border-radius: 0.5rem; }\n\n.title {\n  font-size: 1.25rem !important;\n  padding-left: 1rem; }\n\n.subtitle {\n  font-size: 0.9rem;\n  padding-left: 1rem; }\n\n.color-marker {\n  float: right;\n  height: 100%;\n  position: absolute;\n  width: 10px;\n  border-top-left-radius: 0.8rem;\n  border-bottom-left-radius: 0.8rem; }\n\n.textarea:not([rows]) {\n  max-height: 605px;\n  min-height: 20rem; }\n\n.fa-star-o {\n  padding: 0.5rem; }\n\n.fa-star {\n  padding: 0.5rem; }\n\n.is-primary-save {\n  background-color: #209cee !important; }\n"

/***/ }),

/***/ "./client/app/components/home/contact/contact.component.ts":
/*!*****************************************************************!*\
  !*** ./client/app/components/home/contact/contact.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/contact.service */ "./client/app/components/home/shared/contact.service.ts");
/* harmony import */ var _shared_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/courses.service */ "./client/app/components/home/shared/courses.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = /** @class */ (function () {
    function ContactComponent(renderer, contactService, activatedRoute, coursesService) {
        this.renderer = renderer;
        this.contactService = contactService;
        this.activatedRoute = activatedRoute;
        this.coursesService = coursesService;
        this.dataIsAvailable = false;
        this.button_text = "Feedback senden";
        this.headerText = "Kontakt";
        this.course_feedback = false;
        this.contactMessage = {
            text: "",
            bewertung: null,
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id) {
                _this.coursesService.getCoursesByCourseId(params.id).subscribe(function (response) {
                    _this.single_course = response;
                    _this.course_feedback = true;
                    _this.headerText = "Bewertung: " + _this.single_course.KURS_NAME;
                });
            }
        });
    };
    ContactComponent.prototype.submit = function () {
        var _this = this;
        if (this.course_feedback) {
            this.coursesService.postFeedbackByCourse(this.contactMessage, this.single_course.KURS_ID).subscribe(function (response) {
                if (response.name != "HttpResponseError") {
                    _this.renderer.addClass(_this.sendButton.nativeElement, 'is-primary-save');
                    _this.button_text = 'Senden erfolgreich';
                }
            });
        }
        else {
            this.contactService.postContactFeedback(this.contactMessage).subscribe(function (response) {
                if (response.name != "HttpResponseError") {
                    _this.renderer.addClass(_this.sendButton.nativeElement, 'is-primary-save');
                    _this.button_text = 'Senden erfolgreich';
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('send'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ContactComponent.prototype, "sendButton", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./client/app/components/home/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./client/app/components/home/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _shared_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_courses_service__WEBPACK_IMPORTED_MODULE_3__["CoursesService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./client/app/components/home/courses/courses.component.html":
/*!*******************************************************************!*\
  !*** ./client/app/components/home/courses/courses.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container fullScreenBackground\">\r\n  <div class=\"circleBackground\" #backgroundElement></div>   \r\n  <div class=\"columns is-mobile\">\r\n    <div class=\"column is-12\" style=\"z-index: 0; padding: 2rem; padding-left: 5rem;\">\r\n      <div style=\"font-size: 1.5rem; color:white;\" >\r\n        {{headerText}} - Kurse\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"column\" style=\"margin-top: -2rem;padding: 1.0rem;\">\r\n    <alert></alert>\r\n  </div>\r\n\r\n  <section style=\"padding: 1rem;\" *ngIf=\"dataIsAvailable\">\r\n    <div class=\"card\" *ngFor=\"let course of courses; let i=index\" [(routerLink)]=\"'/home/kurs/' + course.KURS_ID\">\r\n      <div class=\"color-marker\">\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <p class=\"title\">\r\n          {{course.KURS_NAME}}\r\n        </p>\r\n        <p class=\"subtitle\">\r\n          {{course.KURS_SUBNAME}}\r\n        </p>\r\n        <p class=\"subtitle applicationDate\" *ngIf=\"course.ANM_DATUM\">\r\n          Anmeldung | {{course.ANM_DATUM | date:'dd.MM.yyyy'}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  \r\n</div>"

/***/ }),

/***/ "./client/app/components/home/courses/courses.component.scss":
/*!*******************************************************************!*\
  !*** ./client/app/components/home/courses/courses.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circleBackground {\n  height: 30rem;\n  width: 30rem;\n  z-index: 0;\n  background-color: #209cee;\n  border-radius: 15rem;\n  position: absolute;\n  margin-top: -13rem;\n  margin-left: -7rem; }\n\n.fullScreenBackground {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  overflow: hidden; }\n\n.card {\n  margin-top: 1rem;\n  border-radius: 0.5rem; }\n\n.title {\n  font-size: 1.25rem !important;\n  padding-left: 1rem; }\n\n.subtitle {\n  font-size: 0.9rem;\n  padding-left: 1rem; }\n\n.color-marker {\n  float: right;\n  height: 100%;\n  position: absolute;\n  width: 10px;\n  border-top-left-radius: 0.8rem;\n  border-bottom-left-radius: 0.8rem; }\n\n.applicationDate {\n  float: right;\n  font-size: 0.8rem; }\n\n.primary {\n  background-color: #00d1b2; }\n\n.link {\n  background-color: #3273dc; }\n\n.info {\n  background-color: #23d160; }\n\n.success {\n  background-color: #ffdd57; }\n\n.warning {\n  background-color: #ffbc6b; }\n\n.danger {\n  background-color: #ff3860; }\n"

/***/ }),

/***/ "./client/app/components/home/courses/courses.component.ts":
/*!*****************************************************************!*\
  !*** ./client/app/components/home/courses/courses.component.ts ***!
  \*****************************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/category.service */ "./client/app/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/communication.service */ "./client/app/components/home/shared/communication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "./client/app/services/user.service.ts");
/* harmony import */ var _shared_courses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/courses.service */ "./client/app/components/home/shared/courses.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(coursesService, categoryService, userService, activatedRoute, comService, renderer) {
        this.coursesService = coursesService;
        this.categoryService = categoryService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.comService = comService;
        this.renderer = renderer;
        this.dataIsAvailable = false;
        this.courses = [];
        this.headerText = "";
        this.category = "";
        this.comService.getInfo().subscribe(function (color) {
            //this.renderer.addClass(this.backgroundElement.nativeElement, color);
        });
    }
    CoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id == "me") {
                _this.requestCoursesByUser();
            }
            else {
                if (params.id == "highlights") {
                    _this.requestCoursesByHighlights();
                }
                else {
                    _this.requestCoursesByCategory(params.id);
                }
            }
        });
    };
    CoursesComponent.prototype.requestCoursesByUser = function () {
        var _this = this;
        this.headerText = "Meine";
        this.courses = [];
        this.userService.getCoursesByUser().subscribe(function (responseUser) {
            responseUser.forEach(function (element) {
                _this.coursesService.getCoursesByCourseId(element.KURS_ID).subscribe(function (responseCourse) {
                    responseCourse.ANM_DATUM = element.ANM_DATUM;
                    _this.courses.push(responseCourse);
                });
            });
            if (responseUser.name != "HttpResponseError") {
                _this.dataIsAvailable = true;
            }
        });
    };
    CoursesComponent.prototype.requestCoursesByCategory = function (courseId) {
        var _this = this;
        this.headerText = this.category;
        this.courses = [];
        this.categoryService.getCoursesByCategoryId(courseId).subscribe(function (response) {
            _this.courses.push(response);
            if (response.name != "HttpResponseError") {
                _this.dataIsAvailable = true;
                _this.courses = response;
            }
        });
    };
    CoursesComponent.prototype.requestCoursesByHighlights = function () {
        var _this = this;
        this.headerText = "Highlights";
        this.courses = [];
        this.coursesService.getCoursesByHighlight().subscribe(function (response) {
            _this.courses.push(response);
            if (response.name != "HttpResponseError") {
                _this.dataIsAvailable = true;
                _this.courses = response;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('backgroundElement'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CoursesComponent.prototype, "backgroundElement", void 0);
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./client/app/components/home/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.scss */ "./client/app/components/home/courses/courses.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_courses_service__WEBPACK_IMPORTED_MODULE_5__["CoursesService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./client/app/components/home/home-routing.module.ts":
/*!***********************************************************!*\
  !*** ./client/app/components/home/home-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./client/app/components/home/home.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categories.component */ "./client/app/components/home/categories/categories.component.ts");
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profil/profil.component */ "./client/app/components/home/profil/profil.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses/courses.component */ "./client/app/components/home/courses/courses.component.ts");
/* harmony import */ var _singlecourse_singlecourse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singlecourse/singlecourse.component */ "./client/app/components/home/singlecourse/singlecourse.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./client/app/components/home/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'kategorien',
                component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"]
            },
            {
                path: 'aktuelles',
                component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"]
            },
            {
                path: 'kurs-uebersicht/:id',
                component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_5__["CoursesComponent"]
            },
            {
                path: 'kurs-uebersicht/me',
                component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_5__["CoursesComponent"]
            },
            {
                path: 'kurs/:id',
                component: _singlecourse_singlecourse_component__WEBPACK_IMPORTED_MODULE_6__["SingleCourseComponent"]
            },
            {
                path: 'kontakt',
                component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
            },
            {
                path: 'kontakt/:id',
                component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
            },
            {
                path: 'profil',
                component: _profil_profil_component__WEBPACK_IMPORTED_MODULE_4__["ProfilComponent"]
            }
        ]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./client/app/components/home/home.component.html":
/*!********************************************************!*\
  !*** ./client/app/components/home/home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"burgerElement\" (click)=\"setMenu()\">\r\n  <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n</div>\r\n\r\n<menu *ngIf=\"menuOpen\" class=\"menuPosition\"></menu>\r\n\r\n<div *ngIf=\"menuOpen\" class=\"contentPosition\" (click)=\"setMenu()\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<div *ngIf=\"!menuOpen\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./client/app/components/home/home.component.scss":
/*!********************************************************!*\
  !*** ./client/app/components/home/home.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".burgerElement {\n  color: white;\n  font-size: 1.5rem;\n  padding: 1.25rem;\n  padding-bottom: 0rem;\n  position: absolute;\n  z-index: 1; }\n\n.navbar {\n  float: left; }\n\n.menuPosition {\n  height: 100%;\n  background-color: white;\n  position: absolute;\n  z-index: 1;\n  margin-top: -2.5rem;\n  width: 65%;\n  overflow: hidden;\n  border-top-right-radius: 1rem;\n  margin-left: 0rem;\n  margin-top: -2rem;\n  /* Safari */\n  /* Safari */\n  transition: margin-left 1s;\n  transition: margin-top 1s; }\n\n.contentPosition {\n  margin-left: 19rem;\n  margin-top: 3rem;\n  height: 100%; }\n\n/*\r\n    background-color: white;\r\n    border: 1px solid;\r\n    width: 75%;\r\n    margin-top: -3.5rem;\r\n    */\n"

/***/ }),

/***/ "./client/app/components/home/home.component.ts":
/*!******************************************************!*\
  !*** ./client/app/components/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/communication.service */ "./client/app/components/home/shared/communication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(comService) {
        this.comService = comService;
        this.menuOpen = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.comService.instruction_sub_comb.subscribe(function (message) {
            _this.menuOpen = message;
        });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.setMenu = function () {
        this.menuOpen = !this.menuOpen;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./client/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./client/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_communication_service__WEBPACK_IMPORTED_MODULE_1__["CommunicationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./client/app/components/home/home.module.ts":
/*!***************************************************!*\
  !*** ./client/app/components/home/home.module.ts ***!
  \***************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categories.component */ "./client/app/components/home/categories/categories.component.ts");
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profil/profil.component */ "./client/app/components/home/profil/profil.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./client/app/components/home/home-routing.module.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.component */ "./client/app/components/home/home.component.ts");
/* harmony import */ var _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/menu/menu.component */ "./client/app/components/home/shared/menu/menu.component.ts");
/* harmony import */ var _shared_communication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/communication.service */ "./client/app/components/home/shared/communication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/user.service */ "./client/app/services/user.service.ts");
/* harmony import */ var _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../sharedModule/shared.module */ "./client/app/sharedModule/shared.module.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/alert.service */ "./client/app/services/alert.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/category.service */ "./client/app/services/category.service.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./courses/courses.component */ "./client/app/components/home/courses/courses.component.ts");
/* harmony import */ var _shared_courses_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/courses.service */ "./client/app/components/home/shared/courses.service.ts");
/* harmony import */ var _singlecourse_singlecourse_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./singlecourse/singlecourse.component */ "./client/app/components/home/singlecourse/singlecourse.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact/contact.component */ "./client/app/components/home/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"],
                _profil_profil_component__WEBPACK_IMPORTED_MODULE_4__["ProfilComponent"],
                _courses_courses_component__WEBPACK_IMPORTED_MODULE_14__["CoursesComponent"],
                _singlecourse_singlecourse_component__WEBPACK_IMPORTED_MODULE_16__["SingleCourseComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
                _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"],
                _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"],
                _shared_communication_service__WEBPACK_IMPORTED_MODULE_9__["CommunicationService"],
                _services_category_service__WEBPACK_IMPORTED_MODULE_13__["CategoryService"],
                _shared_courses_service__WEBPACK_IMPORTED_MODULE_15__["CoursesService"]
            ],
            exports: [_shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"]],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./client/app/components/home/profil/profil.component.html":
/*!*****************************************************************!*\
  !*** ./client/app/components/home/profil/profil.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container fullScreenBackground\">\r\n  <div class=\"circleBackground\"></div>   \r\n  <div class=\"columns is-mobile\" style=\"padding: 2rem; padding-bottom: 0rem; padding-top: 1rem;\">\r\n    <div class=\"column is-2\" style=\"padding: 1.4rem; padding-left: 0rem;\">\r\n      <div>\r\n        <span class=\"icon\">\r\n          <i class=\"fa fa-user\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"column is-10\" style=\"z-index: 1;\">\r\n      <div *ngIf=\"dataIsAvailable\" style=\"font-size: 1.5rem; color:white; margin-top: 0.2rem;\">\r\n        {{user.TEIL_VORNAME}} {{user.TEIL_NACHNAME}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"column\" style=\"margin-top: -2rem;padding: 1.0rem;\">\r\n    <alert></alert>\r\n  </div>\r\n \r\n  <section class=\"login\" style=\"padding: 1rem; padding-top: 0rem;\">\r\n    <form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\" (change)=\"resetButton()\" >\r\n      <input *ngIf=\"dataIsAvailable\" class=\"input is-medium\" type=\"email\" placeholder=\"Email\" id=\"mail\" required [(ngModel)]=\"user.TEIL_EMAIL\" name=\"mail\"  #mail=\"ngModel\">\r\n      <br>\r\n      <br>\r\n      <input *ngIf=\"dataIsAvailable\" class=\"input is-medium\" type=\"text\" placeholder=\"Adresse\" id=\"address\" [(ngModel)]=\"user.TEIL_ORT\" name=\"address\" #address=\"ngModel\">\r\n      <br>\r\n      <br>\r\n      <input *ngIf=\"dataIsAvailable\" class=\"input is-medium\" type=\"text\" placeholder=\"BLZ\" id=\"blz\" [(ngModel)]=\"user.TEIL_BLZ\" name=\"blz\" #blz=\"ngModel\" maxlength=\"8\">\r\n      <br>\r\n      <br>\r\n      <input *ngIf=\"dataIsAvailable\" class=\"input is-medium\" type=\"text\" placeholder=\"IBAN\" id=\"iban\" [(ngModel)]=\"user.TEIL_IBAN\" name=\"iban\" #iban=\"ngModel\" maxlength=\"22\">\r\n      <br>\r\n      <br>\r\n      <div class=\"columns is-mobile\">\r\n        <div class=\"column is-2\">\r\n          <div style=\"margin-top: 0.65rem;\" (click)=\"backClicked()\">\r\n            <span class=\"icon\" style=\"color: #00d1b2; padding: 1.5rem; padding-left: 1rem\">\r\n              <i class=\"fa fa-chevron-left\"></i>              \r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"column is-10\" style=\"padding: 0rem;\">\r\n          <button #save class=\"button is-primary is-medium is-fullwidth\" style=\"margin-top:1.5rem\" [disabled]=\"!heroForm.form.valid\" type=\"submit\">\r\n            <div>{{button_text}}</div>            \r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./client/app/components/home/profil/profil.component.scss":
/*!*****************************************************************!*\
  !*** ./client/app/components/home/profil/profil.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circleBackground {\n  height: 30rem;\n  width: 30rem;\n  z-index: -1;\n  background-color: #209cee;\n  border-radius: 15rem;\n  position: absolute;\n  margin-top: -13rem;\n  margin-left: -7rem; }\n\n.fullScreenBackground {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  overflow: hidden; }\n\n.active {\n  border-radius: 1rem; }\n\n.icon {\n  font-size: 1.7rem;\n  color: white; }\n\n.columns {\n  margin-right: 0rem; }\n\n.iconCircle {\n  color: white;\n  position: absolute;\n  margin-left: 7rem;\n  font-size: 1.5rem; }\n\n.is-primary {\n  transition: background-color 500ms linear; }\n\n.is-primary-save {\n  background-color: #209cee !important; }\n"

/***/ }),

/***/ "./client/app/components/home/profil/profil.component.ts":
/*!***************************************************************!*\
  !*** ./client/app/components/home/profil/profil.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./client/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilComponent = /** @class */ (function () {
    function ProfilComponent(userService, _location, renderer) {
        this.userService = userService;
        this._location = _location;
        this.renderer = renderer;
        this.dataIsAvailable = false;
        this.button_text = 'Speichern';
    }
    ProfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserMe().subscribe(function (response) {
            _this.user = response;
            _this.dataIsAvailable = true;
        });
    };
    ProfilComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.updateUserMe(this.user).subscribe(function (response) {
            if (response.name != "HttpResponseError") {
                _this.renderer.addClass(_this.saveButton.nativeElement, 'is-primary-save');
                _this.button_text = 'Speichern erfolgreich';
            }
        });
    };
    ProfilComponent.prototype.resetButton = function () {
        this.renderer.removeClass(this.saveButton.nativeElement, 'is-primary-save');
        this.button_text = 'Speichern';
    };
    ProfilComponent.prototype.backClicked = function () {
        this._location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('save'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfilComponent.prototype, "saveButton", void 0);
    ProfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profil',
            template: __webpack_require__(/*! ./profil.component.html */ "./client/app/components/home/profil/profil.component.html"),
            styles: [__webpack_require__(/*! ./profil.component.scss */ "./client/app/components/home/profil/profil.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ProfilComponent);
    return ProfilComponent;
}());



/***/ }),

/***/ "./client/app/components/home/shared/communication.service.ts":
/*!********************************************************************!*\
  !*** ./client/app/components/home/shared/communication.service.ts ***!
  \********************************************************************/
/*! exports provided: CommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return CommunicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommunicationService = /** @class */ (function () {
    function CommunicationService() {
        this.instruction_sub_comb = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    CommunicationService.prototype.sendMessage = function (message) {
        this.instruction_sub_comb.next(message);
    };
    CommunicationService.prototype.setInfo = function (color, category) {
        this.color = color;
        this.category = category;
    };
    CommunicationService.prototype.getInfo = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            'color': this.color,
            'category': this.category
        });
    };
    CommunicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CommunicationService);
    return CommunicationService;
}());



/***/ }),

/***/ "./client/app/components/home/shared/contact.service.ts":
/*!**************************************************************!*\
  !*** ./client/app/components/home/shared/contact.service.ts ***!
  \**************************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment.prod */ "./client/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert.service */ "./client/app/services/alert.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactService = /** @class */ (function () {
    function ContactService(http, alertService) {
        this.http = http;
        this.alertService = alertService;
        this.url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        };
    }
    ContactService.prototype.postContactFeedback = function (feedback) {
        var _this = this;
        return this.http.post(this.url + "/contact/", feedback, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.alertService.push(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./client/app/components/home/shared/courses.service.ts":
/*!**************************************************************!*\
  !*** ./client/app/components/home/shared/courses.service.ts ***!
  \**************************************************************/
/*! exports provided: CoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesService", function() { return CoursesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment.prod */ "./client/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert.service */ "./client/app/services/alert.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CoursesService = /** @class */ (function () {
    function CoursesService(http, alertService) {
        this.http = http;
        this.alertService = alertService;
        this.url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        };
    }
    CoursesService.prototype.getCoursesByCourseId = function (courseId) {
        var _this = this;
        return this.http.get(this.url + "/courses/" + courseId, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.alertService.push(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    CoursesService.prototype.getCoursesByHighlight = function () {
        var _this = this;
        return this.http.get(this.url + "/courses/highlights", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.alertService.push(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    CoursesService.prototype.applyToCourse = function (courseId) {
        var _this = this;
        return this.http.post(this.url + "/courses/" + courseId + "/apply", "", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.alertService.push(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    CoursesService.prototype.signOffToCourse = function (courseId) {
        var _this = this;
        return this.http.post(this.url + "/courses/" + courseId + "/signoff", "", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.alertService.push(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    CoursesService.prototype.postFeedbackByCourse = function (feedback, courseId) {
        var _this = this;
        return this.http.post(this.url + "/courses/" + courseId + "/feedback", feedback, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.alertService.push(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    CoursesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], CoursesService);
    return CoursesService;
}());



/***/ }),

/***/ "./client/app/components/home/shared/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./client/app/components/home/shared/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i class=\"fa fa-times\" aria-hidden=\"true\" style=\"float: right; padding: 1rem; color: white; font-size: 1.5rem;\" (click)=\"routing()\"></i>\r\n\r\n<div class=\"circleBackground\"></div>\r\n<div class=\"userProfil\" [routerLink]=\"['profil']\" (click)=\"routing()\">\r\n    <span class=\"icon\">\r\n        <i class=\"fa fa-user\"></i>\r\n    </span>\r\n    Nutzerprofil\r\n</div>\r\n\r\n<div class=\"menuPoint\" style=\"margin-top: 8rem\" [routerLink]=\"['kurs-uebersicht/me']\"  (click)=\"routing()\">\r\n    <span class=\"icon\">\r\n        <i class=\"fa fa-star\"></i>\r\n    </span>\r\n    Meine Kurse\r\n</div>\r\n\r\n<div class=\"menuPoint\" [routerLink]=\"['kategorien']\"  (click)=\"routing()\">\r\n    <span class=\"icon\">\r\n        <i class=\"fa fa-tasks\"></i>\r\n    </span>\r\n    Kurs Kategorien\r\n</div>\r\n\r\n<div class=\"menuPoint\" [routerLink]=\"['kurs-uebersicht/highlights']\"  (click)=\"routing()\">\r\n    <span class=\"icon\">\r\n        <i class=\"fa fa-calendar\"></i>\r\n    </span>\r\n    Highlights\r\n</div>\r\n\r\n<div class=\"menuPoint\" [routerLink]=\"['kontakt']\"  (click)=\"routing()\">\r\n    <span class=\"icon\">\r\n        <i class=\"fa fa-envelope\"></i>\r\n    </span>\r\n    Kontakt\r\n</div>\r\n\r\n<div class=\"signOut\" (click)=\"signOut()\">\r\n    <span class=\"icon\">\r\n        <i class=\"fa fa-sign-out\"></i>\r\n    </span>\r\n    Ausloggen\r\n</div>"

/***/ }),

/***/ "./client/app/components/home/shared/menu/menu.component.scss":
/*!********************************************************************!*\
  !*** ./client/app/components/home/shared/menu/menu.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navOpen {\n  margin-left: 24%; }\n\n.notification > .delete {\n  position: relative;\n  right: -1rem;\n  top: .1rem;\n  float: right; }\n\n.circleBackground {\n  height: 30rem;\n  width: 30rem;\n  z-index: -1;\n  background-color: #209cee;\n  border-radius: 15rem;\n  position: absolute;\n  margin-top: -18rem;\n  margin-left: -13rem; }\n\n.userProfil {\n  color: white;\n  padding-top: 3rem;\n  padding-left: 0rem;\n  font-size: 1.4rem; }\n\n.menuPoint {\n  color: #4a4a4a;\n  padding-top: 1.5rem;\n  padding-left: 0rem;\n  font-size: 1.4rem; }\n\n.signOut {\n  bottom: 1rem;\n  position: fixed; }\n\n.icon {\n  padding-right: 1rem; }\n"

/***/ }),

/***/ "./client/app/components/home/shared/menu/menu.component.ts":
/*!******************************************************************!*\
  !*** ./client/app/components/home/shared/menu/menu.component.ts ***!
  \******************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../communication.service */ "./client/app/components/home/shared/communication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, authService, comService) {
        this.router = router;
        this.authService = authService;
        this.comService = comService;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.routing = function () {
        this.comService.sendMessage(false);
    };
    MenuComponent.prototype.signOut = function () {
        this.authService.logout();
        this.router.navigateByUrl('/login');
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./client/app/components/home/shared/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./client/app/components/home/shared/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./client/app/components/home/singlecourse/singlecourse.component.html":
/*!*****************************************************************************!*\
  !*** ./client/app/components/home/singlecourse/singlecourse.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container fullScreenBackground\">\r\n  <div class=\"circleBackground\"></div>\r\n  <div class=\"columns is-mobile\">\r\n    <div class=\"column is-12\" *ngIf=\"dataIsAvailable\" style=\"z-index: 0; padding: 2rem; padding-left: 5rem; padding-bottom: 0rem;\">\r\n      <div style=\"font-size: 1.5rem; color:white;\">\r\n        {{singleCourse.KURS_NAME}}\r\n      </div>\r\n      <p style=\"color:white\">{{singleCourse.KURS_SUBNAME}}</p>\r\n    </div>\r\n    <div class=\"columns is-mobile\">\r\n    </div>\r\n  </div>\r\n\r\n  <section style=\"padding: 1rem; margin-top: -2rem; padding-top: 1rem; padding-bottom: 0rem;\" *ngIf=\"dataIsAvailable\">\r\n    <div class=\"card\" style=\"padding:1rem;\">\r\n      <div>\r\n        <i class=\"fa fa-clock-o info-icon\" style=\"color:black\"></i>\r\n        <p>Beginn: {{singleCourse.KURS_BEGINN_UHRZEIT}}</p>\r\n      </div>\r\n      <div>\r\n        <i class=\"fa fa-map-marker info-icon\" style=\"color:black\"></i>\r\n        <p>Ort: {{singleCourse.location.ORT_STRASSE}}, {{singleCourse.location.ORT_PLZ}}\r\n          {{singleCourse.location.ORT_ORTSNAME}}</p>\r\n      </div>\r\n      <div>\r\n        <i class=\"fa fa-user info-icon\" style=\"color:black\"></i>\r\n        <p>Veranstalter: {{singleCourse.KURS_REFERENT_ID}}</p>\r\n      </div>\r\n    </div>\r\n    <a class=\"button is-fullwidth is-primary nav-button\" \r\n    [attr.href]=\"'http://maps.google.com/?q= ' \r\n    + singleCourse.location.ORT_STRASSE + ', '\r\n    + singleCourse.location.ORT_ORTSNAME + ', '\r\n    + singleCourse.location.ORT_PLZ\">\r\n      <i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i>\r\n    </a>\r\n    <a class=\"button is-fullwidth is-warning nav-button\" [routerLink]=\"['/home/kontakt/' + singleCourse.KURS_ID]\" >\r\n      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n    </a>\r\n  </section>\r\n\r\n  <div class=\"column is-12\" *ngIf=\"showButton\" style=\"padding: 1rem; padding-top: 1.5rem; padding-bottom: 1.5rem;\">\r\n    <a #button class=\"button is-fullwidth is-primary\" (click)=\"apply()\" *ngIf=\"!alreadyApplied\">{{button_text}}</a>\r\n    <a #button class=\"button is-fullwidth is-danger\" (click)=\"signOff()\" *ngIf=\"alreadyApplied\">{{button_text}}</a>\r\n  </div>\r\n\r\n  <div class=\"column\" style=\"margin-top: -2rem;padding: 1rem;\">\r\n    <alert></alert>\r\n  </div>\r\n\r\n\r\n  <section style=\"padding: 1rem; margin-top: -2rem;\" *ngIf=\"dataIsAvailable && moreInfo\">\r\n    <div class=\"card\" style=\"padding:1rem;\" (click)=\"moreInfo = false\">\r\n      <div style=\"font-size: 1.2rem; float: left;\">\r\n        Weniger Informationen\r\n      </div>\r\n      <div style=\"padding: 0.5rem;\">\r\n        <i class=\"fa fa-chevron-up \" style=\"float: right;\" aria-hidden=\"true\"></i>\r\n      </div>\r\n      <div class=\"column is-12\" style=\"padding-left: 0rem; padding-top: 1rem;\">\r\n        <div>\r\n          <p>Teilnehmer: max. {{singleCourse.KURS_TEIL_MAX}} / min. {{singleCourse.KURS_TEIL_MIN}}</p>\r\n          <p>Termine: {{singleCourse.KURS_ANZAHLTERMINE}}</p>\r\n          <p>Mitzubringen: {{singleCourse.KURS_MITZUBRINGEN}}</p>\r\n          <p>Kursgebühr: {{singleCourse.KURS_PREIS}}</p>\r\n          <p>Anmeldefrist: {{singleCourse.KURS_ANMFRIST}}</p>\r\n          <p>Ende: {{singleCourse.KURS_ENDE_UHRZEIT}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section style=\"padding: 1rem; margin-top: -2rem;\" *ngIf=\"dataIsAvailable && !moreInfo\">\r\n    <div class=\"card\" style=\"padding:1rem; height: 4rem\" (click)=\"moreInfo = true\">\r\n      <div style=\"font-size: 1.2rem; float: left;\">\r\n        Mehr Informationen\r\n      </div>\r\n      <div style=\"padding: 0.5rem;\">\r\n        <i class=\"fa fa-chevron-down \" style=\"float: right;\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section *ngIf=\"dataIsAvailable\" style=\" margin-bottom: 2rem\">\r\n    <div class=\"card\" style=\"padding:1rem\">\r\n      <div style=\"font-size: 1.4rem\">\r\n        Kursinhalt\r\n      </div>\r\n      {{singleCourse.KURS_BESCHREIBUNG}}\r\n    </div>\r\n  </section>\r\n\r\n</div>"

/***/ }),

/***/ "./client/app/components/home/singlecourse/singlecourse.component.scss":
/*!*****************************************************************************!*\
  !*** ./client/app/components/home/singlecourse/singlecourse.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circleBackground {\n  height: 30rem;\n  width: 30rem;\n  z-index: -1;\n  background-color: #209cee;\n  border-radius: 15rem;\n  position: absolute;\n  margin-top: -13rem;\n  margin-left: -7rem; }\n\n.fullScreenBackground {\n  position: absolute;\n  width: 100%;\n  overflow: hidden; }\n\n.card {\n  margin-top: 1rem;\n  border-radius: 0.5rem; }\n\n.title {\n  font-size: 1.25rem !important;\n  padding-left: 1rem; }\n\n.subtitle {\n  font-size: 0.9rem;\n  padding-left: 1rem; }\n\n.color-marker {\n  float: right;\n  height: 100%;\n  position: absolute;\n  width: 10px;\n  border-top-left-radius: 0.8rem;\n  border-bottom-left-radius: 0.8rem; }\n\n.primary {\n  background-color: #00d1b2; }\n\n.link {\n  background-color: #3273dc; }\n\n.info {\n  background-color: #23d160; }\n\n.success {\n  background-color: #ffdd57; }\n\n.warning {\n  background-color: #ffbc6b; }\n\n.danger {\n  background-color: #ff3860; }\n\n.info-icon {\n  float: left;\n  color: white;\n  margin-right: 0.7rem;\n  margin-top: 0.2rem; }\n\n.nav-button {\n  border-radius: 3rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  float: right;\n  margin-top: -1.5rem;\n  margin-right: 1rem; }\n"

/***/ }),

/***/ "./client/app/components/home/singlecourse/singlecourse.component.ts":
/*!***************************************************************************!*\
  !*** ./client/app/components/home/singlecourse/singlecourse.component.ts ***!
  \***************************************************************************/
/*! exports provided: SingleCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCourseComponent", function() { return SingleCourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/communication.service */ "./client/app/components/home/shared/communication.service.ts");
/* harmony import */ var _shared_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/courses.service */ "./client/app/components/home/shared/courses.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service */ "./client/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SingleCourseComponent = /** @class */ (function () {
    function SingleCourseComponent(router, renderer, comService, userService, activatedRoute, authService, courseService) {
        this.router = router;
        this.renderer = renderer;
        this.comService = comService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.courseService = courseService;
        this.dataIsAvailable = false;
        this.button_text = "Anmelden";
        this.showButton = false;
        this.alreadyApplied = false;
        this.moreInfo = false;
    }
    SingleCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.courseService.getCoursesByCourseId(params.id).subscribe(function (response) {
                if (response.name != "HttpResponseError") {
                    _this.singleCourse = response;
                    _this.dataIsAvailable = true;
                    _this.checkLogin();
                }
            });
        });
    };
    SingleCourseComponent.prototype.checkLogin = function () {
        var _this = this;
        this.authService.isLoggedIn().subscribe(function (response) {
            if (response) {
                _this.showButton = true;
                _this.checkAlreadyApplied();
            }
        });
    };
    SingleCourseComponent.prototype.checkAlreadyApplied = function () {
        var _this = this;
        this.userService.getCoursesByUser().subscribe(function (response) {
            response.forEach(function (element) {
                if (element.KURS_ID == _this.singleCourse.KURS_ID) {
                    _this.alreadyApplied = true;
                    _this.button_text = "Abmelden";
                }
            });
        });
    };
    SingleCourseComponent.prototype.apply = function () {
        var _this = this;
        this.courseService.applyToCourse(this.singleCourse.KURS_ID).subscribe(function (response) {
            if (response.name != "HttpResponseError") {
                _this.renderer.addClass(_this.elButton.nativeElement, 'is-primary-save');
                _this.button_text = 'Anmelden erfolgreich';
            }
        });
    };
    SingleCourseComponent.prototype.signOff = function () {
        var _this = this;
        this.courseService.signOffToCourse(this.singleCourse.KURS_ID).subscribe(function (response) {
            if (response.name != "HttpResponseError") {
                _this.renderer.addClass(_this.elButton.nativeElement, 'is-primary-save');
                _this.button_text = 'Abmelden erfolgreich';
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('button'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SingleCourseComponent.prototype, "elButton", void 0);
    SingleCourseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'categories',
            template: __webpack_require__(/*! ./singlecourse.component.html */ "./client/app/components/home/singlecourse/singlecourse.component.html"),
            styles: [__webpack_require__(/*! ./singlecourse.component.scss */ "./client/app/components/home/singlecourse/singlecourse.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _shared_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _shared_courses_service__WEBPACK_IMPORTED_MODULE_3__["CoursesService"]])
    ], SingleCourseComponent);
    return SingleCourseComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-home-home-module.js.map
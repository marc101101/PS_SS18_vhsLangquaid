(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./client/$$_lazy_route_resource lazy recursive":
/*!*************************************************************!*\
  !*** ./client/$$_lazy_route_resource lazy namespace object ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/home/home.module": [
		"./client/app/components/home/home.module.ts",
		"components-home-home-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./client/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./client/app/app-routing.module.ts":
/*!******************************************!*\
  !*** ./client/app/app-routing.module.ts ***!
  \******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./client/app/components/login/login.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/registration/registration.component */ "./client/app/components/registration/registration.component.ts");
/* harmony import */ var _components_not_found__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/not-found */ "./client/app/components/not-found/index.ts");
/* harmony import */ var _selective_preloading_strategy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selective-preloading-strategy */ "./client/app/selective-preloading-strategy.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'registration',
        component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]
    },
    {
        path: 'home',
        loadChildren: './components/home/home.module#HomeModule',
        //canActivate: [AuthGuard],
        data: { prelaod: true }
    },
    {
        path: '**',
        component: _components_not_found__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _selective_preloading_strategy__WEBPACK_IMPORTED_MODULE_5__["SelectivePreloadingStrategy"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_selective_preloading_strategy__WEBPACK_IMPORTED_MODULE_5__["SelectivePreloadingStrategy"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"] }]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./client/app/app.component.html":
/*!***************************************!*\
  !*** ./client/app/app.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mobile\">\n  <router-outlet></router-outlet>\n</div>\n\n<div class=\"container\" *ngIf=\"!mobile\" style=\"padding: 5%; padding-top: 1%; padding-bottom: 1%;\">\n  <div class=\"columns is-desktop\">\n    <div class=\"column\" style=\"margin-top: auto; margin-bottom: auto\">\n      <h1 class=\"title is-1\">VHS Lanquaid\n        <br>Mobile App*</h1>\n      Made with <b style=\"color:hsl(348, 100%, 61%)\"> ❤</b> in Regensburg\n\n      <div>\n        <div style=\"padding-top:1rem\">\n          <a class=\"button is-primary\" href=\"https://www.vhslq.de/\" style=\"width: 13rem;\">VHS Website</a>\n        </div>\n        <div style=\"padding-top:1rem\">\n          <a class=\"button is-info\" href=\"https://github.com/marc101101/PS_SS18_vhsLangquaid\" style=\"width: 17rem;\">Github Repository</a>\n        </div>\n        <div style=\"padding-top:1rem\">\n            <a class=\"button is-warning\" href=\"https://www.uni-regensburg.de/sprache-literatur-kultur/medieninformatik/medieninformatik/index.html\" style=\"width: 21rem;\">Lehrstuhl Medieninfo. Uni. Regensburg</a>\n          </div>\n      </div>\n      <p style=\"font-size: 0.8rem; padding: 5rem; padding-left: 0rem;\">* Dies ist ein Demo für die Desktop Ansicht, die Anwendung ist aber hinsichtlich einer mobilen Nutzung optimiert.</p>\n    </div>\n\n    <div class=\"column\">\n      <div class=\"device-wrapper\" [style.height.px]=\"calcHeight\">\n        <div class=\"device\" [style.height.px]=\"frameHeight\" [style.width.px]=\"frameWidth\">\n          <div class=\"screen\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./client/app/app.component.scss":
/*!***************************************!*\
  !*** ./client/app/app.component.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n/*! bulma.io v0.7.1 | MIT License | github.com/jgthms/bulma */\n@-webkit-keyframes spinAround{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\n@keyframes spinAround{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\n.breadcrumb,.button,.delete,.file,.is-unselectable,.modal-close,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.tabs{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n.navbar-link::after,.select:not(.is-multiple):not(.is-loading)::after{border:3px solid transparent;border-radius:2px;border-right:0;border-top:0;content:\" \";display:block;height:.625em;margin-top:-.4375em;pointer-events:none;position:absolute;top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:center;transform-origin:center;width:.625em}\n.block:not(:last-child),.box:not(:last-child),.breadcrumb:not(:last-child),.content:not(:last-child),.highlight:not(:last-child),.level:not(:last-child),.message:not(:last-child),.notification:not(:last-child),.progress:not(:last-child),.subtitle:not(:last-child),.table-container:not(:last-child),.table:not(:last-child),.tabs:not(:last-child),.title:not(:last-child){margin-bottom:1.5rem}\n.delete,.modal-close{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(10,10,10,.2);border:none;border-radius:290486px;cursor:pointer;display:inline-block;flex-grow:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:0;position:relative;vertical-align:top;width:20px}\n.delete::after,.delete::before,.modal-close::after,.modal-close::before{background-color:#fff;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}\n.delete::before,.modal-close::before{height:2px;width:50%}\n.delete::after,.modal-close::after{height:50%;width:2px}\n.delete:focus,.delete:hover,.modal-close:focus,.modal-close:hover{background-color:rgba(10,10,10,.3)}\n.delete:active,.modal-close:active{background-color:rgba(10,10,10,.4)}\n.is-small.delete,.is-small.modal-close{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}\n.is-medium.delete,.is-medium.modal-close{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}\n.is-large.delete,.is-large.modal-close{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}\n.button.is-loading::after,.control.is-loading::after,.loader,.select.is-loading::after{-webkit-animation:spinAround .5s infinite linear;animation:spinAround .5s infinite linear;border:2px solid #dbdbdb;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1em;position:relative;width:1em}\n.hero-video,.image.is-16by9 img,.image.is-1by1 img,.image.is-1by2 img,.image.is-1by3 img,.image.is-2by1 img,.image.is-2by3 img,.image.is-3by1 img,.image.is-3by2 img,.image.is-3by4 img,.image.is-3by5 img,.image.is-4by3 img,.image.is-4by5 img,.image.is-5by3 img,.image.is-5by4 img,.image.is-9by16 img,.image.is-square img,.is-overlay,.modal,.modal-background{bottom:0;left:0;position:absolute;right:0;top:0}\n.button,.file-cta,.file-name,.input,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.select select,.textarea{-moz-appearance:none;-webkit-appearance:none;align-items:center;border:1px solid transparent;border-radius:4px;box-shadow:none;display:inline-flex;font-size:1rem;height:2.25em;justify-content:flex-start;line-height:1.5;padding-bottom:calc(.375em - 1px);padding-left:calc(.625em - 1px);padding-right:calc(.625em - 1px);padding-top:calc(.375em - 1px);position:relative;vertical-align:top}\n.button:active,.button:focus,.file-cta:active,.file-cta:focus,.file-name:active,.file-name:focus,.input:active,.input:focus,.is-active.button,.is-active.file-cta,.is-active.file-name,.is-active.input,.is-active.pagination-ellipsis,.is-active.pagination-link,.is-active.pagination-next,.is-active.pagination-previous,.is-active.textarea,.is-focused.button,.is-focused.file-cta,.is-focused.file-name,.is-focused.input,.is-focused.pagination-ellipsis,.is-focused.pagination-link,.is-focused.pagination-next,.is-focused.pagination-previous,.is-focused.textarea,.pagination-ellipsis:active,.pagination-ellipsis:focus,.pagination-link:active,.pagination-link:focus,.pagination-next:active,.pagination-next:focus,.pagination-previous:active,.pagination-previous:focus,.select select.is-active,.select select.is-focused,.select select:active,.select select:focus,.textarea:active,.textarea:focus{outline:0}\n.button[disabled],.file-cta[disabled],.file-name[disabled],.input[disabled],.pagination-ellipsis[disabled],.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled],.select select[disabled],.textarea[disabled]{cursor:not-allowed}\n/*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */\nblockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}\nh1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}\nul{list-style:none}\nbutton,input,select,textarea{margin:0}\nhtml{box-sizing:border-box}\n*,::after,::before{box-sizing:inherit}\naudio,img,video{height:auto;max-width:100%}\niframe{border:0}\ntable{border-collapse:collapse;border-spacing:0}\ntd,th{padding:0;text-align:left}\nhtml{background-color:#fff;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;overflow-x:hidden;overflow-y:scroll;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}\narticle,aside,figure,footer,header,hgroup,section{display:block}\nbody,button,input,select,textarea{font-family:BlinkMacSystemFont,-apple-system,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif}\ncode,pre{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:auto;font-family:monospace}\nbody{color:#4a4a4a;font-size:1rem;font-weight:400;line-height:1.5}\na{color:#3273dc;cursor:pointer;text-decoration:none}\na strong{color:currentColor}\na:hover{color:#363636}\ncode{background-color:#f5f5f5;color:#ff3860;font-size:.875em;font-weight:400;padding:.25em .5em .25em}\nhr{background-color:#f5f5f5;border:none;display:block;height:2px;margin:1.5rem 0}\nimg{height:auto;max-width:100%}\ninput[type=checkbox],input[type=radio]{vertical-align:baseline}\nsmall{font-size:.875em}\nspan{font-style:inherit;font-weight:inherit}\nstrong{color:#363636;font-weight:700}\npre{-webkit-overflow-scrolling:touch;background-color:#f5f5f5;color:#4a4a4a;font-size:.875em;overflow-x:auto;padding:1.25rem 1.5rem;white-space:pre;word-wrap:normal}\npre code{background-color:transparent;color:currentColor;font-size:1em;padding:0}\ntable td,table th{text-align:left;vertical-align:top}\ntable th{color:#363636}\n.is-clearfix::after{clear:both;content:\" \";display:table}\n.is-pulled-left{float:left!important}\n.is-pulled-right{float:right!important}\n.is-clipped{overflow:hidden!important}\n.is-size-1{font-size:3rem!important}\n.is-size-2{font-size:2.5rem!important}\n.is-size-3{font-size:2rem!important}\n.is-size-4{font-size:1.5rem!important}\n.is-size-5{font-size:1.25rem!important}\n.is-size-6{font-size:1rem!important}\n.is-size-7{font-size:.75rem!important}\n@media screen and (max-width:768px){.is-size-1-mobile{font-size:3rem!important}.is-size-2-mobile{font-size:2.5rem!important}.is-size-3-mobile{font-size:2rem!important}.is-size-4-mobile{font-size:1.5rem!important}.is-size-5-mobile{font-size:1.25rem!important}.is-size-6-mobile{font-size:1rem!important}.is-size-7-mobile{font-size:.75rem!important}}\n@media screen and (min-width:769px), print{.is-size-1-tablet{font-size:3rem!important}.is-size-2-tablet{font-size:2.5rem!important}.is-size-3-tablet{font-size:2rem!important}.is-size-4-tablet{font-size:1.5rem!important}.is-size-5-tablet{font-size:1.25rem!important}.is-size-6-tablet{font-size:1rem!important}.is-size-7-tablet{font-size:.75rem!important}}\n@media screen and (max-width:1087px){.is-size-1-touch{font-size:3rem!important}.is-size-2-touch{font-size:2.5rem!important}.is-size-3-touch{font-size:2rem!important}.is-size-4-touch{font-size:1.5rem!important}.is-size-5-touch{font-size:1.25rem!important}.is-size-6-touch{font-size:1rem!important}.is-size-7-touch{font-size:.75rem!important}}\n@media screen and (min-width:1088px){.is-size-1-desktop{font-size:3rem!important}.is-size-2-desktop{font-size:2.5rem!important}.is-size-3-desktop{font-size:2rem!important}.is-size-4-desktop{font-size:1.5rem!important}.is-size-5-desktop{font-size:1.25rem!important}.is-size-6-desktop{font-size:1rem!important}.is-size-7-desktop{font-size:.75rem!important}}\n@media screen and (min-width:1280px){.is-size-1-widescreen{font-size:3rem!important}.is-size-2-widescreen{font-size:2.5rem!important}.is-size-3-widescreen{font-size:2rem!important}.is-size-4-widescreen{font-size:1.5rem!important}.is-size-5-widescreen{font-size:1.25rem!important}.is-size-6-widescreen{font-size:1rem!important}.is-size-7-widescreen{font-size:.75rem!important}}\n@media screen and (min-width:1472px){.is-size-1-fullhd{font-size:3rem!important}.is-size-2-fullhd{font-size:2.5rem!important}.is-size-3-fullhd{font-size:2rem!important}.is-size-4-fullhd{font-size:1.5rem!important}.is-size-5-fullhd{font-size:1.25rem!important}.is-size-6-fullhd{font-size:1rem!important}.is-size-7-fullhd{font-size:.75rem!important}}\n.has-text-centered{text-align:center!important}\n.has-text-justified{text-align:justify!important}\n.has-text-left{text-align:left!important}\n.has-text-right{text-align:right!important}\n@media screen and (max-width:768px){.has-text-centered-mobile{text-align:center!important}}\n@media screen and (min-width:769px), print{.has-text-centered-tablet{text-align:center!important}}\n@media screen and (min-width:769px) and (max-width:1087px){.has-text-centered-tablet-only{text-align:center!important}}\n@media screen and (max-width:1087px){.has-text-centered-touch{text-align:center!important}}\n@media screen and (min-width:1088px){.has-text-centered-desktop{text-align:center!important}}\n@media screen and (min-width:1088px) and (max-width:1279px){.has-text-centered-desktop-only{text-align:center!important}}\n@media screen and (min-width:1280px){.has-text-centered-widescreen{text-align:center!important}}\n@media screen and (min-width:1280px) and (max-width:1471px){.has-text-centered-widescreen-only{text-align:center!important}}\n@media screen and (min-width:1472px){.has-text-centered-fullhd{text-align:center!important}}\n@media screen and (max-width:768px){.has-text-justified-mobile{text-align:justify!important}}\n@media screen and (min-width:769px), print{.has-text-justified-tablet{text-align:justify!important}}\n@media screen and (min-width:769px) and (max-width:1087px){.has-text-justified-tablet-only{text-align:justify!important}}\n@media screen and (max-width:1087px){.has-text-justified-touch{text-align:justify!important}}\n@media screen and (min-width:1088px){.has-text-justified-desktop{text-align:justify!important}}\n@media screen and (min-width:1088px) and (max-width:1279px){.has-text-justified-desktop-only{text-align:justify!important}}\n@media screen and (min-width:1280px){.has-text-justified-widescreen{text-align:justify!important}}\n@media screen and (min-width:1280px) and (max-width:1471px){.has-text-justified-widescreen-only{text-align:justify!important}}\n@media screen and (min-width:1472px){.has-text-justified-fullhd{text-align:justify!important}}\n@media screen and (max-width:768px){.has-text-left-mobile{text-align:left!important}}\n@media screen and (min-width:769px), print{.has-text-left-tablet{text-align:left!important}}\n@media screen and (min-width:769px) and (max-width:1087px){.has-text-left-tablet-only{text-align:left!important}}\n@media screen and (max-width:1087px){.has-text-left-touch{text-align:left!important}}\n@media screen and (min-width:1088px){.has-text-left-desktop{text-align:left!important}}\n@media screen and (min-width:1088px) and (max-width:1279px){.has-text-left-desktop-only{text-align:left!important}}\n@media screen and (min-width:1280px){.has-text-left-widescreen{text-align:left!important}}\n@media screen and (min-width:1280px) and (max-width:1471px){.has-text-left-widescreen-only{text-align:left!important}}\n@media screen and (min-width:1472px){.has-text-left-fullhd{text-align:left!important}}\n@media screen and (max-width:768px){.has-text-right-mobile{text-align:right!important}}\n@media screen and (min-width:769px), print{.has-text-right-tablet{text-align:right!important}}\n@media screen and (min-width:769px) and (max-width:1087px){.has-text-right-tablet-only{text-align:right!important}}\n@media screen and (max-width:1087px){.has-text-right-touch{text-align:right!important}}\n@media screen and (min-width:1088px){.has-text-right-desktop{text-align:right!important}}\n@media screen and (min-width:1088px) and (max-width:1279px){.has-text-right-desktop-only{text-align:right!important}}\n@media screen and (min-width:1280px){.has-text-right-widescreen{text-align:right!important}}\n@media screen and (min-width:1280px) and (max-width:1471px){.has-text-right-widescreen-only{text-align:right!important}}\n@media screen and (min-width:1472px){.has-text-right-fullhd{text-align:right!important}}\n.is-capitalized{text-transform:capitalize!important}\n.is-lowercase{text-transform:lowercase!important}\n.is-uppercase{text-transform:uppercase!important}\n.is-italic{font-style:italic!important}\n.has-text-white{color:#fff!important}\na.has-text-white:focus,a.has-text-white:hover{color:#e6e6e6!important}\n.has-background-white{background-color:#fff!important}\n.has-text-black{color:#0a0a0a!important}\na.has-text-black:focus,a.has-text-black:hover{color:#000!important}\n.has-background-black{background-color:#0a0a0a!important}\n.has-text-light{color:#f5f5f5!important}\na.has-text-light:focus,a.has-text-light:hover{color:#dbdbdb!important}\n.has-background-light{background-color:#f5f5f5!important}\n.has-text-dark{color:#363636!important}\na.has-text-dark:focus,a.has-text-dark:hover{color:#1c1c1c!important}\n.has-background-dark{background-color:#363636!important}\n.has-text-primary{color:#00d1b2!important}\na.has-text-primary:focus,a.has-text-primary:hover{color:#009e86!important}\n.has-background-primary{background-color:#00d1b2!important}\n.has-text-link{color:#3273dc!important}\na.has-text-link:focus,a.has-text-link:hover{color:#205bbc!important}\n.has-background-link{background-color:#3273dc!important}\n.has-text-info{color:#209cee!important}\na.has-text-info:focus,a.has-text-info:hover{color:#0f81cc!important}\n.has-background-info{background-color:#209cee!important}\n.has-text-success{color:#23d160!important}\na.has-text-success:focus,a.has-text-success:hover{color:#1ca64c!important}\n.has-background-success{background-color:#23d160!important}\n.has-text-warning{color:#ffdd57!important}\na.has-text-warning:focus,a.has-text-warning:hover{color:#ffd324!important}\n.has-background-warning{background-color:#ffdd57!important}\n.has-text-danger{color:#ff3860!important}\na.has-text-danger:focus,a.has-text-danger:hover{color:#ff0537!important}\n.has-background-danger{background-color:#ff3860!important}\n.has-text-black-bis{color:#121212!important}\n.has-background-black-bis{background-color:#121212!important}\n.has-text-black-ter{color:#242424!important}\n.has-background-black-ter{background-color:#242424!important}\n.has-text-grey-darker{color:#363636!important}\n.has-background-grey-darker{background-color:#363636!important}\n.has-text-grey-dark{color:#4a4a4a!important}\n.has-background-grey-dark{background-color:#4a4a4a!important}\n.has-text-grey{color:#7a7a7a!important}\n.has-background-grey{background-color:#7a7a7a!important}\n.has-text-grey-light{color:#b5b5b5!important}\n.has-background-grey-light{background-color:#b5b5b5!important}\n.has-text-grey-lighter{color:#dbdbdb!important}\n.has-background-grey-lighter{background-color:#dbdbdb!important}\n.has-text-white-ter{color:#f5f5f5!important}\n.has-background-white-ter{background-color:#f5f5f5!important}\n.has-text-white-bis{color:#fafafa!important}\n.has-background-white-bis{background-color:#fafafa!important}\n.has-text-weight-light{font-weight:300!important}\n.has-text-weight-normal{font-weight:400!important}\n.has-text-weight-semibold{font-weight:600!important}\n.has-text-weight-bold{font-weight:700!important}\n.is-block{display:block!important}\n@media screen and (max-width:768px){.is-block-mobile{display:block!important}}\n@media screen and (min-width:769px), print{.is-block-tablet{display:block!important}}\n@media screen and (min-width:769px) and (max-width:1087px){.is-block-tablet-only{display:block!important}}\n@media screen and (max-width:1087px){.is-block-touch{display:block!important}}\n@media screen and (min-width:1088px){.is-block-desktop{display:block!important}}\n@media screen and (min-width:1088px) and (max-width:1279px){.is-block-desktop-only{display:block!important}}\n@media screen and (min-width:1280px){.is-block-widescreen{display:block!important}}\n@media screen and (min-width:1280px) and (max-width:1471px){.is-block-widescreen-only{display:block!important}}\n@media screen and (min-width:1472px){.is-block-fullhd{display:block!important}}\n.is-flex{display:flex!important}\n@media screen and (max-width:768px){.is-flex-mobile{display:flex!important}}\n@media screen and (min-width:769px), print{.is-flex-tablet{display:flex!important}}\n@media screen and (min-width:769px) and (max-width:1087px){.is-flex-tablet-only{display:flex!important}}\n@media screen and (max-width:1087px){.is-flex-touch{display:flex!important}}\n@media screen and (min-width:1088px){.is-flex-desktop{display:flex!important}}\n@media screen and (min-width:1088px) and (max-width:1279px){.is-flex-desktop-only{display:flex!important}}\n@media screen and (min-width:1280px){.is-flex-widescreen{display:flex!important}}\n@media screen and (min-width:1280px) and (max-width:1471px){.is-flex-widescreen-only{display:flex!important}}\n@media screen and (min-width:1472px){.is-flex-fullhd{display:flex!important}}\n.is-inline{display:inline!important}\n@media screen and (max-width:768px){.is-inline-mobile{display:inline!important}}\n@media screen and (min-width:769px), print{.is-inline-tablet{display:inline!important}}\n@media screen and (min-width:769px) and (max-width:1087px){.is-inline-tablet-only{display:inline!important}}\n@media screen and (max-width:1087px){.is-inline-touch{display:inline!important}}\n@media screen and (min-width:1088px){.is-inline-desktop{display:inline!important}}\n@media screen and (min-width:1088px) and (max-width:1279px){.is-inline-desktop-only{display:inline!important}}\n@media screen and (min-width:1280px){.is-inline-widescreen{display:inline!important}}\n@media screen and (min-width:1280px) and (max-width:1471px){.is-inline-widescreen-only{display:inline!important}}\n@media screen and (min-width:1472px){.is-inline-fullhd{display:inline!important}}\n.is-inline-block{display:inline-block!important}\n@media screen and (max-width:768px){.is-inline-block-mobile{display:inline-block!important}}\n@media screen and (min-width:769px), print{.is-inline-block-tablet{display:inline-block!important}}\n@media screen and (min-width:769px) and (max-width:1087px){.is-inline-block-tablet-only{display:inline-block!important}}\n@media screen and (max-width:1087px){.is-inline-block-touch{display:inline-block!important}}\n@media screen and (min-width:1088px){.is-inline-block-desktop{display:inline-block!important}}\n@media screen and (min-width:1088px) and (max-width:1279px){.is-inline-block-desktop-only{display:inline-block!important}}\n@media screen and (min-width:1280px){.is-inline-block-widescreen{display:inline-block!important}}\n@media screen and (min-width:1280px) and (max-width:1471px){.is-inline-block-widescreen-only{display:inline-block!important}}\n@media screen and (min-width:1472px){.is-inline-block-fullhd{display:inline-block!important}}\n.is-inline-flex{display:inline-flex!important}\n@media screen and (max-width:768px){.is-inline-flex-mobile{display:inline-flex!important}}\n@media screen and (min-width:769px), print{.is-inline-flex-tablet{display:inline-flex!important}}\n@media screen and (min-width:769px) and (max-width:1087px){.is-inline-flex-tablet-only{display:inline-flex!important}}\n@media screen and (max-width:1087px){.is-inline-flex-touch{display:inline-flex!important}}\n@media screen and (min-width:1088px){.is-inline-flex-desktop{display:inline-flex!important}}\n@media screen and (min-width:1088px) and (max-width:1279px){.is-inline-flex-desktop-only{display:inline-flex!important}}\n@media screen and (min-width:1280px){.is-inline-flex-widescreen{display:inline-flex!important}}\n@media screen and (min-width:1280px) and (max-width:1471px){.is-inline-flex-widescreen-only{display:inline-flex!important}}\n@media screen and (min-width:1472px){.is-inline-flex-fullhd{display:inline-flex!important}}\n.is-hidden{display:none!important}\n@media screen and (max-width:768px){.is-hidden-mobile{display:none!important}}\n@media screen and (min-width:769px), print{.is-hidden-tablet{display:none!important}}\n@media screen and (min-width:769px) and (max-width:1087px){.is-hidden-tablet-only{display:none!important}}\n@media screen and (max-width:1087px){.is-hidden-touch{display:none!important}}\n@media screen and (min-width:1088px){.is-hidden-desktop{display:none!important}}\n@media screen and (min-width:1088px) and (max-width:1279px){.is-hidden-desktop-only{display:none!important}}\n@media screen and (min-width:1280px){.is-hidden-widescreen{display:none!important}}\n@media screen and (min-width:1280px) and (max-width:1471px){.is-hidden-widescreen-only{display:none!important}}\n@media screen and (min-width:1472px){.is-hidden-fullhd{display:none!important}}\n.is-invisible{visibility:hidden!important}\n@media screen and (max-width:768px){.is-invisible-mobile{visibility:hidden!important}}\n@media screen and (min-width:769px), print{.is-invisible-tablet{visibility:hidden!important}}\n@media screen and (min-width:769px) and (max-width:1087px){.is-invisible-tablet-only{visibility:hidden!important}}\n@media screen and (max-width:1087px){.is-invisible-touch{visibility:hidden!important}}\n@media screen and (min-width:1088px){.is-invisible-desktop{visibility:hidden!important}}\n@media screen and (min-width:1088px) and (max-width:1279px){.is-invisible-desktop-only{visibility:hidden!important}}\n@media screen and (min-width:1280px){.is-invisible-widescreen{visibility:hidden!important}}\n@media screen and (min-width:1280px) and (max-width:1471px){.is-invisible-widescreen-only{visibility:hidden!important}}\n@media screen and (min-width:1472px){.is-invisible-fullhd{visibility:hidden!important}}\n.is-marginless{margin:0!important}\n.is-paddingless{padding:0!important}\n.is-radiusless{border-radius:0!important}\n.is-shadowless{box-shadow:none!important}\n.box{background-color:#fff;border-radius:6px;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);color:#4a4a4a;display:block;padding:1.25rem}\na.box:focus,a.box:hover{box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px #3273dc}\na.box:active{box-shadow:inset 0 1px 2px rgba(10,10,10,.2),0 0 0 1px #3273dc}\n.button{background-color:#fff;border-color:#dbdbdb;border-width:1px;color:#363636;cursor:pointer;justify-content:center;padding-bottom:calc(.375em - 1px);padding-left:.75em;padding-right:.75em;padding-top:calc(.375em - 1px);text-align:center;white-space:nowrap}\n.button strong{color:inherit}\n.button .icon,.button .icon.is-large,.button .icon.is-medium,.button .icon.is-small{height:1.5em;width:1.5em}\n.button .icon:first-child:not(:last-child){margin-left:calc(-.375em - 1px);margin-right:.1875em}\n.button .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:calc(-.375em - 1px)}\n.button .icon:first-child:last-child{margin-left:calc(-.375em - 1px);margin-right:calc(-.375em - 1px)}\n.button.is-hovered,.button:hover{border-color:#b5b5b5;color:#363636}\n.button.is-focused,.button:focus{border-color:#3273dc;color:#363636}\n.button.is-focused:not(:active),.button:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,115,220,.25)}\n.button.is-active,.button:active{border-color:#4a4a4a;color:#363636}\n.button.is-text{background-color:transparent;border-color:transparent;color:#4a4a4a;text-decoration:underline}\n.button.is-text.is-focused,.button.is-text.is-hovered,.button.is-text:focus,.button.is-text:hover{background-color:#f5f5f5;color:#363636}\n.button.is-text.is-active,.button.is-text:active{background-color:#e8e8e8;color:#363636}\n.button.is-text[disabled]{background-color:transparent;border-color:transparent;box-shadow:none}\n.button.is-white{background-color:#fff;border-color:transparent;color:#0a0a0a}\n.button.is-white.is-hovered,.button.is-white:hover{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}\n.button.is-white.is-focused,.button.is-white:focus{border-color:transparent;color:#0a0a0a}\n.button.is-white.is-focused:not(:active),.button.is-white:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,255,255,.25)}\n.button.is-white.is-active,.button.is-white:active{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}\n.button.is-white[disabled]{background-color:#fff;border-color:transparent;box-shadow:none}\n.button.is-white.is-inverted{background-color:#0a0a0a;color:#fff}\n.button.is-white.is-inverted:hover{background-color:#000}\n.button.is-white.is-inverted[disabled]{background-color:#0a0a0a;border-color:transparent;box-shadow:none;color:#fff}\n.button.is-white.is-loading::after{border-color:transparent transparent #0a0a0a #0a0a0a!important}\n.button.is-white.is-outlined{background-color:transparent;border-color:#fff;color:#fff}\n.button.is-white.is-outlined:focus,.button.is-white.is-outlined:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}\n.button.is-white.is-outlined.is-loading::after{border-color:transparent transparent #fff #fff!important}\n.button.is-white.is-outlined[disabled]{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}\n.button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}\n.button.is-white.is-inverted.is-outlined:focus,.button.is-white.is-inverted.is-outlined:hover{background-color:#0a0a0a;color:#fff}\n.button.is-white.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}\n.button.is-black{background-color:#0a0a0a;border-color:transparent;color:#fff}\n.button.is-black.is-hovered,.button.is-black:hover{background-color:#040404;border-color:transparent;color:#fff}\n.button.is-black.is-focused,.button.is-black:focus{border-color:transparent;color:#fff}\n.button.is-black.is-focused:not(:active),.button.is-black:focus:not(:active){box-shadow:0 0 0 .125em rgba(10,10,10,.25)}\n.button.is-black.is-active,.button.is-black:active{background-color:#000;border-color:transparent;color:#fff}\n.button.is-black[disabled]{background-color:#0a0a0a;border-color:transparent;box-shadow:none}\n.button.is-black.is-inverted{background-color:#fff;color:#0a0a0a}\n.button.is-black.is-inverted:hover{background-color:#f2f2f2}\n.button.is-black.is-inverted[disabled]{background-color:#fff;border-color:transparent;box-shadow:none;color:#0a0a0a}\n.button.is-black.is-loading::after{border-color:transparent transparent #fff #fff!important}\n.button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}\n.button.is-black.is-outlined:focus,.button.is-black.is-outlined:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}\n.button.is-black.is-outlined.is-loading::after{border-color:transparent transparent #0a0a0a #0a0a0a!important}\n.button.is-black.is-outlined[disabled]{background-color:transparent;border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}\n.button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}\n.button.is-black.is-inverted.is-outlined:focus,.button.is-black.is-inverted.is-outlined:hover{background-color:#fff;color:#0a0a0a}\n.button.is-black.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}\n.button.is-light{background-color:#f5f5f5;border-color:transparent;color:#363636}\n.button.is-light.is-hovered,.button.is-light:hover{background-color:#eee;border-color:transparent;color:#363636}\n.button.is-light.is-focused,.button.is-light:focus{border-color:transparent;color:#363636}\n.button.is-light.is-focused:not(:active),.button.is-light:focus:not(:active){box-shadow:0 0 0 .125em rgba(245,245,245,.25)}\n.button.is-light.is-active,.button.is-light:active{background-color:#e8e8e8;border-color:transparent;color:#363636}\n.button.is-light[disabled]{background-color:#f5f5f5;border-color:transparent;box-shadow:none}\n.button.is-light.is-inverted{background-color:#363636;color:#f5f5f5}\n.button.is-light.is-inverted:hover{background-color:#292929}\n.button.is-light.is-inverted[disabled]{background-color:#363636;border-color:transparent;box-shadow:none;color:#f5f5f5}\n.button.is-light.is-loading::after{border-color:transparent transparent #363636 #363636!important}\n.button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}\n.button.is-light.is-outlined:focus,.button.is-light.is-outlined:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}\n.button.is-light.is-outlined.is-loading::after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}\n.button.is-light.is-outlined[disabled]{background-color:transparent;border-color:#f5f5f5;box-shadow:none;color:#f5f5f5}\n.button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:#363636;color:#363636}\n.button.is-light.is-inverted.is-outlined:focus,.button.is-light.is-inverted.is-outlined:hover{background-color:#363636;color:#f5f5f5}\n.button.is-light.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#363636;box-shadow:none;color:#363636}\n.button.is-dark{background-color:#363636;border-color:transparent;color:#f5f5f5}\n.button.is-dark.is-hovered,.button.is-dark:hover{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}\n.button.is-dark.is-focused,.button.is-dark:focus{border-color:transparent;color:#f5f5f5}\n.button.is-dark.is-focused:not(:active),.button.is-dark:focus:not(:active){box-shadow:0 0 0 .125em rgba(54,54,54,.25)}\n.button.is-dark.is-active,.button.is-dark:active{background-color:#292929;border-color:transparent;color:#f5f5f5}\n.button.is-dark[disabled]{background-color:#363636;border-color:transparent;box-shadow:none}\n.button.is-dark.is-inverted{background-color:#f5f5f5;color:#363636}\n.button.is-dark.is-inverted:hover{background-color:#e8e8e8}\n.button.is-dark.is-inverted[disabled]{background-color:#f5f5f5;border-color:transparent;box-shadow:none;color:#363636}\n.button.is-dark.is-loading::after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}\n.button.is-dark.is-outlined{background-color:transparent;border-color:#363636;color:#363636}\n.button.is-dark.is-outlined:focus,.button.is-dark.is-outlined:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}\n.button.is-dark.is-outlined.is-loading::after{border-color:transparent transparent #363636 #363636!important}\n.button.is-dark.is-outlined[disabled]{background-color:transparent;border-color:#363636;box-shadow:none;color:#363636}\n.button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}\n.button.is-dark.is-inverted.is-outlined:focus,.button.is-dark.is-inverted.is-outlined:hover{background-color:#f5f5f5;color:#363636}\n.button.is-dark.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#f5f5f5;box-shadow:none;color:#f5f5f5}\n.button.is-primary{background-color:#00d1b2;border-color:transparent;color:#fff}\n.button.is-primary.is-hovered,.button.is-primary:hover{background-color:#00c4a7;border-color:transparent;color:#fff}\n.button.is-primary.is-focused,.button.is-primary:focus{border-color:transparent;color:#fff}\n.button.is-primary.is-focused:not(:active),.button.is-primary:focus:not(:active){box-shadow:0 0 0 .125em rgba(0,209,178,.25)}\n.button.is-primary.is-active,.button.is-primary:active{background-color:#00b89c;border-color:transparent;color:#fff}\n.button.is-primary[disabled]{background-color:#00d1b2;border-color:transparent;box-shadow:none}\n.button.is-primary.is-inverted{background-color:#fff;color:#00d1b2}\n.button.is-primary.is-inverted:hover{background-color:#f2f2f2}\n.button.is-primary.is-inverted[disabled]{background-color:#fff;border-color:transparent;box-shadow:none;color:#00d1b2}\n.button.is-primary.is-loading::after{border-color:transparent transparent #fff #fff!important}\n.button.is-primary.is-outlined{background-color:transparent;border-color:#00d1b2;color:#00d1b2}\n.button.is-primary.is-outlined:focus,.button.is-primary.is-outlined:hover{background-color:#00d1b2;border-color:#00d1b2;color:#fff}\n.button.is-primary.is-outlined.is-loading::after{border-color:transparent transparent #00d1b2 #00d1b2!important}\n.button.is-primary.is-outlined[disabled]{background-color:transparent;border-color:#00d1b2;box-shadow:none;color:#00d1b2}\n.button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}\n.button.is-primary.is-inverted.is-outlined:focus,.button.is-primary.is-inverted.is-outlined:hover{background-color:#fff;color:#00d1b2}\n.button.is-primary.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}\n.button.is-link{background-color:#3273dc;border-color:transparent;color:#fff}\n.button.is-link.is-hovered,.button.is-link:hover{background-color:#276cda;border-color:transparent;color:#fff}\n.button.is-link.is-focused,.button.is-link:focus{border-color:transparent;color:#fff}\n.button.is-link.is-focused:not(:active),.button.is-link:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,115,220,.25)}\n.button.is-link.is-active,.button.is-link:active{background-color:#2366d1;border-color:transparent;color:#fff}\n.button.is-link[disabled]{background-color:#3273dc;border-color:transparent;box-shadow:none}\n.button.is-link.is-inverted{background-color:#fff;color:#3273dc}\n.button.is-link.is-inverted:hover{background-color:#f2f2f2}\n.button.is-link.is-inverted[disabled]{background-color:#fff;border-color:transparent;box-shadow:none;color:#3273dc}\n.button.is-link.is-loading::after{border-color:transparent transparent #fff #fff!important}\n.button.is-link.is-outlined{background-color:transparent;border-color:#3273dc;color:#3273dc}\n.button.is-link.is-outlined:focus,.button.is-link.is-outlined:hover{background-color:#3273dc;border-color:#3273dc;color:#fff}\n.button.is-link.is-outlined.is-loading::after{border-color:transparent transparent #3273dc #3273dc!important}\n.button.is-link.is-outlined[disabled]{background-color:transparent;border-color:#3273dc;box-shadow:none;color:#3273dc}\n.button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}\n.button.is-link.is-inverted.is-outlined:focus,.button.is-link.is-inverted.is-outlined:hover{background-color:#fff;color:#3273dc}\n.button.is-link.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}\n.button.is-info{background-color:#209cee;border-color:transparent;color:#fff}\n.button.is-info.is-hovered,.button.is-info:hover{background-color:#1496ed;border-color:transparent;color:#fff}\n.button.is-info.is-focused,.button.is-info:focus{border-color:transparent;color:#fff}\n.button.is-info.is-focused:not(:active),.button.is-info:focus:not(:active){box-shadow:0 0 0 .125em rgba(32,156,238,.25)}\n.button.is-info.is-active,.button.is-info:active{background-color:#118fe4;border-color:transparent;color:#fff}\n.button.is-info[disabled]{background-color:#209cee;border-color:transparent;box-shadow:none}\n.button.is-info.is-inverted{background-color:#fff;color:#209cee}\n.button.is-info.is-inverted:hover{background-color:#f2f2f2}\n.button.is-info.is-inverted[disabled]{background-color:#fff;border-color:transparent;box-shadow:none;color:#209cee}\n.button.is-info.is-loading::after{border-color:transparent transparent #fff #fff!important}\n.button.is-info.is-outlined{background-color:transparent;border-color:#209cee;color:#209cee}\n.button.is-info.is-outlined:focus,.button.is-info.is-outlined:hover{background-color:#209cee;border-color:#209cee;color:#fff}\n.button.is-info.is-outlined.is-loading::after{border-color:transparent transparent #209cee #209cee!important}\n.button.is-info.is-outlined[disabled]{background-color:transparent;border-color:#209cee;box-shadow:none;color:#209cee}\n.button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}\n.button.is-info.is-inverted.is-outlined:focus,.button.is-info.is-inverted.is-outlined:hover{background-color:#fff;color:#209cee}\n.button.is-info.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}\n.button.is-success{background-color:#23d160;border-color:transparent;color:#fff}\n.button.is-success.is-hovered,.button.is-success:hover{background-color:#22c65b;border-color:transparent;color:#fff}\n.button.is-success.is-focused,.button.is-success:focus{border-color:transparent;color:#fff}\n.button.is-success.is-focused:not(:active),.button.is-success:focus:not(:active){box-shadow:0 0 0 .125em rgba(35,209,96,.25)}\n.button.is-success.is-active,.button.is-success:active{background-color:#20bc56;border-color:transparent;color:#fff}\n.button.is-success[disabled]{background-color:#23d160;border-color:transparent;box-shadow:none}\n.button.is-success.is-inverted{background-color:#fff;color:#23d160}\n.button.is-success.is-inverted:hover{background-color:#f2f2f2}\n.button.is-success.is-inverted[disabled]{background-color:#fff;border-color:transparent;box-shadow:none;color:#23d160}\n.button.is-success.is-loading::after{border-color:transparent transparent #fff #fff!important}\n.button.is-success.is-outlined{background-color:transparent;border-color:#23d160;color:#23d160}\n.button.is-success.is-outlined:focus,.button.is-success.is-outlined:hover{background-color:#23d160;border-color:#23d160;color:#fff}\n.button.is-success.is-outlined.is-loading::after{border-color:transparent transparent #23d160 #23d160!important}\n.button.is-success.is-outlined[disabled]{background-color:transparent;border-color:#23d160;box-shadow:none;color:#23d160}\n.button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}\n.button.is-success.is-inverted.is-outlined:focus,.button.is-success.is-inverted.is-outlined:hover{background-color:#fff;color:#23d160}\n.button.is-success.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}\n.button.is-warning{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}\n.button.is-warning.is-hovered,.button.is-warning:hover{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}\n.button.is-warning.is-focused,.button.is-warning:focus{border-color:transparent;color:rgba(0,0,0,.7)}\n.button.is-warning.is-focused:not(:active),.button.is-warning:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,221,87,.25)}\n.button.is-warning.is-active,.button.is-warning:active{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}\n.button.is-warning[disabled]{background-color:#ffdd57;border-color:transparent;box-shadow:none}\n.button.is-warning.is-inverted{background-color:rgba(0,0,0,.7);color:#ffdd57}\n.button.is-warning.is-inverted:hover{background-color:rgba(0,0,0,.7)}\n.button.is-warning.is-inverted[disabled]{background-color:rgba(0,0,0,.7);border-color:transparent;box-shadow:none;color:#ffdd57}\n.button.is-warning.is-loading::after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}\n.button.is-warning.is-outlined{background-color:transparent;border-color:#ffdd57;color:#ffdd57}\n.button.is-warning.is-outlined:focus,.button.is-warning.is-outlined:hover{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}\n.button.is-warning.is-outlined.is-loading::after{border-color:transparent transparent #ffdd57 #ffdd57!important}\n.button.is-warning.is-outlined[disabled]{background-color:transparent;border-color:#ffdd57;box-shadow:none;color:#ffdd57}\n.button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}\n.button.is-warning.is-inverted.is-outlined:focus,.button.is-warning.is-inverted.is-outlined:hover{background-color:rgba(0,0,0,.7);color:#ffdd57}\n.button.is-warning.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:rgba(0,0,0,.7);box-shadow:none;color:rgba(0,0,0,.7)}\n.button.is-danger{background-color:#ff3860;border-color:transparent;color:#fff}\n.button.is-danger.is-hovered,.button.is-danger:hover{background-color:#ff2b56;border-color:transparent;color:#fff}\n.button.is-danger.is-focused,.button.is-danger:focus{border-color:transparent;color:#fff}\n.button.is-danger.is-focused:not(:active),.button.is-danger:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,56,96,.25)}\n.button.is-danger.is-active,.button.is-danger:active{background-color:#ff1f4b;border-color:transparent;color:#fff}\n.button.is-danger[disabled]{background-color:#ff3860;border-color:transparent;box-shadow:none}\n.button.is-danger.is-inverted{background-color:#fff;color:#ff3860}\n.button.is-danger.is-inverted:hover{background-color:#f2f2f2}\n.button.is-danger.is-inverted[disabled]{background-color:#fff;border-color:transparent;box-shadow:none;color:#ff3860}\n.button.is-danger.is-loading::after{border-color:transparent transparent #fff #fff!important}\n.button.is-danger.is-outlined{background-color:transparent;border-color:#ff3860;color:#ff3860}\n.button.is-danger.is-outlined:focus,.button.is-danger.is-outlined:hover{background-color:#ff3860;border-color:#ff3860;color:#fff}\n.button.is-danger.is-outlined.is-loading::after{border-color:transparent transparent #ff3860 #ff3860!important}\n.button.is-danger.is-outlined[disabled]{background-color:transparent;border-color:#ff3860;box-shadow:none;color:#ff3860}\n.button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}\n.button.is-danger.is-inverted.is-outlined:focus,.button.is-danger.is-inverted.is-outlined:hover{background-color:#fff;color:#ff3860}\n.button.is-danger.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}\n.button.is-small{border-radius:2px;font-size:.75rem}\n.button.is-medium{font-size:1.25rem}\n.button.is-large{font-size:1.5rem}\n.button[disabled]{background-color:#fff;border-color:#dbdbdb;box-shadow:none;opacity:.5}\n.button.is-fullwidth{display:flex;width:100%}\n.button.is-loading{color:transparent!important;pointer-events:none}\n.button.is-loading::after{position:absolute;left:calc(50% - (1em / 2));top:calc(50% - (1em / 2));position:absolute!important}\n.button.is-static{background-color:#f5f5f5;border-color:#dbdbdb;color:#7a7a7a;box-shadow:none;pointer-events:none}\n.button.is-rounded{border-radius:290486px;padding-left:1em;padding-right:1em}\n.buttons{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}\n.buttons .button{margin-bottom:.5rem}\n.buttons .button:not(:last-child){margin-right:.5rem}\n.buttons:last-child{margin-bottom:-.5rem}\n.buttons:not(:last-child){margin-bottom:1rem}\n.buttons.has-addons .button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}\n.buttons.has-addons .button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}\n.buttons.has-addons .button:last-child{margin-right:0}\n.buttons.has-addons .button.is-hovered,.buttons.has-addons .button:hover{z-index:2}\n.buttons.has-addons .button.is-active,.buttons.has-addons .button.is-focused,.buttons.has-addons .button.is-selected,.buttons.has-addons .button:active,.buttons.has-addons .button:focus{z-index:3}\n.buttons.has-addons .button.is-active:hover,.buttons.has-addons .button.is-focused:hover,.buttons.has-addons .button.is-selected:hover,.buttons.has-addons .button:active:hover,.buttons.has-addons .button:focus:hover{z-index:4}\n.buttons.has-addons .button.is-expanded{flex-grow:1}\n.buttons.is-centered{justify-content:center}\n.buttons.is-right{justify-content:flex-end}\n.container{margin:0 auto;position:relative}\n@media screen and (min-width:1088px){.container{max-width:960px;width:960px}.container.is-fluid{margin-left:64px;margin-right:64px;max-width:none;width:auto}}\n@media screen and (max-width:1279px){.container.is-widescreen{max-width:1152px;width:auto}}\n@media screen and (max-width:1471px){.container.is-fullhd{max-width:1344px;width:auto}}\n@media screen and (min-width:1280px){.container{max-width:1152px;width:1152px}}\n@media screen and (min-width:1472px){.container{max-width:1344px;width:1344px}}\n.content li+li{margin-top:.25em}\n.content blockquote:not(:last-child),.content dl:not(:last-child),.content ol:not(:last-child),.content p:not(:last-child),.content pre:not(:last-child),.content table:not(:last-child),.content ul:not(:last-child){margin-bottom:1em}\n.content h1,.content h2,.content h3,.content h4,.content h5,.content h6{color:#363636;font-weight:600;line-height:1.125}\n.content h1{font-size:2em;margin-bottom:.5em}\n.content h1:not(:first-child){margin-top:1em}\n.content h2{font-size:1.75em;margin-bottom:.5714em}\n.content h2:not(:first-child){margin-top:1.1428em}\n.content h3{font-size:1.5em;margin-bottom:.6666em}\n.content h3:not(:first-child){margin-top:1.3333em}\n.content h4{font-size:1.25em;margin-bottom:.8em}\n.content h5{font-size:1.125em;margin-bottom:.8888em}\n.content h6{font-size:1em;margin-bottom:1em}\n.content blockquote{background-color:#f5f5f5;border-left:5px solid #dbdbdb;padding:1.25em 1.5em}\n.content ol{list-style:decimal outside;margin-left:2em;margin-top:1em}\n.content ul{list-style:disc outside;margin-left:2em;margin-top:1em}\n.content ul ul{list-style-type:circle;margin-top:.5em}\n.content ul ul ul{list-style-type:square}\n.content dd{margin-left:2em}\n.content figure{margin-left:2em;margin-right:2em;text-align:center}\n.content figure:not(:first-child){margin-top:2em}\n.content figure:not(:last-child){margin-bottom:2em}\n.content figure img{display:inline-block}\n.content figure figcaption{font-style:italic}\n.content pre{-webkit-overflow-scrolling:touch;overflow-x:auto;padding:1.25em 1.5em;white-space:pre;word-wrap:normal}\n.content sub,.content sup{font-size:75%}\n.content table{width:100%}\n.content table td,.content table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}\n.content table th{color:#363636;text-align:left}\n.content table thead td,.content table thead th{border-width:0 0 2px;color:#363636}\n.content table tfoot td,.content table tfoot th{border-width:2px 0 0;color:#363636}\n.content table tbody tr:last-child td,.content table tbody tr:last-child th{border-bottom-width:0}\n.content.is-small{font-size:.75rem}\n.content.is-medium{font-size:1.25rem}\n.content.is-large{font-size:1.5rem}\n.input,.textarea{background-color:#fff;border-color:#dbdbdb;color:#363636;box-shadow:inset 0 1px 2px rgba(10,10,10,.1);max-width:100%;width:100%}\n.input::-moz-placeholder,.textarea::-moz-placeholder{color:rgba(54,54,54,.3)}\n.input::-webkit-input-placeholder,.textarea::-webkit-input-placeholder{color:rgba(54,54,54,.3)}\n.input:-moz-placeholder,.textarea:-moz-placeholder{color:rgba(54,54,54,.3)}\n.input:-ms-input-placeholder,.textarea:-ms-input-placeholder{color:rgba(54,54,54,.3)}\n.input.is-hovered,.input:hover,.textarea.is-hovered,.textarea:hover{border-color:#b5b5b5}\n.input.is-active,.input.is-focused,.input:active,.input:focus,.textarea.is-active,.textarea.is-focused,.textarea:active,.textarea:focus{border-color:#3273dc;box-shadow:0 0 0 .125em rgba(50,115,220,.25)}\n.input[disabled],.textarea[disabled]{background-color:#f5f5f5;border-color:#f5f5f5;box-shadow:none;color:#7a7a7a}\n.input[disabled]::-moz-placeholder,.textarea[disabled]::-moz-placeholder{color:rgba(122,122,122,.3)}\n.input[disabled]::-webkit-input-placeholder,.textarea[disabled]::-webkit-input-placeholder{color:rgba(122,122,122,.3)}\n.input[disabled]:-moz-placeholder,.textarea[disabled]:-moz-placeholder{color:rgba(122,122,122,.3)}\n.input[disabled]:-ms-input-placeholder,.textarea[disabled]:-ms-input-placeholder{color:rgba(122,122,122,.3)}\n.input[readonly],.textarea[readonly]{box-shadow:none}\n.input.is-white,.textarea.is-white{border-color:#fff}\n.input.is-white.is-active,.input.is-white.is-focused,.input.is-white:active,.input.is-white:focus,.textarea.is-white.is-active,.textarea.is-white.is-focused,.textarea.is-white:active,.textarea.is-white:focus{box-shadow:0 0 0 .125em rgba(255,255,255,.25)}\n.input.is-black,.textarea.is-black{border-color:#0a0a0a}\n.input.is-black.is-active,.input.is-black.is-focused,.input.is-black:active,.input.is-black:focus,.textarea.is-black.is-active,.textarea.is-black.is-focused,.textarea.is-black:active,.textarea.is-black:focus{box-shadow:0 0 0 .125em rgba(10,10,10,.25)}\n.input.is-light,.textarea.is-light{border-color:#f5f5f5}\n.input.is-light.is-active,.input.is-light.is-focused,.input.is-light:active,.input.is-light:focus,.textarea.is-light.is-active,.textarea.is-light.is-focused,.textarea.is-light:active,.textarea.is-light:focus{box-shadow:0 0 0 .125em rgba(245,245,245,.25)}\n.input.is-dark,.textarea.is-dark{border-color:#363636}\n.input.is-dark.is-active,.input.is-dark.is-focused,.input.is-dark:active,.input.is-dark:focus,.textarea.is-dark.is-active,.textarea.is-dark.is-focused,.textarea.is-dark:active,.textarea.is-dark:focus{box-shadow:0 0 0 .125em rgba(54,54,54,.25)}\n.input.is-primary,.textarea.is-primary{border-color:#00d1b2}\n.input.is-primary.is-active,.input.is-primary.is-focused,.input.is-primary:active,.input.is-primary:focus,.textarea.is-primary.is-active,.textarea.is-primary.is-focused,.textarea.is-primary:active,.textarea.is-primary:focus{box-shadow:0 0 0 .125em rgba(0,209,178,.25)}\n.input.is-link,.textarea.is-link{border-color:#3273dc}\n.input.is-link.is-active,.input.is-link.is-focused,.input.is-link:active,.input.is-link:focus,.textarea.is-link.is-active,.textarea.is-link.is-focused,.textarea.is-link:active,.textarea.is-link:focus{box-shadow:0 0 0 .125em rgba(50,115,220,.25)}\n.input.is-info,.textarea.is-info{border-color:#209cee}\n.input.is-info.is-active,.input.is-info.is-focused,.input.is-info:active,.input.is-info:focus,.textarea.is-info.is-active,.textarea.is-info.is-focused,.textarea.is-info:active,.textarea.is-info:focus{box-shadow:0 0 0 .125em rgba(32,156,238,.25)}\n.input.is-success,.textarea.is-success{border-color:#23d160}\n.input.is-success.is-active,.input.is-success.is-focused,.input.is-success:active,.input.is-success:focus,.textarea.is-success.is-active,.textarea.is-success.is-focused,.textarea.is-success:active,.textarea.is-success:focus{box-shadow:0 0 0 .125em rgba(35,209,96,.25)}\n.input.is-warning,.textarea.is-warning{border-color:#ffdd57}\n.input.is-warning.is-active,.input.is-warning.is-focused,.input.is-warning:active,.input.is-warning:focus,.textarea.is-warning.is-active,.textarea.is-warning.is-focused,.textarea.is-warning:active,.textarea.is-warning:focus{box-shadow:0 0 0 .125em rgba(255,221,87,.25)}\n.input.is-danger,.textarea.is-danger{border-color:#ff3860}\n.input.is-danger.is-active,.input.is-danger.is-focused,.input.is-danger:active,.input.is-danger:focus,.textarea.is-danger.is-active,.textarea.is-danger.is-focused,.textarea.is-danger:active,.textarea.is-danger:focus{box-shadow:0 0 0 .125em rgba(255,56,96,.25)}\n.input.is-small,.textarea.is-small{border-radius:2px;font-size:.75rem}\n.input.is-medium,.textarea.is-medium{font-size:1.25rem}\n.input.is-large,.textarea.is-large{font-size:1.5rem}\n.input.is-fullwidth,.textarea.is-fullwidth{display:block;width:100%}\n.input.is-inline,.textarea.is-inline{display:inline;width:auto}\n.input.is-rounded{border-radius:290486px;padding-left:1em;padding-right:1em}\n.input.is-static{background-color:transparent;border-color:transparent;box-shadow:none;padding-left:0;padding-right:0}\n.textarea{display:block;max-width:100%;min-width:100%;padding:.625em;resize:vertical}\n.textarea:not([rows]){max-height:600px;min-height:120px}\n.textarea[rows]{height:initial}\n.textarea.has-fixed-size{resize:none}\n.checkbox,.radio{cursor:pointer;display:inline-block;line-height:1.25;position:relative}\n.checkbox input,.radio input{cursor:pointer}\n.checkbox:hover,.radio:hover{color:#363636}\n.checkbox[disabled],.radio[disabled]{color:#7a7a7a;cursor:not-allowed}\n.radio+.radio{margin-left:.5em}\n.select{display:inline-block;max-width:100%;position:relative;vertical-align:top}\n.select:not(.is-multiple){height:2.25em}\n.select:not(.is-multiple):not(.is-loading)::after{border-color:#3273dc;right:1.125em;z-index:4}\n.select.is-rounded select{border-radius:290486px;padding-left:1em}\n.select select{background-color:#fff;border-color:#dbdbdb;color:#363636;cursor:pointer;display:block;font-size:1em;max-width:100%;outline:0}\n.select select::-moz-placeholder{color:rgba(54,54,54,.3)}\n.select select::-webkit-input-placeholder{color:rgba(54,54,54,.3)}\n.select select:-moz-placeholder{color:rgba(54,54,54,.3)}\n.select select:-ms-input-placeholder{color:rgba(54,54,54,.3)}\n.select select.is-hovered,.select select:hover{border-color:#b5b5b5}\n.select select.is-active,.select select.is-focused,.select select:active,.select select:focus{border-color:#3273dc;box-shadow:0 0 0 .125em rgba(50,115,220,.25)}\n.select select[disabled]{background-color:#f5f5f5;border-color:#f5f5f5;box-shadow:none;color:#7a7a7a}\n.select select[disabled]::-moz-placeholder{color:rgba(122,122,122,.3)}\n.select select[disabled]::-webkit-input-placeholder{color:rgba(122,122,122,.3)}\n.select select[disabled]:-moz-placeholder{color:rgba(122,122,122,.3)}\n.select select[disabled]:-ms-input-placeholder{color:rgba(122,122,122,.3)}\n.select select::-ms-expand{display:none}\n.select select[disabled]:hover{border-color:#f5f5f5}\n.select select:not([multiple]){padding-right:2.5em}\n.select select[multiple]{height:initial;padding:0}\n.select select[multiple] option{padding:.5em 1em}\n.select:not(.is-multiple):not(.is-loading):hover::after{border-color:#363636}\n.select.is-white:not(:hover)::after{border-color:#fff}\n.select.is-white select{border-color:#fff}\n.select.is-white select.is-hovered,.select.is-white select:hover{border-color:#f2f2f2}\n.select.is-white select.is-active,.select.is-white select.is-focused,.select.is-white select:active,.select.is-white select:focus{box-shadow:0 0 0 .125em rgba(255,255,255,.25)}\n.select.is-black:not(:hover)::after{border-color:#0a0a0a}\n.select.is-black select{border-color:#0a0a0a}\n.select.is-black select.is-hovered,.select.is-black select:hover{border-color:#000}\n.select.is-black select.is-active,.select.is-black select.is-focused,.select.is-black select:active,.select.is-black select:focus{box-shadow:0 0 0 .125em rgba(10,10,10,.25)}\n.select.is-light:not(:hover)::after{border-color:#f5f5f5}\n.select.is-light select{border-color:#f5f5f5}\n.select.is-light select.is-hovered,.select.is-light select:hover{border-color:#e8e8e8}\n.select.is-light select.is-active,.select.is-light select.is-focused,.select.is-light select:active,.select.is-light select:focus{box-shadow:0 0 0 .125em rgba(245,245,245,.25)}\n.select.is-dark:not(:hover)::after{border-color:#363636}\n.select.is-dark select{border-color:#363636}\n.select.is-dark select.is-hovered,.select.is-dark select:hover{border-color:#292929}\n.select.is-dark select.is-active,.select.is-dark select.is-focused,.select.is-dark select:active,.select.is-dark select:focus{box-shadow:0 0 0 .125em rgba(54,54,54,.25)}\n.select.is-primary:not(:hover)::after{border-color:#00d1b2}\n.select.is-primary select{border-color:#00d1b2}\n.select.is-primary select.is-hovered,.select.is-primary select:hover{border-color:#00b89c}\n.select.is-primary select.is-active,.select.is-primary select.is-focused,.select.is-primary select:active,.select.is-primary select:focus{box-shadow:0 0 0 .125em rgba(0,209,178,.25)}\n.select.is-link:not(:hover)::after{border-color:#3273dc}\n.select.is-link select{border-color:#3273dc}\n.select.is-link select.is-hovered,.select.is-link select:hover{border-color:#2366d1}\n.select.is-link select.is-active,.select.is-link select.is-focused,.select.is-link select:active,.select.is-link select:focus{box-shadow:0 0 0 .125em rgba(50,115,220,.25)}\n.select.is-info:not(:hover)::after{border-color:#209cee}\n.select.is-info select{border-color:#209cee}\n.select.is-info select.is-hovered,.select.is-info select:hover{border-color:#118fe4}\n.select.is-info select.is-active,.select.is-info select.is-focused,.select.is-info select:active,.select.is-info select:focus{box-shadow:0 0 0 .125em rgba(32,156,238,.25)}\n.select.is-success:not(:hover)::after{border-color:#23d160}\n.select.is-success select{border-color:#23d160}\n.select.is-success select.is-hovered,.select.is-success select:hover{border-color:#20bc56}\n.select.is-success select.is-active,.select.is-success select.is-focused,.select.is-success select:active,.select.is-success select:focus{box-shadow:0 0 0 .125em rgba(35,209,96,.25)}\n.select.is-warning:not(:hover)::after{border-color:#ffdd57}\n.select.is-warning select{border-color:#ffdd57}\n.select.is-warning select.is-hovered,.select.is-warning select:hover{border-color:#ffd83d}\n.select.is-warning select.is-active,.select.is-warning select.is-focused,.select.is-warning select:active,.select.is-warning select:focus{box-shadow:0 0 0 .125em rgba(255,221,87,.25)}\n.select.is-danger:not(:hover)::after{border-color:#ff3860}\n.select.is-danger select{border-color:#ff3860}\n.select.is-danger select.is-hovered,.select.is-danger select:hover{border-color:#ff1f4b}\n.select.is-danger select.is-active,.select.is-danger select.is-focused,.select.is-danger select:active,.select.is-danger select:focus{box-shadow:0 0 0 .125em rgba(255,56,96,.25)}\n.select.is-small{border-radius:2px;font-size:.75rem}\n.select.is-medium{font-size:1.25rem}\n.select.is-large{font-size:1.5rem}\n.select.is-disabled::after{border-color:#7a7a7a}\n.select.is-fullwidth{width:100%}\n.select.is-fullwidth select{width:100%}\n.select.is-loading::after{margin-top:0;position:absolute;right:.625em;top:.625em;-webkit-transform:none;transform:none}\n.select.is-loading.is-small:after{font-size:.75rem}\n.select.is-loading.is-medium:after{font-size:1.25rem}\n.select.is-loading.is-large:after{font-size:1.5rem}\n.file{align-items:stretch;display:flex;justify-content:flex-start;position:relative}\n.file.is-white .file-cta{background-color:#fff;border-color:transparent;color:#0a0a0a}\n.file.is-white.is-hovered .file-cta,.file.is-white:hover .file-cta{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}\n.file.is-white.is-focused .file-cta,.file.is-white:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(255,255,255,.25);color:#0a0a0a}\n.file.is-white.is-active .file-cta,.file.is-white:active .file-cta{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}\n.file.is-black .file-cta{background-color:#0a0a0a;border-color:transparent;color:#fff}\n.file.is-black.is-hovered .file-cta,.file.is-black:hover .file-cta{background-color:#040404;border-color:transparent;color:#fff}\n.file.is-black.is-focused .file-cta,.file.is-black:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(10,10,10,.25);color:#fff}\n.file.is-black.is-active .file-cta,.file.is-black:active .file-cta{background-color:#000;border-color:transparent;color:#fff}\n.file.is-light .file-cta{background-color:#f5f5f5;border-color:transparent;color:#363636}\n.file.is-light.is-hovered .file-cta,.file.is-light:hover .file-cta{background-color:#eee;border-color:transparent;color:#363636}\n.file.is-light.is-focused .file-cta,.file.is-light:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(245,245,245,.25);color:#363636}\n.file.is-light.is-active .file-cta,.file.is-light:active .file-cta{background-color:#e8e8e8;border-color:transparent;color:#363636}\n.file.is-dark .file-cta{background-color:#363636;border-color:transparent;color:#f5f5f5}\n.file.is-dark.is-hovered .file-cta,.file.is-dark:hover .file-cta{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}\n.file.is-dark.is-focused .file-cta,.file.is-dark:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(54,54,54,.25);color:#f5f5f5}\n.file.is-dark.is-active .file-cta,.file.is-dark:active .file-cta{background-color:#292929;border-color:transparent;color:#f5f5f5}\n.file.is-primary .file-cta{background-color:#00d1b2;border-color:transparent;color:#fff}\n.file.is-primary.is-hovered .file-cta,.file.is-primary:hover .file-cta{background-color:#00c4a7;border-color:transparent;color:#fff}\n.file.is-primary.is-focused .file-cta,.file.is-primary:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(0,209,178,.25);color:#fff}\n.file.is-primary.is-active .file-cta,.file.is-primary:active .file-cta{background-color:#00b89c;border-color:transparent;color:#fff}\n.file.is-link .file-cta{background-color:#3273dc;border-color:transparent;color:#fff}\n.file.is-link.is-hovered .file-cta,.file.is-link:hover .file-cta{background-color:#276cda;border-color:transparent;color:#fff}\n.file.is-link.is-focused .file-cta,.file.is-link:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(50,115,220,.25);color:#fff}\n.file.is-link.is-active .file-cta,.file.is-link:active .file-cta{background-color:#2366d1;border-color:transparent;color:#fff}\n.file.is-info .file-cta{background-color:#209cee;border-color:transparent;color:#fff}\n.file.is-info.is-hovered .file-cta,.file.is-info:hover .file-cta{background-color:#1496ed;border-color:transparent;color:#fff}\n.file.is-info.is-focused .file-cta,.file.is-info:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(32,156,238,.25);color:#fff}\n.file.is-info.is-active .file-cta,.file.is-info:active .file-cta{background-color:#118fe4;border-color:transparent;color:#fff}\n.file.is-success .file-cta{background-color:#23d160;border-color:transparent;color:#fff}\n.file.is-success.is-hovered .file-cta,.file.is-success:hover .file-cta{background-color:#22c65b;border-color:transparent;color:#fff}\n.file.is-success.is-focused .file-cta,.file.is-success:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(35,209,96,.25);color:#fff}\n.file.is-success.is-active .file-cta,.file.is-success:active .file-cta{background-color:#20bc56;border-color:transparent;color:#fff}\n.file.is-warning .file-cta{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}\n.file.is-warning.is-hovered .file-cta,.file.is-warning:hover .file-cta{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}\n.file.is-warning.is-focused .file-cta,.file.is-warning:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(255,221,87,.25);color:rgba(0,0,0,.7)}\n.file.is-warning.is-active .file-cta,.file.is-warning:active .file-cta{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}\n.file.is-danger .file-cta{background-color:#ff3860;border-color:transparent;color:#fff}\n.file.is-danger.is-hovered .file-cta,.file.is-danger:hover .file-cta{background-color:#ff2b56;border-color:transparent;color:#fff}\n.file.is-danger.is-focused .file-cta,.file.is-danger:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(255,56,96,.25);color:#fff}\n.file.is-danger.is-active .file-cta,.file.is-danger:active .file-cta{background-color:#ff1f4b;border-color:transparent;color:#fff}\n.file.is-small{font-size:.75rem}\n.file.is-medium{font-size:1.25rem}\n.file.is-medium .file-icon .fa{font-size:21px}\n.file.is-large{font-size:1.5rem}\n.file.is-large .file-icon .fa{font-size:28px}\n.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}\n.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}\n.file.has-name.is-empty .file-cta{border-radius:4px}\n.file.has-name.is-empty .file-name{display:none}\n.file.is-boxed .file-label{flex-direction:column}\n.file.is-boxed .file-cta{flex-direction:column;height:auto;padding:1em 3em}\n.file.is-boxed .file-name{border-width:0 1px 1px}\n.file.is-boxed .file-icon{height:1.5em;width:1.5em}\n.file.is-boxed .file-icon .fa{font-size:21px}\n.file.is-boxed.is-small .file-icon .fa{font-size:14px}\n.file.is-boxed.is-medium .file-icon .fa{font-size:28px}\n.file.is-boxed.is-large .file-icon .fa{font-size:35px}\n.file.is-boxed.has-name .file-cta{border-radius:4px 4px 0 0}\n.file.is-boxed.has-name .file-name{border-radius:0 0 4px 4px;border-width:0 1px 1px}\n.file.is-centered{justify-content:center}\n.file.is-fullwidth .file-label{width:100%}\n.file.is-fullwidth .file-name{flex-grow:1;max-width:none}\n.file.is-right{justify-content:flex-end}\n.file.is-right .file-cta{border-radius:0 4px 4px 0}\n.file.is-right .file-name{border-radius:4px 0 0 4px;border-width:1px 0 1px 1px;order:-1}\n.file-label{align-items:stretch;display:flex;cursor:pointer;justify-content:flex-start;overflow:hidden;position:relative}\n.file-label:hover .file-cta{background-color:#eee;color:#363636}\n.file-label:hover .file-name{border-color:#d5d5d5}\n.file-label:active .file-cta{background-color:#e8e8e8;color:#363636}\n.file-label:active .file-name{border-color:#cfcfcf}\n.file-input{height:.01em;left:0;outline:0;position:absolute;top:0;width:.01em}\n.file-cta,.file-name{border-color:#dbdbdb;border-radius:4px;font-size:1em;padding-left:1em;padding-right:1em;white-space:nowrap}\n.file-cta{background-color:#f5f5f5;color:#4a4a4a}\n.file-name{border-color:#dbdbdb;border-style:solid;border-width:1px 1px 1px 0;display:block;max-width:16em;overflow:hidden;text-align:left;text-overflow:ellipsis}\n.file-icon{align-items:center;display:flex;height:1em;justify-content:center;margin-right:.5em;width:1em}\n.file-icon .fa{font-size:14px}\n.label{color:#363636;display:block;font-size:1rem;font-weight:700}\n.label:not(:last-child){margin-bottom:.5em}\n.label.is-small{font-size:.75rem}\n.label.is-medium{font-size:1.25rem}\n.label.is-large{font-size:1.5rem}\n.help{display:block;font-size:.75rem;margin-top:.25rem}\n.help.is-white{color:#fff}\n.help.is-black{color:#0a0a0a}\n.help.is-light{color:#f5f5f5}\n.help.is-dark{color:#363636}\n.help.is-primary{color:#00d1b2}\n.help.is-link{color:#3273dc}\n.help.is-info{color:#209cee}\n.help.is-success{color:#23d160}\n.help.is-warning{color:#ffdd57}\n.help.is-danger{color:#ff3860}\n.field:not(:last-child){margin-bottom:.75rem}\n.field.has-addons{display:flex;justify-content:flex-start}\n.field.has-addons .control:not(:last-child){margin-right:-1px}\n.field.has-addons .control:not(:first-child):not(:last-child) .button,.field.has-addons .control:not(:first-child):not(:last-child) .input,.field.has-addons .control:not(:first-child):not(:last-child) .select select{border-radius:0}\n.field.has-addons .control:first-child .button,.field.has-addons .control:first-child .input,.field.has-addons .control:first-child .select select{border-bottom-right-radius:0;border-top-right-radius:0}\n.field.has-addons .control:last-child .button,.field.has-addons .control:last-child .input,.field.has-addons .control:last-child .select select{border-bottom-left-radius:0;border-top-left-radius:0}\n.field.has-addons .control .button.is-hovered,.field.has-addons .control .button:hover,.field.has-addons .control .input.is-hovered,.field.has-addons .control .input:hover,.field.has-addons .control .select select.is-hovered,.field.has-addons .control .select select:hover{z-index:2}\n.field.has-addons .control .button.is-active,.field.has-addons .control .button.is-focused,.field.has-addons .control .button:active,.field.has-addons .control .button:focus,.field.has-addons .control .input.is-active,.field.has-addons .control .input.is-focused,.field.has-addons .control .input:active,.field.has-addons .control .input:focus,.field.has-addons .control .select select.is-active,.field.has-addons .control .select select.is-focused,.field.has-addons .control .select select:active,.field.has-addons .control .select select:focus{z-index:3}\n.field.has-addons .control .button.is-active:hover,.field.has-addons .control .button.is-focused:hover,.field.has-addons .control .button:active:hover,.field.has-addons .control .button:focus:hover,.field.has-addons .control .input.is-active:hover,.field.has-addons .control .input.is-focused:hover,.field.has-addons .control .input:active:hover,.field.has-addons .control .input:focus:hover,.field.has-addons .control .select select.is-active:hover,.field.has-addons .control .select select.is-focused:hover,.field.has-addons .control .select select:active:hover,.field.has-addons .control .select select:focus:hover{z-index:4}\n.field.has-addons .control.is-expanded{flex-grow:1}\n.field.has-addons.has-addons-centered{justify-content:center}\n.field.has-addons.has-addons-right{justify-content:flex-end}\n.field.has-addons.has-addons-fullwidth .control{flex-grow:1;flex-shrink:0}\n.field.is-grouped{display:flex;justify-content:flex-start}\n.field.is-grouped>.control{flex-shrink:0}\n.field.is-grouped>.control:not(:last-child){margin-bottom:0;margin-right:.75rem}\n.field.is-grouped>.control.is-expanded{flex-grow:1;flex-shrink:1}\n.field.is-grouped.is-grouped-centered{justify-content:center}\n.field.is-grouped.is-grouped-right{justify-content:flex-end}\n.field.is-grouped.is-grouped-multiline{flex-wrap:wrap}\n.field.is-grouped.is-grouped-multiline>.control:last-child,.field.is-grouped.is-grouped-multiline>.control:not(:last-child){margin-bottom:.75rem}\n.field.is-grouped.is-grouped-multiline:last-child{margin-bottom:-.75rem}\n.field.is-grouped.is-grouped-multiline:not(:last-child){margin-bottom:0}\n@media screen and (min-width:769px), print{.field.is-horizontal{display:flex}}\n.field-label .label{font-size:inherit}\n@media screen and (max-width:768px){.field-label{margin-bottom:.5rem}}\n@media screen and (min-width:769px), print{.field-label{flex-basis:0;flex-grow:1;flex-shrink:0;margin-right:1.5rem;text-align:right}.field-label.is-small{font-size:.75rem;padding-top:.375em}.field-label.is-normal{padding-top:.375em}.field-label.is-medium{font-size:1.25rem;padding-top:.375em}.field-label.is-large{font-size:1.5rem;padding-top:.375em}}\n.field-body .field .field{margin-bottom:0}\n@media screen and (min-width:769px), print{.field-body{display:flex;flex-basis:0;flex-grow:5;flex-shrink:1}.field-body .field{margin-bottom:0}.field-body>.field{flex-shrink:1}.field-body>.field:not(.is-narrow){flex-grow:1}.field-body>.field:not(:last-child){margin-right:.75rem}}\n.control{font-size:1rem;position:relative;text-align:left}\n.control.has-icon .icon{color:#dbdbdb;height:2.25em;pointer-events:none;position:absolute;top:0;width:2.25em;z-index:4}\n.control.has-icon .input:focus+.icon{color:#7a7a7a}\n.control.has-icon .input.is-small+.icon{font-size:.75rem}\n.control.has-icon .input.is-medium+.icon{font-size:1.25rem}\n.control.has-icon .input.is-large+.icon{font-size:1.5rem}\n.control.has-icon:not(.has-icon-right) .icon{left:0}\n.control.has-icon:not(.has-icon-right) .input{padding-left:2.25em}\n.control.has-icon.has-icon-right .icon{right:0}\n.control.has-icon.has-icon-right .input{padding-right:2.25em}\n.control.has-icons-left .input:focus~.icon,.control.has-icons-left .select:focus~.icon,.control.has-icons-right .input:focus~.icon,.control.has-icons-right .select:focus~.icon{color:#7a7a7a}\n.control.has-icons-left .input.is-small~.icon,.control.has-icons-left .select.is-small~.icon,.control.has-icons-right .input.is-small~.icon,.control.has-icons-right .select.is-small~.icon{font-size:.75rem}\n.control.has-icons-left .input.is-medium~.icon,.control.has-icons-left .select.is-medium~.icon,.control.has-icons-right .input.is-medium~.icon,.control.has-icons-right .select.is-medium~.icon{font-size:1.25rem}\n.control.has-icons-left .input.is-large~.icon,.control.has-icons-left .select.is-large~.icon,.control.has-icons-right .input.is-large~.icon,.control.has-icons-right .select.is-large~.icon{font-size:1.5rem}\n.control.has-icons-left .icon,.control.has-icons-right .icon{color:#dbdbdb;height:2.25em;pointer-events:none;position:absolute;top:0;width:2.25em;z-index:4}\n.control.has-icons-left .input,.control.has-icons-left .select select{padding-left:2.25em}\n.control.has-icons-left .icon.is-left{left:0}\n.control.has-icons-right .input,.control.has-icons-right .select select{padding-right:2.25em}\n.control.has-icons-right .icon.is-right{right:0}\n.control.is-loading::after{position:absolute!important;right:.625em;top:.625em;z-index:4}\n.control.is-loading.is-small:after{font-size:.75rem}\n.control.is-loading.is-medium:after{font-size:1.25rem}\n.control.is-loading.is-large:after{font-size:1.5rem}\n.icon{align-items:center;display:inline-flex;justify-content:center;height:1.5rem;width:1.5rem}\n.icon.is-small{height:1rem;width:1rem}\n.icon.is-medium{height:2rem;width:2rem}\n.icon.is-large{height:3rem;width:3rem}\n.image{display:block;position:relative}\n.image img{display:block;height:auto;width:100%}\n.image img.is-rounded{border-radius:290486px}\n.image.is-16by9 img,.image.is-1by1 img,.image.is-1by2 img,.image.is-1by3 img,.image.is-2by1 img,.image.is-2by3 img,.image.is-3by1 img,.image.is-3by2 img,.image.is-3by4 img,.image.is-3by5 img,.image.is-4by3 img,.image.is-4by5 img,.image.is-5by3 img,.image.is-5by4 img,.image.is-9by16 img,.image.is-square img{height:100%;width:100%}\n.image.is-1by1,.image.is-square{padding-top:100%}\n.image.is-5by4{padding-top:80%}\n.image.is-4by3{padding-top:75%}\n.image.is-3by2{padding-top:66.6666%}\n.image.is-5by3{padding-top:60%}\n.image.is-16by9{padding-top:56.25%}\n.image.is-2by1{padding-top:50%}\n.image.is-3by1{padding-top:33.3333%}\n.image.is-4by5{padding-top:125%}\n.image.is-3by4{padding-top:133.3333%}\n.image.is-2by3{padding-top:150%}\n.image.is-3by5{padding-top:166.6666%}\n.image.is-9by16{padding-top:177.7777%}\n.image.is-1by2{padding-top:200%}\n.image.is-1by3{padding-top:300%}\n.image.is-16x16{height:16px;width:16px}\n.image.is-24x24{height:24px;width:24px}\n.image.is-32x32{height:32px;width:32px}\n.image.is-48x48{height:48px;width:48px}\n.image.is-64x64{height:64px;width:64px}\n.image.is-96x96{height:96px;width:96px}\n.image.is-128x128{height:128px;width:128px}\n.notification{background-color:#f5f5f5;border-radius:4px;padding:1.25rem 2.5rem 1.25rem 1.5rem;position:relative}\n.notification a:not(.button){color:currentColor;text-decoration:underline}\n.notification strong{color:currentColor}\n.notification code,.notification pre{background:#fff}\n.notification pre code{background:0 0}\n.notification>.delete{position:absolute;right:.5rem;top:.5rem}\n.notification .content,.notification .subtitle,.notification .title{color:currentColor}\n.notification.is-white{background-color:#fff;color:#0a0a0a}\n.notification.is-black{background-color:#0a0a0a;color:#fff}\n.notification.is-light{background-color:#f5f5f5;color:#363636}\n.notification.is-dark{background-color:#363636;color:#f5f5f5}\n.notification.is-primary{background-color:#00d1b2;color:#fff}\n.notification.is-link{background-color:#3273dc;color:#fff}\n.notification.is-info{background-color:#209cee;color:#fff}\n.notification.is-success{background-color:#23d160;color:#fff}\n.notification.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}\n.notification.is-danger{background-color:#ff3860;color:#fff}\n.progress{-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:290486px;display:block;height:1rem;overflow:hidden;padding:0;width:100%}\n.progress::-webkit-progress-bar{background-color:#dbdbdb}\n.progress::-webkit-progress-value{background-color:#4a4a4a}\n.progress::-moz-progress-bar{background-color:#4a4a4a}\n.progress::-ms-fill{background-color:#4a4a4a;border:none}\n.progress.is-white::-webkit-progress-value{background-color:#fff}\n.progress.is-white::-moz-progress-bar{background-color:#fff}\n.progress.is-white::-ms-fill{background-color:#fff}\n.progress.is-black::-webkit-progress-value{background-color:#0a0a0a}\n.progress.is-black::-moz-progress-bar{background-color:#0a0a0a}\n.progress.is-black::-ms-fill{background-color:#0a0a0a}\n.progress.is-light::-webkit-progress-value{background-color:#f5f5f5}\n.progress.is-light::-moz-progress-bar{background-color:#f5f5f5}\n.progress.is-light::-ms-fill{background-color:#f5f5f5}\n.progress.is-dark::-webkit-progress-value{background-color:#363636}\n.progress.is-dark::-moz-progress-bar{background-color:#363636}\n.progress.is-dark::-ms-fill{background-color:#363636}\n.progress.is-primary::-webkit-progress-value{background-color:#00d1b2}\n.progress.is-primary::-moz-progress-bar{background-color:#00d1b2}\n.progress.is-primary::-ms-fill{background-color:#00d1b2}\n.progress.is-link::-webkit-progress-value{background-color:#3273dc}\n.progress.is-link::-moz-progress-bar{background-color:#3273dc}\n.progress.is-link::-ms-fill{background-color:#3273dc}\n.progress.is-info::-webkit-progress-value{background-color:#209cee}\n.progress.is-info::-moz-progress-bar{background-color:#209cee}\n.progress.is-info::-ms-fill{background-color:#209cee}\n.progress.is-success::-webkit-progress-value{background-color:#23d160}\n.progress.is-success::-moz-progress-bar{background-color:#23d160}\n.progress.is-success::-ms-fill{background-color:#23d160}\n.progress.is-warning::-webkit-progress-value{background-color:#ffdd57}\n.progress.is-warning::-moz-progress-bar{background-color:#ffdd57}\n.progress.is-warning::-ms-fill{background-color:#ffdd57}\n.progress.is-danger::-webkit-progress-value{background-color:#ff3860}\n.progress.is-danger::-moz-progress-bar{background-color:#ff3860}\n.progress.is-danger::-ms-fill{background-color:#ff3860}\n.progress.is-small{height:.75rem}\n.progress.is-medium{height:1.25rem}\n.progress.is-large{height:1.5rem}\n.table{background-color:#fff;color:#363636}\n.table td,.table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}\n.table td.is-white,.table th.is-white{background-color:#fff;border-color:#fff;color:#0a0a0a}\n.table td.is-black,.table th.is-black{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}\n.table td.is-light,.table th.is-light{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}\n.table td.is-dark,.table th.is-dark{background-color:#363636;border-color:#363636;color:#f5f5f5}\n.table td.is-primary,.table th.is-primary{background-color:#00d1b2;border-color:#00d1b2;color:#fff}\n.table td.is-link,.table th.is-link{background-color:#3273dc;border-color:#3273dc;color:#fff}\n.table td.is-info,.table th.is-info{background-color:#209cee;border-color:#209cee;color:#fff}\n.table td.is-success,.table th.is-success{background-color:#23d160;border-color:#23d160;color:#fff}\n.table td.is-warning,.table th.is-warning{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}\n.table td.is-danger,.table th.is-danger{background-color:#ff3860;border-color:#ff3860;color:#fff}\n.table td.is-narrow,.table th.is-narrow{white-space:nowrap;width:1%}\n.table td.is-selected,.table th.is-selected{background-color:#00d1b2;color:#fff}\n.table td.is-selected a,.table td.is-selected strong,.table th.is-selected a,.table th.is-selected strong{color:currentColor}\n.table th{color:#363636;text-align:left}\n.table tr.is-selected{background-color:#00d1b2;color:#fff}\n.table tr.is-selected a,.table tr.is-selected strong{color:currentColor}\n.table tr.is-selected td,.table tr.is-selected th{border-color:#fff;color:currentColor}\n.table thead td,.table thead th{border-width:0 0 2px;color:#363636}\n.table tfoot td,.table tfoot th{border-width:2px 0 0;color:#363636}\n.table tbody tr:last-child td,.table tbody tr:last-child th{border-bottom-width:0}\n.table.is-bordered td,.table.is-bordered th{border-width:1px}\n.table.is-bordered tr:last-child td,.table.is-bordered tr:last-child th{border-bottom-width:1px}\n.table.is-fullwidth{width:100%}\n.table.is-hoverable tbody tr:not(.is-selected):hover{background-color:#fafafa}\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover{background-color:#f5f5f5}\n.table.is-narrow td,.table.is-narrow th{padding:.25em .5em}\n.table.is-striped tbody tr:not(.is-selected):nth-child(even){background-color:#fafafa}\n.table-container{-webkit-overflow-scrolling:touch;overflow:auto;overflow-y:hidden;max-width:100%}\n.tags{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}\n.tags .tag{margin-bottom:.5rem}\n.tags .tag:not(:last-child){margin-right:.5rem}\n.tags:last-child{margin-bottom:-.5rem}\n.tags:not(:last-child){margin-bottom:1rem}\n.tags.has-addons .tag{margin-right:0}\n.tags.has-addons .tag:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}\n.tags.has-addons .tag:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}\n.tags.is-centered{justify-content:center}\n.tags.is-centered .tag{margin-right:.25rem;margin-left:.25rem}\n.tags.is-right{justify-content:flex-end}\n.tags.is-right .tag:not(:first-child){margin-left:.5rem}\n.tags.is-right .tag:not(:last-child){margin-right:0}\n.tag:not(body){align-items:center;background-color:#f5f5f5;border-radius:4px;color:#4a4a4a;display:inline-flex;font-size:.75rem;height:2em;justify-content:center;line-height:1.5;padding-left:.75em;padding-right:.75em;white-space:nowrap}\n.tag:not(body) .delete{margin-left:.25rem;margin-right:-.375rem}\n.tag:not(body).is-white{background-color:#fff;color:#0a0a0a}\n.tag:not(body).is-black{background-color:#0a0a0a;color:#fff}\n.tag:not(body).is-light{background-color:#f5f5f5;color:#363636}\n.tag:not(body).is-dark{background-color:#363636;color:#f5f5f5}\n.tag:not(body).is-primary{background-color:#00d1b2;color:#fff}\n.tag:not(body).is-link{background-color:#3273dc;color:#fff}\n.tag:not(body).is-info{background-color:#209cee;color:#fff}\n.tag:not(body).is-success{background-color:#23d160;color:#fff}\n.tag:not(body).is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}\n.tag:not(body).is-danger{background-color:#ff3860;color:#fff}\n.tag:not(body).is-medium{font-size:1rem}\n.tag:not(body).is-large{font-size:1.25rem}\n.tag:not(body) .icon:first-child:not(:last-child){margin-left:-.375em;margin-right:.1875em}\n.tag:not(body) .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:-.375em}\n.tag:not(body) .icon:first-child:last-child{margin-left:-.375em;margin-right:-.375em}\n.tag:not(body).is-delete{margin-left:1px;padding:0;position:relative;width:2em}\n.tag:not(body).is-delete::after,.tag:not(body).is-delete::before{background-color:currentColor;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}\n.tag:not(body).is-delete::before{height:1px;width:50%}\n.tag:not(body).is-delete::after{height:50%;width:1px}\n.tag:not(body).is-delete:focus,.tag:not(body).is-delete:hover{background-color:#e8e8e8}\n.tag:not(body).is-delete:active{background-color:#dbdbdb}\n.tag:not(body).is-rounded{border-radius:290486px}\na.tag:hover{text-decoration:underline}\n.subtitle,.title{word-break:break-word}\n.subtitle em,.subtitle span,.title em,.title span{font-weight:inherit}\n.subtitle sub,.title sub{font-size:.75em}\n.subtitle sup,.title sup{font-size:.75em}\n.subtitle .tag,.title .tag{vertical-align:middle}\n.title{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}\n.title strong{color:inherit;font-weight:inherit}\n.title+.highlight{margin-top:-.75rem}\n.title:not(.is-spaced)+.subtitle{margin-top:-1.25rem}\n.title.is-1{font-size:3rem}\n.title.is-2{font-size:2.5rem}\n.title.is-3{font-size:2rem}\n.title.is-4{font-size:1.5rem}\n.title.is-5{font-size:1.25rem}\n.title.is-6{font-size:1rem}\n.title.is-7{font-size:.75rem}\n.subtitle{color:#4a4a4a;font-size:1.25rem;font-weight:400;line-height:1.25}\n.subtitle strong{color:#363636;font-weight:600}\n.subtitle:not(.is-spaced)+.title{margin-top:-1.25rem}\n.subtitle.is-1{font-size:3rem}\n.subtitle.is-2{font-size:2.5rem}\n.subtitle.is-3{font-size:2rem}\n.subtitle.is-4{font-size:1.5rem}\n.subtitle.is-5{font-size:1.25rem}\n.subtitle.is-6{font-size:1rem}\n.subtitle.is-7{font-size:.75rem}\n.heading{display:block;font-size:11px;letter-spacing:1px;margin-bottom:5px;text-transform:uppercase}\n.highlight{font-weight:400;max-width:100%;overflow:hidden;padding:0}\n.highlight pre{overflow:auto;max-width:100%}\n.number{align-items:center;background-color:#f5f5f5;border-radius:290486px;display:inline-flex;font-size:1.25rem;height:2em;justify-content:center;margin-right:1.5rem;min-width:2.5em;padding:.25rem .5rem;text-align:center;vertical-align:top}\n.breadcrumb{font-size:1rem;white-space:nowrap}\n.breadcrumb a{align-items:center;color:#3273dc;display:flex;justify-content:center;padding:0 .75em}\n.breadcrumb a:hover{color:#363636}\n.breadcrumb li{align-items:center;display:flex}\n.breadcrumb li:first-child a{padding-left:0}\n.breadcrumb li.is-active a{color:#363636;cursor:default;pointer-events:none}\n.breadcrumb li+li::before{color:#b5b5b5;content:\"\\0002f\"}\n.breadcrumb ol,.breadcrumb ul{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start}\n.breadcrumb .icon:first-child{margin-right:.5em}\n.breadcrumb .icon:last-child{margin-left:.5em}\n.breadcrumb.is-centered ol,.breadcrumb.is-centered ul{justify-content:center}\n.breadcrumb.is-right ol,.breadcrumb.is-right ul{justify-content:flex-end}\n.breadcrumb.is-small{font-size:.75rem}\n.breadcrumb.is-medium{font-size:1.25rem}\n.breadcrumb.is-large{font-size:1.5rem}\n.breadcrumb.has-arrow-separator li+li::before{content:\"\\02192\"}\n.breadcrumb.has-bullet-separator li+li::before{content:\"\\02022\"}\n.breadcrumb.has-dot-separator li+li::before{content:\"\\000b7\"}\n.breadcrumb.has-succeeds-separator li+li::before{content:\"\\0227B\"}\n.card{background-color:#fff;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);color:#4a4a4a;max-width:100%;position:relative}\n.card-header{background-color:none;align-items:stretch;box-shadow:0 1px 2px rgba(10,10,10,.1);display:flex}\n.card-header-title{align-items:center;color:#363636;display:flex;flex-grow:1;font-weight:700;padding:.75rem}\n.card-header-title.is-centered{justify-content:center}\n.card-header-icon{align-items:center;cursor:pointer;display:flex;justify-content:center;padding:.75rem}\n.card-image{display:block;position:relative}\n.card-content{background-color:none;padding:1.5rem}\n.card-footer{background-color:none;border-top:1px solid #dbdbdb;align-items:stretch;display:flex}\n.card-footer-item{align-items:center;display:flex;flex-basis:0;flex-grow:1;flex-shrink:0;justify-content:center;padding:.75rem}\n.card-footer-item:not(:last-child){border-right:1px solid #dbdbdb}\n.card .media:not(:last-child){margin-bottom:.75rem}\n.dropdown{display:inline-flex;position:relative;vertical-align:top}\n.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{display:block}\n.dropdown.is-right .dropdown-menu{left:auto;right:0}\n.dropdown.is-up .dropdown-menu{bottom:100%;padding-bottom:4px;padding-top:initial;top:auto}\n.dropdown-menu{display:none;left:0;min-width:12rem;padding-top:4px;position:absolute;top:100%;z-index:20}\n.dropdown-content{background-color:#fff;border-radius:4px;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);padding-bottom:.5rem;padding-top:.5rem}\n.dropdown-item{color:#4a4a4a;display:block;font-size:.875rem;line-height:1.5;padding:.375rem 1rem;position:relative}\na.dropdown-item{padding-right:3rem;white-space:nowrap}\na.dropdown-item:hover{background-color:#f5f5f5;color:#0a0a0a}\na.dropdown-item.is-active{background-color:#3273dc;color:#fff}\n.dropdown-divider{background-color:#dbdbdb;border:none;display:block;height:1px;margin:.5rem 0}\n.level{align-items:center;justify-content:space-between}\n.level code{border-radius:4px}\n.level img{display:inline-block;vertical-align:top}\n.level.is-mobile{display:flex}\n.level.is-mobile .level-left,.level.is-mobile .level-right{display:flex}\n.level.is-mobile .level-left+.level-right{margin-top:0}\n.level.is-mobile .level-item{margin-right:.75rem}\n.level.is-mobile .level-item:not(:last-child){margin-bottom:0}\n.level.is-mobile .level-item:not(.is-narrow){flex-grow:1}\n@media screen and (min-width:769px), print{.level{display:flex}.level>.level-item:not(.is-narrow){flex-grow:1}}\n.level-item{align-items:center;display:flex;flex-basis:auto;flex-grow:0;flex-shrink:0;justify-content:center}\n.level-item .subtitle,.level-item .title{margin-bottom:0}\n@media screen and (max-width:768px){.level-item:not(:last-child){margin-bottom:.75rem}}\n.level-left,.level-right{flex-basis:auto;flex-grow:0;flex-shrink:0}\n.level-left .level-item.is-flexible,.level-right .level-item.is-flexible{flex-grow:1}\n@media screen and (min-width:769px), print{.level-left .level-item:not(:last-child),.level-right .level-item:not(:last-child){margin-right:.75rem}}\n.level-left{align-items:center;justify-content:flex-start}\n@media screen and (max-width:768px){.level-left+.level-right{margin-top:1.5rem}}\n@media screen and (min-width:769px), print{.level-left{display:flex}}\n.level-right{align-items:center;justify-content:flex-end}\n@media screen and (min-width:769px), print{.level-right{display:flex}}\n.media{align-items:flex-start;display:flex;text-align:left}\n.media .content:not(:last-child){margin-bottom:.75rem}\n.media .media{border-top:1px solid rgba(219,219,219,.5);display:flex;padding-top:.75rem}\n.media .media .content:not(:last-child),.media .media .control:not(:last-child){margin-bottom:.5rem}\n.media .media .media{padding-top:.5rem}\n.media .media .media+.media{margin-top:.5rem}\n.media+.media{border-top:1px solid rgba(219,219,219,.5);margin-top:1rem;padding-top:1rem}\n.media.is-large+.media{margin-top:1.5rem;padding-top:1.5rem}\n.media-left,.media-right{flex-basis:auto;flex-grow:0;flex-shrink:0}\n.media-left{margin-right:1rem}\n.media-right{margin-left:1rem}\n.media-content{flex-basis:auto;flex-grow:1;flex-shrink:1;text-align:left}\n.menu{font-size:1rem}\n.menu.is-small{font-size:.75rem}\n.menu.is-medium{font-size:1.25rem}\n.menu.is-large{font-size:1.5rem}\n.menu-list{line-height:1.25}\n.menu-list a{border-radius:2px;color:#4a4a4a;display:block;padding:.5em .75em}\n.menu-list a:hover{background-color:#f5f5f5;color:#363636}\n.menu-list a.is-active{background-color:#3273dc;color:#fff}\n.menu-list li ul{border-left:1px solid #dbdbdb;margin:.75em;padding-left:.75em}\n.menu-label{color:#7a7a7a;font-size:.75em;letter-spacing:.1em;text-transform:uppercase}\n.menu-label:not(:first-child){margin-top:1em}\n.menu-label:not(:last-child){margin-bottom:1em}\n.message{background-color:#f5f5f5;border-radius:4px;font-size:1rem}\n.message strong{color:currentColor}\n.message a:not(.button):not(.tag){color:currentColor;text-decoration:underline}\n.message.is-small{font-size:.75rem}\n.message.is-medium{font-size:1.25rem}\n.message.is-large{font-size:1.5rem}\n.message.is-white{background-color:#fff}\n.message.is-white .message-header{background-color:#fff;color:#0a0a0a}\n.message.is-white .message-body{border-color:#fff;color:#4d4d4d}\n.message.is-black{background-color:#fafafa}\n.message.is-black .message-header{background-color:#0a0a0a;color:#fff}\n.message.is-black .message-body{border-color:#0a0a0a;color:#090909}\n.message.is-light{background-color:#fafafa}\n.message.is-light .message-header{background-color:#f5f5f5;color:#363636}\n.message.is-light .message-body{border-color:#f5f5f5;color:#505050}\n.message.is-dark{background-color:#fafafa}\n.message.is-dark .message-header{background-color:#363636;color:#f5f5f5}\n.message.is-dark .message-body{border-color:#363636;color:#2a2a2a}\n.message.is-primary{background-color:#f5fffd}\n.message.is-primary .message-header{background-color:#00d1b2;color:#fff}\n.message.is-primary .message-body{border-color:#00d1b2;color:#021310}\n.message.is-link{background-color:#f6f9fe}\n.message.is-link .message-header{background-color:#3273dc;color:#fff}\n.message.is-link .message-body{border-color:#3273dc;color:#22509a}\n.message.is-info{background-color:#f6fbfe}\n.message.is-info .message-header{background-color:#209cee;color:#fff}\n.message.is-info .message-body{border-color:#209cee;color:#12537e}\n.message.is-success{background-color:#f6fef9}\n.message.is-success .message-header{background-color:#23d160;color:#fff}\n.message.is-success .message-body{border-color:#23d160;color:#0e301a}\n.message.is-warning{background-color:#fffdf5}\n.message.is-warning .message-header{background-color:#ffdd57;color:rgba(0,0,0,.7)}\n.message.is-warning .message-body{border-color:#ffdd57;color:#3b3108}\n.message.is-danger{background-color:#fff5f7}\n.message.is-danger .message-header{background-color:#ff3860;color:#fff}\n.message.is-danger .message-body{border-color:#ff3860;color:#cd0930}\n.message-header{align-items:center;background-color:#4a4a4a;border-radius:4px 4px 0 0;color:#fff;display:flex;font-weight:700;justify-content:space-between;line-height:1.25;padding:.75em 1em;position:relative}\n.message-header .delete{flex-grow:0;flex-shrink:0;margin-left:.75em}\n.message-header+.message-body{border-width:0;border-top-left-radius:0;border-top-right-radius:0}\n.message-body{border-color:#dbdbdb;border-radius:4px;border-style:solid;border-width:0 0 0 4px;color:#4a4a4a;padding:1.25em 1.5em}\n.message-body code,.message-body pre{background-color:#fff}\n.message-body pre code{background-color:transparent}\n.modal{align-items:center;display:none;justify-content:center;overflow:hidden;position:fixed;z-index:40}\n.modal.is-active{display:flex}\n.modal-background{background-color:rgba(10,10,10,.86)}\n.modal-card,.modal-content{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}\n@media screen and (min-width:769px), print{.modal-card,.modal-content{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}\n.modal-close{background:0 0;height:40px;position:fixed;right:20px;top:20px;width:40px}\n.modal-card{display:flex;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden}\n.modal-card-foot,.modal-card-head{align-items:center;background-color:#f5f5f5;display:flex;flex-shrink:0;justify-content:flex-start;padding:20px;position:relative}\n.modal-card-head{border-bottom:1px solid #dbdbdb;border-top-left-radius:6px;border-top-right-radius:6px}\n.modal-card-title{color:#363636;flex-grow:1;flex-shrink:0;font-size:1.5rem;line-height:1}\n.modal-card-foot{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:1px solid #dbdbdb}\n.modal-card-foot .button:not(:last-child){margin-right:10px}\n.modal-card-body{-webkit-overflow-scrolling:touch;background-color:#fff;flex-grow:1;flex-shrink:1;overflow:auto;padding:20px}\n.navbar{background-color:#fff;min-height:3.25rem;position:relative;z-index:30}\n.navbar.is-white{background-color:#fff;color:#0a0a0a}\n.navbar.is-white .navbar-brand .navbar-link,.navbar.is-white .navbar-brand>.navbar-item{color:#0a0a0a}\n.navbar.is-white .navbar-brand .navbar-link.is-active,.navbar.is-white .navbar-brand .navbar-link:hover,.navbar.is-white .navbar-brand>a.navbar-item.is-active,.navbar.is-white .navbar-brand>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}\n.navbar.is-white .navbar-brand .navbar-link::after{border-color:#0a0a0a}\n@media screen and (min-width:1088px){.navbar.is-white .navbar-end .navbar-link,.navbar.is-white .navbar-end>.navbar-item,.navbar.is-white .navbar-start .navbar-link,.navbar.is-white .navbar-start>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link.is-active,.navbar.is-white .navbar-end .navbar-link:hover,.navbar.is-white .navbar-end>a.navbar-item.is-active,.navbar.is-white .navbar-end>a.navbar-item:hover,.navbar.is-white .navbar-start .navbar-link.is-active,.navbar.is-white .navbar-start .navbar-link:hover,.navbar.is-white .navbar-start>a.navbar-item.is-active,.navbar.is-white .navbar-start>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link::after,.navbar.is-white .navbar-start .navbar-link::after{border-color:#0a0a0a}.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-dropdown a.navbar-item.is-active{background-color:#fff;color:#0a0a0a}}\n.navbar.is-black{background-color:#0a0a0a;color:#fff}\n.navbar.is-black .navbar-brand .navbar-link,.navbar.is-black .navbar-brand>.navbar-item{color:#fff}\n.navbar.is-black .navbar-brand .navbar-link.is-active,.navbar.is-black .navbar-brand .navbar-link:hover,.navbar.is-black .navbar-brand>a.navbar-item.is-active,.navbar.is-black .navbar-brand>a.navbar-item:hover{background-color:#000;color:#fff}\n.navbar.is-black .navbar-brand .navbar-link::after{border-color:#fff}\n@media screen and (min-width:1088px){.navbar.is-black .navbar-end .navbar-link,.navbar.is-black .navbar-end>.navbar-item,.navbar.is-black .navbar-start .navbar-link,.navbar.is-black .navbar-start>.navbar-item{color:#fff}.navbar.is-black .navbar-end .navbar-link.is-active,.navbar.is-black .navbar-end .navbar-link:hover,.navbar.is-black .navbar-end>a.navbar-item.is-active,.navbar.is-black .navbar-end>a.navbar-item:hover,.navbar.is-black .navbar-start .navbar-link.is-active,.navbar.is-black .navbar-start .navbar-link:hover,.navbar.is-black .navbar-start>a.navbar-item.is-active,.navbar.is-black .navbar-start>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-end .navbar-link::after,.navbar.is-black .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link{background-color:#000;color:#fff}.navbar.is-black .navbar-dropdown a.navbar-item.is-active{background-color:#0a0a0a;color:#fff}}\n.navbar.is-light{background-color:#f5f5f5;color:#363636}\n.navbar.is-light .navbar-brand .navbar-link,.navbar.is-light .navbar-brand>.navbar-item{color:#363636}\n.navbar.is-light .navbar-brand .navbar-link.is-active,.navbar.is-light .navbar-brand .navbar-link:hover,.navbar.is-light .navbar-brand>a.navbar-item.is-active,.navbar.is-light .navbar-brand>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}\n.navbar.is-light .navbar-brand .navbar-link::after{border-color:#363636}\n@media screen and (min-width:1088px){.navbar.is-light .navbar-end .navbar-link,.navbar.is-light .navbar-end>.navbar-item,.navbar.is-light .navbar-start .navbar-link,.navbar.is-light .navbar-start>.navbar-item{color:#363636}.navbar.is-light .navbar-end .navbar-link.is-active,.navbar.is-light .navbar-end .navbar-link:hover,.navbar.is-light .navbar-end>a.navbar-item.is-active,.navbar.is-light .navbar-end>a.navbar-item:hover,.navbar.is-light .navbar-start .navbar-link.is-active,.navbar.is-light .navbar-start .navbar-link:hover,.navbar.is-light .navbar-start>a.navbar-item.is-active,.navbar.is-light .navbar-start>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-end .navbar-link::after,.navbar.is-light .navbar-start .navbar-link::after{border-color:#363636}.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#363636}}\n.navbar.is-dark{background-color:#363636;color:#f5f5f5}\n.navbar.is-dark .navbar-brand .navbar-link,.navbar.is-dark .navbar-brand>.navbar-item{color:#f5f5f5}\n.navbar.is-dark .navbar-brand .navbar-link.is-active,.navbar.is-dark .navbar-brand .navbar-link:hover,.navbar.is-dark .navbar-brand>a.navbar-item.is-active,.navbar.is-dark .navbar-brand>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}\n.navbar.is-dark .navbar-brand .navbar-link::after{border-color:#f5f5f5}\n@media screen and (min-width:1088px){.navbar.is-dark .navbar-end .navbar-link,.navbar.is-dark .navbar-end>.navbar-item,.navbar.is-dark .navbar-start .navbar-link,.navbar.is-dark .navbar-start>.navbar-item{color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link.is-active,.navbar.is-dark .navbar-end .navbar-link:hover,.navbar.is-dark .navbar-end>a.navbar-item.is-active,.navbar.is-dark .navbar-end>a.navbar-item:hover,.navbar.is-dark .navbar-start .navbar-link.is-active,.navbar.is-dark .navbar-start .navbar-link:hover,.navbar.is-dark .navbar-start>a.navbar-item.is-active,.navbar.is-dark .navbar-start>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link::after,.navbar.is-dark .navbar-start .navbar-link::after{border-color:#f5f5f5}.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-dropdown a.navbar-item.is-active{background-color:#363636;color:#f5f5f5}}\n.navbar.is-primary{background-color:#00d1b2;color:#fff}\n.navbar.is-primary .navbar-brand .navbar-link,.navbar.is-primary .navbar-brand>.navbar-item{color:#fff}\n.navbar.is-primary .navbar-brand .navbar-link.is-active,.navbar.is-primary .navbar-brand .navbar-link:hover,.navbar.is-primary .navbar-brand>a.navbar-item.is-active,.navbar.is-primary .navbar-brand>a.navbar-item:hover{background-color:#00b89c;color:#fff}\n.navbar.is-primary .navbar-brand .navbar-link::after{border-color:#fff}\n@media screen and (min-width:1088px){.navbar.is-primary .navbar-end .navbar-link,.navbar.is-primary .navbar-end>.navbar-item,.navbar.is-primary .navbar-start .navbar-link,.navbar.is-primary .navbar-start>.navbar-item{color:#fff}.navbar.is-primary .navbar-end .navbar-link.is-active,.navbar.is-primary .navbar-end .navbar-link:hover,.navbar.is-primary .navbar-end>a.navbar-item.is-active,.navbar.is-primary .navbar-end>a.navbar-item:hover,.navbar.is-primary .navbar-start .navbar-link.is-active,.navbar.is-primary .navbar-start .navbar-link:hover,.navbar.is-primary .navbar-start>a.navbar-item.is-active,.navbar.is-primary .navbar-start>a.navbar-item:hover{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-end .navbar-link::after,.navbar.is-primary .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-dropdown a.navbar-item.is-active{background-color:#00d1b2;color:#fff}}\n.navbar.is-link{background-color:#3273dc;color:#fff}\n.navbar.is-link .navbar-brand .navbar-link,.navbar.is-link .navbar-brand>.navbar-item{color:#fff}\n.navbar.is-link .navbar-brand .navbar-link.is-active,.navbar.is-link .navbar-brand .navbar-link:hover,.navbar.is-link .navbar-brand>a.navbar-item.is-active,.navbar.is-link .navbar-brand>a.navbar-item:hover{background-color:#2366d1;color:#fff}\n.navbar.is-link .navbar-brand .navbar-link::after{border-color:#fff}\n@media screen and (min-width:1088px){.navbar.is-link .navbar-end .navbar-link,.navbar.is-link .navbar-end>.navbar-item,.navbar.is-link .navbar-start .navbar-link,.navbar.is-link .navbar-start>.navbar-item{color:#fff}.navbar.is-link .navbar-end .navbar-link.is-active,.navbar.is-link .navbar-end .navbar-link:hover,.navbar.is-link .navbar-end>a.navbar-item.is-active,.navbar.is-link .navbar-end>a.navbar-item:hover,.navbar.is-link .navbar-start .navbar-link.is-active,.navbar.is-link .navbar-start .navbar-link:hover,.navbar.is-link .navbar-start>a.navbar-item.is-active,.navbar.is-link .navbar-start>a.navbar-item:hover{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-end .navbar-link::after,.navbar.is-link .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-dropdown a.navbar-item.is-active{background-color:#3273dc;color:#fff}}\n.navbar.is-info{background-color:#209cee;color:#fff}\n.navbar.is-info .navbar-brand .navbar-link,.navbar.is-info .navbar-brand>.navbar-item{color:#fff}\n.navbar.is-info .navbar-brand .navbar-link.is-active,.navbar.is-info .navbar-brand .navbar-link:hover,.navbar.is-info .navbar-brand>a.navbar-item.is-active,.navbar.is-info .navbar-brand>a.navbar-item:hover{background-color:#118fe4;color:#fff}\n.navbar.is-info .navbar-brand .navbar-link::after{border-color:#fff}\n@media screen and (min-width:1088px){.navbar.is-info .navbar-end .navbar-link,.navbar.is-info .navbar-end>.navbar-item,.navbar.is-info .navbar-start .navbar-link,.navbar.is-info .navbar-start>.navbar-item{color:#fff}.navbar.is-info .navbar-end .navbar-link.is-active,.navbar.is-info .navbar-end .navbar-link:hover,.navbar.is-info .navbar-end>a.navbar-item.is-active,.navbar.is-info .navbar-end>a.navbar-item:hover,.navbar.is-info .navbar-start .navbar-link.is-active,.navbar.is-info .navbar-start .navbar-link:hover,.navbar.is-info .navbar-start>a.navbar-item.is-active,.navbar.is-info .navbar-start>a.navbar-item:hover{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-end .navbar-link::after,.navbar.is-info .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-dropdown a.navbar-item.is-active{background-color:#209cee;color:#fff}}\n.navbar.is-success{background-color:#23d160;color:#fff}\n.navbar.is-success .navbar-brand .navbar-link,.navbar.is-success .navbar-brand>.navbar-item{color:#fff}\n.navbar.is-success .navbar-brand .navbar-link.is-active,.navbar.is-success .navbar-brand .navbar-link:hover,.navbar.is-success .navbar-brand>a.navbar-item.is-active,.navbar.is-success .navbar-brand>a.navbar-item:hover{background-color:#20bc56;color:#fff}\n.navbar.is-success .navbar-brand .navbar-link::after{border-color:#fff}\n@media screen and (min-width:1088px){.navbar.is-success .navbar-end .navbar-link,.navbar.is-success .navbar-end>.navbar-item,.navbar.is-success .navbar-start .navbar-link,.navbar.is-success .navbar-start>.navbar-item{color:#fff}.navbar.is-success .navbar-end .navbar-link.is-active,.navbar.is-success .navbar-end .navbar-link:hover,.navbar.is-success .navbar-end>a.navbar-item.is-active,.navbar.is-success .navbar-end>a.navbar-item:hover,.navbar.is-success .navbar-start .navbar-link.is-active,.navbar.is-success .navbar-start .navbar-link:hover,.navbar.is-success .navbar-start>a.navbar-item.is-active,.navbar.is-success .navbar-start>a.navbar-item:hover{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-end .navbar-link::after,.navbar.is-success .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-dropdown a.navbar-item.is-active{background-color:#23d160;color:#fff}}\n.navbar.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}\n.navbar.is-warning .navbar-brand .navbar-link,.navbar.is-warning .navbar-brand>.navbar-item{color:rgba(0,0,0,.7)}\n.navbar.is-warning .navbar-brand .navbar-link.is-active,.navbar.is-warning .navbar-brand .navbar-link:hover,.navbar.is-warning .navbar-brand>a.navbar-item.is-active,.navbar.is-warning .navbar-brand>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}\n.navbar.is-warning .navbar-brand .navbar-link::after{border-color:rgba(0,0,0,.7)}\n@media screen and (min-width:1088px){.navbar.is-warning .navbar-end .navbar-link,.navbar.is-warning .navbar-end>.navbar-item,.navbar.is-warning .navbar-start .navbar-link,.navbar.is-warning .navbar-start>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link.is-active,.navbar.is-warning .navbar-end .navbar-link:hover,.navbar.is-warning .navbar-end>a.navbar-item.is-active,.navbar.is-warning .navbar-end>a.navbar-item:hover,.navbar.is-warning .navbar-start .navbar-link.is-active,.navbar.is-warning .navbar-start .navbar-link:hover,.navbar.is-warning .navbar-start>a.navbar-item.is-active,.navbar.is-warning .navbar-start>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link::after,.navbar.is-warning .navbar-start .navbar-link::after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-dropdown a.navbar-item.is-active{background-color:#ffdd57;color:rgba(0,0,0,.7)}}\n.navbar.is-danger{background-color:#ff3860;color:#fff}\n.navbar.is-danger .navbar-brand .navbar-link,.navbar.is-danger .navbar-brand>.navbar-item{color:#fff}\n.navbar.is-danger .navbar-brand .navbar-link.is-active,.navbar.is-danger .navbar-brand .navbar-link:hover,.navbar.is-danger .navbar-brand>a.navbar-item.is-active,.navbar.is-danger .navbar-brand>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}\n.navbar.is-danger .navbar-brand .navbar-link::after{border-color:#fff}\n@media screen and (min-width:1088px){.navbar.is-danger .navbar-end .navbar-link,.navbar.is-danger .navbar-end>.navbar-item,.navbar.is-danger .navbar-start .navbar-link,.navbar.is-danger .navbar-start>.navbar-item{color:#fff}.navbar.is-danger .navbar-end .navbar-link.is-active,.navbar.is-danger .navbar-end .navbar-link:hover,.navbar.is-danger .navbar-end>a.navbar-item.is-active,.navbar.is-danger .navbar-end>a.navbar-item:hover,.navbar.is-danger .navbar-start .navbar-link.is-active,.navbar.is-danger .navbar-start .navbar-link:hover,.navbar.is-danger .navbar-start>a.navbar-item.is-active,.navbar.is-danger .navbar-start>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-end .navbar-link::after,.navbar.is-danger .navbar-start .navbar-link::after{border-color:#fff}.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-dropdown a.navbar-item.is-active{background-color:#ff3860;color:#fff}}\n.navbar>.container{align-items:stretch;display:flex;min-height:3.25rem;width:100%}\n.navbar.has-shadow{box-shadow:0 2px 0 0 #f5f5f5}\n.navbar.is-fixed-bottom,.navbar.is-fixed-top{left:0;position:fixed;right:0;z-index:30}\n.navbar.is-fixed-bottom{bottom:0}\n.navbar.is-fixed-bottom.has-shadow{box-shadow:0 -2px 0 0 #f5f5f5}\n.navbar.is-fixed-top{top:0}\nbody.has-navbar-fixed-top,html.has-navbar-fixed-top{padding-top:3.25rem}\nbody.has-navbar-fixed-bottom,html.has-navbar-fixed-bottom{padding-bottom:3.25rem}\n.navbar-brand,.navbar-tabs{align-items:stretch;display:flex;flex-shrink:0;min-height:3.25rem}\n.navbar-brand a.navbar-item:hover{background-color:transparent}\n.navbar-tabs{-webkit-overflow-scrolling:touch;max-width:100vw;overflow-x:auto;overflow-y:hidden}\n.navbar-burger{cursor:pointer;display:block;height:3.25rem;position:relative;width:3.25rem;margin-left:auto}\n.navbar-burger span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;-webkit-transform-origin:center;transform-origin:center;transition-duration:86ms;transition-property:background-color,opacity,-webkit-transform;transition-property:background-color,opacity,transform;transition-property:background-color,opacity,transform,-webkit-transform;transition-timing-function:ease-out;width:16px}\n.navbar-burger span:nth-child(1){top:calc(50% - 6px)}\n.navbar-burger span:nth-child(2){top:calc(50% - 1px)}\n.navbar-burger span:nth-child(3){top:calc(50% + 4px)}\n.navbar-burger:hover{background-color:rgba(0,0,0,.05)}\n.navbar-burger.is-active span:nth-child(1){-webkit-transform:translateY(5px) rotate(45deg);transform:translateY(5px) rotate(45deg)}\n.navbar-burger.is-active span:nth-child(2){opacity:0}\n.navbar-burger.is-active span:nth-child(3){-webkit-transform:translateY(-5px) rotate(-45deg);transform:translateY(-5px) rotate(-45deg)}\n.navbar-menu{display:none}\n.navbar-item,.navbar-link{color:#4a4a4a;display:block;line-height:1.5;padding:.5rem .75rem;position:relative}\n.navbar-item .icon:only-child,.navbar-link .icon:only-child{margin-left:-.25rem;margin-right:-.25rem}\n.navbar-link,a.navbar-item{cursor:pointer}\n.navbar-link.is-active,.navbar-link:hover,a.navbar-item.is-active,a.navbar-item:hover{background-color:#fafafa;color:#3273dc}\n.navbar-item{display:block;flex-grow:0;flex-shrink:0}\n.navbar-item img{max-height:1.75rem}\n.navbar-item.has-dropdown{padding:0}\n.navbar-item.is-expanded{flex-grow:1;flex-shrink:1}\n.navbar-item.is-tab{border-bottom:1px solid transparent;min-height:3.25rem;padding-bottom:calc(.5rem - 1px)}\n.navbar-item.is-tab:hover{background-color:transparent;border-bottom-color:#3273dc}\n.navbar-item.is-tab.is-active{background-color:transparent;border-bottom-color:#3273dc;border-bottom-style:solid;border-bottom-width:3px;color:#3273dc;padding-bottom:calc(.5rem - 3px)}\n.navbar-content{flex-grow:1;flex-shrink:1}\n.navbar-link{padding-right:2.5em}\n.navbar-link::after{border-color:#3273dc;margin-top:-.375em;right:1.125em}\n.navbar-dropdown{font-size:.875rem;padding-bottom:.5rem;padding-top:.5rem}\n.navbar-dropdown .navbar-item{padding-left:1.5rem;padding-right:1.5rem}\n.navbar-divider{background-color:#f5f5f5;border:none;display:none;height:2px;margin:.5rem 0}\n@media screen and (max-width:1087px){.navbar>.container{display:block}.navbar-brand .navbar-item,.navbar-tabs .navbar-item{align-items:center;display:flex}.navbar-link::after{display:none}.navbar-menu{background-color:#fff;box-shadow:0 8px 16px rgba(10,10,10,.1);padding:.5rem 0}.navbar-menu.is-active{display:block}.navbar.is-fixed-bottom-touch,.navbar.is-fixed-top-touch{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-touch{bottom:0}.navbar.is-fixed-bottom-touch.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-touch{top:0}.navbar.is-fixed-top .navbar-menu,.navbar.is-fixed-top-touch .navbar-menu{-webkit-overflow-scrolling:touch;max-height:calc(100vh - 3.25rem);overflow:auto}body.has-navbar-fixed-top-touch,html.has-navbar-fixed-top-touch{padding-top:3.25rem}body.has-navbar-fixed-bottom-touch,html.has-navbar-fixed-bottom-touch{padding-bottom:3.25rem}}\n@media screen and (min-width:1088px){.navbar,.navbar-end,.navbar-menu,.navbar-start{align-items:stretch;display:flex}.navbar{min-height:3.25rem}.navbar.is-spaced{padding:1rem 2rem}.navbar.is-spaced .navbar-end,.navbar.is-spaced .navbar-start{align-items:center}.navbar.is-spaced .navbar-link,.navbar.is-spaced a.navbar-item{border-radius:4px}.navbar.is-transparent .navbar-link.is-active,.navbar.is-transparent .navbar-link:hover,.navbar.is-transparent a.navbar-item.is-active,.navbar.is-transparent a.navbar-item:hover{background-color:transparent!important}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link{background-color:transparent!important}.navbar.is-transparent .navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#3273dc}.navbar-burger{display:none}.navbar-item,.navbar-link{align-items:center;display:flex}.navbar-item{display:flex}.navbar-item.has-dropdown{align-items:stretch}.navbar-item.has-dropdown-up .navbar-link::after{-webkit-transform:rotate(135deg) translate(.25em,-.25em);transform:rotate(135deg) translate(.25em,-.25em)}.navbar-item.has-dropdown-up .navbar-dropdown{border-bottom:2px solid #dbdbdb;border-radius:6px 6px 0 0;border-top:none;bottom:100%;box-shadow:0 -8px 8px rgba(10,10,10,.1);top:auto}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown{display:block}.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown{opacity:1;pointer-events:auto;-webkit-transform:translateY(0);transform:translateY(0)}.navbar-menu{flex-grow:1;flex-shrink:0}.navbar-start{justify-content:flex-start;margin-right:auto}.navbar-end{justify-content:flex-end;margin-left:auto}.navbar-dropdown{background-color:#fff;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:2px solid #dbdbdb;box-shadow:0 8px 8px rgba(10,10,10,.1);display:none;font-size:.875rem;left:0;min-width:100%;position:absolute;top:100%;z-index:20}.navbar-dropdown .navbar-item{padding:.375rem 1rem;white-space:nowrap}.navbar-dropdown a.navbar-item{padding-right:3rem}.navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#3273dc}.navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-dropdown{border-radius:6px;border-top:none;box-shadow:0 8px 8px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);display:block;opacity:0;pointer-events:none;top:calc(100% + (-4px));-webkit-transform:translateY(-5px);transform:translateY(-5px);transition-duration:86ms;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.navbar-dropdown.is-right{left:auto;right:0}.navbar-divider{display:block}.container>.navbar .navbar-brand,.navbar>.container .navbar-brand{margin-left:-1rem}.container>.navbar .navbar-menu,.navbar>.container .navbar-menu{margin-right:-1rem}.navbar.is-fixed-bottom-desktop,.navbar.is-fixed-top-desktop{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-desktop{bottom:0}.navbar.is-fixed-bottom-desktop.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-desktop{top:0}body.has-navbar-fixed-top-desktop,html.has-navbar-fixed-top-desktop{padding-top:3.25rem}body.has-navbar-fixed-bottom-desktop,html.has-navbar-fixed-bottom-desktop{padding-bottom:3.25rem}body.has-spaced-navbar-fixed-top,html.has-spaced-navbar-fixed-top{padding-top:5.25rem}body.has-spaced-navbar-fixed-bottom,html.has-spaced-navbar-fixed-bottom{padding-bottom:5.25rem}.navbar-link.is-active,a.navbar-item.is-active{color:#0a0a0a}.navbar-link.is-active:not(:hover),a.navbar-item.is-active:not(:hover){background-color:transparent}.navbar-item.has-dropdown.is-active .navbar-link,.navbar-item.has-dropdown:hover .navbar-link{background-color:#fafafa}}\n.pagination{font-size:1rem;margin:-.25rem}\n.pagination.is-small{font-size:.75rem}\n.pagination.is-medium{font-size:1.25rem}\n.pagination.is-large{font-size:1.5rem}\n.pagination.is-rounded .pagination-next,.pagination.is-rounded .pagination-previous{padding-left:1em;padding-right:1em;border-radius:290486px}\n.pagination.is-rounded .pagination-link{border-radius:290486px}\n.pagination,.pagination-list{align-items:center;display:flex;justify-content:center;text-align:center}\n.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous{font-size:1em;padding-left:.5em;padding-right:.5em;justify-content:center;margin:.25rem;text-align:center}\n.pagination-link,.pagination-next,.pagination-previous{border-color:#dbdbdb;color:#363636;min-width:2.25em}\n.pagination-link:hover,.pagination-next:hover,.pagination-previous:hover{border-color:#b5b5b5;color:#363636}\n.pagination-link:focus,.pagination-next:focus,.pagination-previous:focus{border-color:#3273dc}\n.pagination-link:active,.pagination-next:active,.pagination-previous:active{box-shadow:inset 0 1px 2px rgba(10,10,10,.2)}\n.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled]{background-color:#dbdbdb;border-color:#dbdbdb;box-shadow:none;color:#7a7a7a;opacity:.5}\n.pagination-next,.pagination-previous{padding-left:.75em;padding-right:.75em;white-space:nowrap}\n.pagination-link.is-current{background-color:#3273dc;border-color:#3273dc;color:#fff}\n.pagination-ellipsis{color:#b5b5b5;pointer-events:none}\n.pagination-list{flex-wrap:wrap}\n@media screen and (max-width:768px){.pagination{flex-wrap:wrap}.pagination-next,.pagination-previous{flex-grow:1;flex-shrink:1}.pagination-list li{flex-grow:1;flex-shrink:1}}\n@media screen and (min-width:769px), print{.pagination-list{flex-grow:1;flex-shrink:1;justify-content:flex-start;order:1}.pagination-previous{order:2}.pagination-next{order:3}.pagination{justify-content:space-between}.pagination.is-centered .pagination-previous{order:1}.pagination.is-centered .pagination-list{justify-content:center;order:2}.pagination.is-centered .pagination-next{order:3}.pagination.is-right .pagination-previous{order:1}.pagination.is-right .pagination-next{order:2}.pagination.is-right .pagination-list{justify-content:flex-end;order:3}}\n.panel{font-size:1rem}\n.panel:not(:last-child){margin-bottom:1.5rem}\n.panel-block,.panel-heading,.panel-tabs{border-bottom:1px solid #dbdbdb;border-left:1px solid #dbdbdb;border-right:1px solid #dbdbdb}\n.panel-block:first-child,.panel-heading:first-child,.panel-tabs:first-child{border-top:1px solid #dbdbdb}\n.panel-heading{background-color:#f5f5f5;border-radius:4px 4px 0 0;color:#363636;font-size:1.25em;font-weight:300;line-height:1.25;padding:.5em .75em}\n.panel-tabs{align-items:flex-end;display:flex;font-size:.875em;justify-content:center}\n.panel-tabs a{border-bottom:1px solid #dbdbdb;margin-bottom:-1px;padding:.5em}\n.panel-tabs a.is-active{border-bottom-color:#4a4a4a;color:#363636}\n.panel-list a{color:#4a4a4a}\n.panel-list a:hover{color:#3273dc}\n.panel-block{align-items:center;color:#363636;display:flex;justify-content:flex-start;padding:.5em .75em}\n.panel-block input[type=checkbox]{margin-right:.75em}\n.panel-block>.control{flex-grow:1;flex-shrink:1;width:100%}\n.panel-block.is-wrapped{flex-wrap:wrap}\n.panel-block.is-active{border-left-color:#3273dc;color:#363636}\n.panel-block.is-active .panel-icon{color:#3273dc}\na.panel-block,label.panel-block{cursor:pointer}\na.panel-block:hover,label.panel-block:hover{background-color:#f5f5f5}\n.panel-icon{display:inline-block;font-size:14px;height:1em;line-height:1em;text-align:center;vertical-align:top;width:1em;color:#7a7a7a;margin-right:.75em}\n.panel-icon .fa{font-size:inherit;line-height:inherit}\n.tabs{-webkit-overflow-scrolling:touch;align-items:stretch;display:flex;font-size:1rem;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}\n.tabs a{align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;color:#4a4a4a;display:flex;justify-content:center;margin-bottom:-1px;padding:.5em 1em;vertical-align:top}\n.tabs a:hover{border-bottom-color:#363636;color:#363636}\n.tabs li{display:block}\n.tabs li.is-active a{border-bottom-color:#3273dc;color:#3273dc}\n.tabs ul{align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;display:flex;flex-grow:1;flex-shrink:0;justify-content:flex-start}\n.tabs ul.is-left{padding-right:.75em}\n.tabs ul.is-center{flex:none;justify-content:center;padding-left:.75em;padding-right:.75em}\n.tabs ul.is-right{justify-content:flex-end;padding-left:.75em}\n.tabs .icon:first-child{margin-right:.5em}\n.tabs .icon:last-child{margin-left:.5em}\n.tabs.is-centered ul{justify-content:center}\n.tabs.is-right ul{justify-content:flex-end}\n.tabs.is-boxed a{border:1px solid transparent;border-radius:4px 4px 0 0}\n.tabs.is-boxed a:hover{background-color:#f5f5f5;border-bottom-color:#dbdbdb}\n.tabs.is-boxed li.is-active a{background-color:#fff;border-color:#dbdbdb;border-bottom-color:transparent!important}\n.tabs.is-fullwidth li{flex-grow:1;flex-shrink:0}\n.tabs.is-toggle a{border-color:#dbdbdb;border-style:solid;border-width:1px;margin-bottom:0;position:relative}\n.tabs.is-toggle a:hover{background-color:#f5f5f5;border-color:#b5b5b5;z-index:2}\n.tabs.is-toggle li+li{margin-left:-1px}\n.tabs.is-toggle li:first-child a{border-radius:4px 0 0 4px}\n.tabs.is-toggle li:last-child a{border-radius:0 4px 4px 0}\n.tabs.is-toggle li.is-active a{background-color:#3273dc;border-color:#3273dc;color:#fff;z-index:1}\n.tabs.is-toggle ul{border-bottom:none}\n.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:290486px;border-top-left-radius:290486px;padding-left:1.25em}\n.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:290486px;border-top-right-radius:290486px;padding-right:1.25em}\n.tabs.is-small{font-size:.75rem}\n.tabs.is-medium{font-size:1.25rem}\n.tabs.is-large{font-size:1.5rem}\n.column{display:block;flex-basis:0;flex-grow:1;flex-shrink:1;padding:.75rem}\n.columns.is-mobile>.column.is-narrow{flex:none}\n.columns.is-mobile>.column.is-full{flex:none;width:100%}\n.columns.is-mobile>.column.is-three-quarters{flex:none;width:75%}\n.columns.is-mobile>.column.is-two-thirds{flex:none;width:66.6666%}\n.columns.is-mobile>.column.is-half{flex:none;width:50%}\n.columns.is-mobile>.column.is-one-third{flex:none;width:33.3333%}\n.columns.is-mobile>.column.is-one-quarter{flex:none;width:25%}\n.columns.is-mobile>.column.is-one-fifth{flex:none;width:20%}\n.columns.is-mobile>.column.is-two-fifths{flex:none;width:40%}\n.columns.is-mobile>.column.is-three-fifths{flex:none;width:60%}\n.columns.is-mobile>.column.is-four-fifths{flex:none;width:80%}\n.columns.is-mobile>.column.is-offset-three-quarters{margin-left:75%}\n.columns.is-mobile>.column.is-offset-two-thirds{margin-left:66.6666%}\n.columns.is-mobile>.column.is-offset-half{margin-left:50%}\n.columns.is-mobile>.column.is-offset-one-third{margin-left:33.3333%}\n.columns.is-mobile>.column.is-offset-one-quarter{margin-left:25%}\n.columns.is-mobile>.column.is-offset-one-fifth{margin-left:20%}\n.columns.is-mobile>.column.is-offset-two-fifths{margin-left:40%}\n.columns.is-mobile>.column.is-offset-three-fifths{margin-left:60%}\n.columns.is-mobile>.column.is-offset-four-fifths{margin-left:80%}\n.columns.is-mobile>.column.is-1{flex:none;width:8.33333%}\n.columns.is-mobile>.column.is-offset-1{margin-left:8.33333%}\n.columns.is-mobile>.column.is-2{flex:none;width:16.66667%}\n.columns.is-mobile>.column.is-offset-2{margin-left:16.66667%}\n.columns.is-mobile>.column.is-3{flex:none;width:25%}\n.columns.is-mobile>.column.is-offset-3{margin-left:25%}\n.columns.is-mobile>.column.is-4{flex:none;width:33.33333%}\n.columns.is-mobile>.column.is-offset-4{margin-left:33.33333%}\n.columns.is-mobile>.column.is-5{flex:none;width:41.66667%}\n.columns.is-mobile>.column.is-offset-5{margin-left:41.66667%}\n.columns.is-mobile>.column.is-6{flex:none;width:50%}\n.columns.is-mobile>.column.is-offset-6{margin-left:50%}\n.columns.is-mobile>.column.is-7{flex:none;width:58.33333%}\n.columns.is-mobile>.column.is-offset-7{margin-left:58.33333%}\n.columns.is-mobile>.column.is-8{flex:none;width:66.66667%}\n.columns.is-mobile>.column.is-offset-8{margin-left:66.66667%}\n.columns.is-mobile>.column.is-9{flex:none;width:75%}\n.columns.is-mobile>.column.is-offset-9{margin-left:75%}\n.columns.is-mobile>.column.is-10{flex:none;width:83.33333%}\n.columns.is-mobile>.column.is-offset-10{margin-left:83.33333%}\n.columns.is-mobile>.column.is-11{flex:none;width:91.66667%}\n.columns.is-mobile>.column.is-offset-11{margin-left:91.66667%}\n.columns.is-mobile>.column.is-12{flex:none;width:100%}\n.columns.is-mobile>.column.is-offset-12{margin-left:100%}\n@media screen and (max-width:768px){.column.is-narrow-mobile{flex:none}.column.is-full-mobile{flex:none;width:100%}.column.is-three-quarters-mobile{flex:none;width:75%}.column.is-two-thirds-mobile{flex:none;width:66.6666%}.column.is-half-mobile{flex:none;width:50%}.column.is-one-third-mobile{flex:none;width:33.3333%}.column.is-one-quarter-mobile{flex:none;width:25%}.column.is-one-fifth-mobile{flex:none;width:20%}.column.is-two-fifths-mobile{flex:none;width:40%}.column.is-three-fifths-mobile{flex:none;width:60%}.column.is-four-fifths-mobile{flex:none;width:80%}.column.is-offset-three-quarters-mobile{margin-left:75%}.column.is-offset-two-thirds-mobile{margin-left:66.6666%}.column.is-offset-half-mobile{margin-left:50%}.column.is-offset-one-third-mobile{margin-left:33.3333%}.column.is-offset-one-quarter-mobile{margin-left:25%}.column.is-offset-one-fifth-mobile{margin-left:20%}.column.is-offset-two-fifths-mobile{margin-left:40%}.column.is-offset-three-fifths-mobile{margin-left:60%}.column.is-offset-four-fifths-mobile{margin-left:80%}.column.is-1-mobile{flex:none;width:8.33333%}.column.is-offset-1-mobile{margin-left:8.33333%}.column.is-2-mobile{flex:none;width:16.66667%}.column.is-offset-2-mobile{margin-left:16.66667%}.column.is-3-mobile{flex:none;width:25%}.column.is-offset-3-mobile{margin-left:25%}.column.is-4-mobile{flex:none;width:33.33333%}.column.is-offset-4-mobile{margin-left:33.33333%}.column.is-5-mobile{flex:none;width:41.66667%}.column.is-offset-5-mobile{margin-left:41.66667%}.column.is-6-mobile{flex:none;width:50%}.column.is-offset-6-mobile{margin-left:50%}.column.is-7-mobile{flex:none;width:58.33333%}.column.is-offset-7-mobile{margin-left:58.33333%}.column.is-8-mobile{flex:none;width:66.66667%}.column.is-offset-8-mobile{margin-left:66.66667%}.column.is-9-mobile{flex:none;width:75%}.column.is-offset-9-mobile{margin-left:75%}.column.is-10-mobile{flex:none;width:83.33333%}.column.is-offset-10-mobile{margin-left:83.33333%}.column.is-11-mobile{flex:none;width:91.66667%}.column.is-offset-11-mobile{margin-left:91.66667%}.column.is-12-mobile{flex:none;width:100%}.column.is-offset-12-mobile{margin-left:100%}}\n@media screen and (min-width:769px), print{.column.is-narrow,.column.is-narrow-tablet{flex:none}.column.is-full,.column.is-full-tablet{flex:none;width:100%}.column.is-three-quarters,.column.is-three-quarters-tablet{flex:none;width:75%}.column.is-two-thirds,.column.is-two-thirds-tablet{flex:none;width:66.6666%}.column.is-half,.column.is-half-tablet{flex:none;width:50%}.column.is-one-third,.column.is-one-third-tablet{flex:none;width:33.3333%}.column.is-one-quarter,.column.is-one-quarter-tablet{flex:none;width:25%}.column.is-one-fifth,.column.is-one-fifth-tablet{flex:none;width:20%}.column.is-two-fifths,.column.is-two-fifths-tablet{flex:none;width:40%}.column.is-three-fifths,.column.is-three-fifths-tablet{flex:none;width:60%}.column.is-four-fifths,.column.is-four-fifths-tablet{flex:none;width:80%}.column.is-offset-three-quarters,.column.is-offset-three-quarters-tablet{margin-left:75%}.column.is-offset-two-thirds,.column.is-offset-two-thirds-tablet{margin-left:66.6666%}.column.is-offset-half,.column.is-offset-half-tablet{margin-left:50%}.column.is-offset-one-third,.column.is-offset-one-third-tablet{margin-left:33.3333%}.column.is-offset-one-quarter,.column.is-offset-one-quarter-tablet{margin-left:25%}.column.is-offset-one-fifth,.column.is-offset-one-fifth-tablet{margin-left:20%}.column.is-offset-two-fifths,.column.is-offset-two-fifths-tablet{margin-left:40%}.column.is-offset-three-fifths,.column.is-offset-three-fifths-tablet{margin-left:60%}.column.is-offset-four-fifths,.column.is-offset-four-fifths-tablet{margin-left:80%}.column.is-1,.column.is-1-tablet{flex:none;width:8.33333%}.column.is-offset-1,.column.is-offset-1-tablet{margin-left:8.33333%}.column.is-2,.column.is-2-tablet{flex:none;width:16.66667%}.column.is-offset-2,.column.is-offset-2-tablet{margin-left:16.66667%}.column.is-3,.column.is-3-tablet{flex:none;width:25%}.column.is-offset-3,.column.is-offset-3-tablet{margin-left:25%}.column.is-4,.column.is-4-tablet{flex:none;width:33.33333%}.column.is-offset-4,.column.is-offset-4-tablet{margin-left:33.33333%}.column.is-5,.column.is-5-tablet{flex:none;width:41.66667%}.column.is-offset-5,.column.is-offset-5-tablet{margin-left:41.66667%}.column.is-6,.column.is-6-tablet{flex:none;width:50%}.column.is-offset-6,.column.is-offset-6-tablet{margin-left:50%}.column.is-7,.column.is-7-tablet{flex:none;width:58.33333%}.column.is-offset-7,.column.is-offset-7-tablet{margin-left:58.33333%}.column.is-8,.column.is-8-tablet{flex:none;width:66.66667%}.column.is-offset-8,.column.is-offset-8-tablet{margin-left:66.66667%}.column.is-9,.column.is-9-tablet{flex:none;width:75%}.column.is-offset-9,.column.is-offset-9-tablet{margin-left:75%}.column.is-10,.column.is-10-tablet{flex:none;width:83.33333%}.column.is-offset-10,.column.is-offset-10-tablet{margin-left:83.33333%}.column.is-11,.column.is-11-tablet{flex:none;width:91.66667%}.column.is-offset-11,.column.is-offset-11-tablet{margin-left:91.66667%}.column.is-12,.column.is-12-tablet{flex:none;width:100%}.column.is-offset-12,.column.is-offset-12-tablet{margin-left:100%}}\n@media screen and (max-width:1087px){.column.is-narrow-touch{flex:none}.column.is-full-touch{flex:none;width:100%}.column.is-three-quarters-touch{flex:none;width:75%}.column.is-two-thirds-touch{flex:none;width:66.6666%}.column.is-half-touch{flex:none;width:50%}.column.is-one-third-touch{flex:none;width:33.3333%}.column.is-one-quarter-touch{flex:none;width:25%}.column.is-one-fifth-touch{flex:none;width:20%}.column.is-two-fifths-touch{flex:none;width:40%}.column.is-three-fifths-touch{flex:none;width:60%}.column.is-four-fifths-touch{flex:none;width:80%}.column.is-offset-three-quarters-touch{margin-left:75%}.column.is-offset-two-thirds-touch{margin-left:66.6666%}.column.is-offset-half-touch{margin-left:50%}.column.is-offset-one-third-touch{margin-left:33.3333%}.column.is-offset-one-quarter-touch{margin-left:25%}.column.is-offset-one-fifth-touch{margin-left:20%}.column.is-offset-two-fifths-touch{margin-left:40%}.column.is-offset-three-fifths-touch{margin-left:60%}.column.is-offset-four-fifths-touch{margin-left:80%}.column.is-1-touch{flex:none;width:8.33333%}.column.is-offset-1-touch{margin-left:8.33333%}.column.is-2-touch{flex:none;width:16.66667%}.column.is-offset-2-touch{margin-left:16.66667%}.column.is-3-touch{flex:none;width:25%}.column.is-offset-3-touch{margin-left:25%}.column.is-4-touch{flex:none;width:33.33333%}.column.is-offset-4-touch{margin-left:33.33333%}.column.is-5-touch{flex:none;width:41.66667%}.column.is-offset-5-touch{margin-left:41.66667%}.column.is-6-touch{flex:none;width:50%}.column.is-offset-6-touch{margin-left:50%}.column.is-7-touch{flex:none;width:58.33333%}.column.is-offset-7-touch{margin-left:58.33333%}.column.is-8-touch{flex:none;width:66.66667%}.column.is-offset-8-touch{margin-left:66.66667%}.column.is-9-touch{flex:none;width:75%}.column.is-offset-9-touch{margin-left:75%}.column.is-10-touch{flex:none;width:83.33333%}.column.is-offset-10-touch{margin-left:83.33333%}.column.is-11-touch{flex:none;width:91.66667%}.column.is-offset-11-touch{margin-left:91.66667%}.column.is-12-touch{flex:none;width:100%}.column.is-offset-12-touch{margin-left:100%}}\n@media screen and (min-width:1088px){.column.is-narrow-desktop{flex:none}.column.is-full-desktop{flex:none;width:100%}.column.is-three-quarters-desktop{flex:none;width:75%}.column.is-two-thirds-desktop{flex:none;width:66.6666%}.column.is-half-desktop{flex:none;width:50%}.column.is-one-third-desktop{flex:none;width:33.3333%}.column.is-one-quarter-desktop{flex:none;width:25%}.column.is-one-fifth-desktop{flex:none;width:20%}.column.is-two-fifths-desktop{flex:none;width:40%}.column.is-three-fifths-desktop{flex:none;width:60%}.column.is-four-fifths-desktop{flex:none;width:80%}.column.is-offset-three-quarters-desktop{margin-left:75%}.column.is-offset-two-thirds-desktop{margin-left:66.6666%}.column.is-offset-half-desktop{margin-left:50%}.column.is-offset-one-third-desktop{margin-left:33.3333%}.column.is-offset-one-quarter-desktop{margin-left:25%}.column.is-offset-one-fifth-desktop{margin-left:20%}.column.is-offset-two-fifths-desktop{margin-left:40%}.column.is-offset-three-fifths-desktop{margin-left:60%}.column.is-offset-four-fifths-desktop{margin-left:80%}.column.is-1-desktop{flex:none;width:8.33333%}.column.is-offset-1-desktop{margin-left:8.33333%}.column.is-2-desktop{flex:none;width:16.66667%}.column.is-offset-2-desktop{margin-left:16.66667%}.column.is-3-desktop{flex:none;width:25%}.column.is-offset-3-desktop{margin-left:25%}.column.is-4-desktop{flex:none;width:33.33333%}.column.is-offset-4-desktop{margin-left:33.33333%}.column.is-5-desktop{flex:none;width:41.66667%}.column.is-offset-5-desktop{margin-left:41.66667%}.column.is-6-desktop{flex:none;width:50%}.column.is-offset-6-desktop{margin-left:50%}.column.is-7-desktop{flex:none;width:58.33333%}.column.is-offset-7-desktop{margin-left:58.33333%}.column.is-8-desktop{flex:none;width:66.66667%}.column.is-offset-8-desktop{margin-left:66.66667%}.column.is-9-desktop{flex:none;width:75%}.column.is-offset-9-desktop{margin-left:75%}.column.is-10-desktop{flex:none;width:83.33333%}.column.is-offset-10-desktop{margin-left:83.33333%}.column.is-11-desktop{flex:none;width:91.66667%}.column.is-offset-11-desktop{margin-left:91.66667%}.column.is-12-desktop{flex:none;width:100%}.column.is-offset-12-desktop{margin-left:100%}}\n@media screen and (min-width:1280px){.column.is-narrow-widescreen{flex:none}.column.is-full-widescreen{flex:none;width:100%}.column.is-three-quarters-widescreen{flex:none;width:75%}.column.is-two-thirds-widescreen{flex:none;width:66.6666%}.column.is-half-widescreen{flex:none;width:50%}.column.is-one-third-widescreen{flex:none;width:33.3333%}.column.is-one-quarter-widescreen{flex:none;width:25%}.column.is-one-fifth-widescreen{flex:none;width:20%}.column.is-two-fifths-widescreen{flex:none;width:40%}.column.is-three-fifths-widescreen{flex:none;width:60%}.column.is-four-fifths-widescreen{flex:none;width:80%}.column.is-offset-three-quarters-widescreen{margin-left:75%}.column.is-offset-two-thirds-widescreen{margin-left:66.6666%}.column.is-offset-half-widescreen{margin-left:50%}.column.is-offset-one-third-widescreen{margin-left:33.3333%}.column.is-offset-one-quarter-widescreen{margin-left:25%}.column.is-offset-one-fifth-widescreen{margin-left:20%}.column.is-offset-two-fifths-widescreen{margin-left:40%}.column.is-offset-three-fifths-widescreen{margin-left:60%}.column.is-offset-four-fifths-widescreen{margin-left:80%}.column.is-1-widescreen{flex:none;width:8.33333%}.column.is-offset-1-widescreen{margin-left:8.33333%}.column.is-2-widescreen{flex:none;width:16.66667%}.column.is-offset-2-widescreen{margin-left:16.66667%}.column.is-3-widescreen{flex:none;width:25%}.column.is-offset-3-widescreen{margin-left:25%}.column.is-4-widescreen{flex:none;width:33.33333%}.column.is-offset-4-widescreen{margin-left:33.33333%}.column.is-5-widescreen{flex:none;width:41.66667%}.column.is-offset-5-widescreen{margin-left:41.66667%}.column.is-6-widescreen{flex:none;width:50%}.column.is-offset-6-widescreen{margin-left:50%}.column.is-7-widescreen{flex:none;width:58.33333%}.column.is-offset-7-widescreen{margin-left:58.33333%}.column.is-8-widescreen{flex:none;width:66.66667%}.column.is-offset-8-widescreen{margin-left:66.66667%}.column.is-9-widescreen{flex:none;width:75%}.column.is-offset-9-widescreen{margin-left:75%}.column.is-10-widescreen{flex:none;width:83.33333%}.column.is-offset-10-widescreen{margin-left:83.33333%}.column.is-11-widescreen{flex:none;width:91.66667%}.column.is-offset-11-widescreen{margin-left:91.66667%}.column.is-12-widescreen{flex:none;width:100%}.column.is-offset-12-widescreen{margin-left:100%}}\n@media screen and (min-width:1472px){.column.is-narrow-fullhd{flex:none}.column.is-full-fullhd{flex:none;width:100%}.column.is-three-quarters-fullhd{flex:none;width:75%}.column.is-two-thirds-fullhd{flex:none;width:66.6666%}.column.is-half-fullhd{flex:none;width:50%}.column.is-one-third-fullhd{flex:none;width:33.3333%}.column.is-one-quarter-fullhd{flex:none;width:25%}.column.is-one-fifth-fullhd{flex:none;width:20%}.column.is-two-fifths-fullhd{flex:none;width:40%}.column.is-three-fifths-fullhd{flex:none;width:60%}.column.is-four-fifths-fullhd{flex:none;width:80%}.column.is-offset-three-quarters-fullhd{margin-left:75%}.column.is-offset-two-thirds-fullhd{margin-left:66.6666%}.column.is-offset-half-fullhd{margin-left:50%}.column.is-offset-one-third-fullhd{margin-left:33.3333%}.column.is-offset-one-quarter-fullhd{margin-left:25%}.column.is-offset-one-fifth-fullhd{margin-left:20%}.column.is-offset-two-fifths-fullhd{margin-left:40%}.column.is-offset-three-fifths-fullhd{margin-left:60%}.column.is-offset-four-fifths-fullhd{margin-left:80%}.column.is-1-fullhd{flex:none;width:8.33333%}.column.is-offset-1-fullhd{margin-left:8.33333%}.column.is-2-fullhd{flex:none;width:16.66667%}.column.is-offset-2-fullhd{margin-left:16.66667%}.column.is-3-fullhd{flex:none;width:25%}.column.is-offset-3-fullhd{margin-left:25%}.column.is-4-fullhd{flex:none;width:33.33333%}.column.is-offset-4-fullhd{margin-left:33.33333%}.column.is-5-fullhd{flex:none;width:41.66667%}.column.is-offset-5-fullhd{margin-left:41.66667%}.column.is-6-fullhd{flex:none;width:50%}.column.is-offset-6-fullhd{margin-left:50%}.column.is-7-fullhd{flex:none;width:58.33333%}.column.is-offset-7-fullhd{margin-left:58.33333%}.column.is-8-fullhd{flex:none;width:66.66667%}.column.is-offset-8-fullhd{margin-left:66.66667%}.column.is-9-fullhd{flex:none;width:75%}.column.is-offset-9-fullhd{margin-left:75%}.column.is-10-fullhd{flex:none;width:83.33333%}.column.is-offset-10-fullhd{margin-left:83.33333%}.column.is-11-fullhd{flex:none;width:91.66667%}.column.is-offset-11-fullhd{margin-left:91.66667%}.column.is-12-fullhd{flex:none;width:100%}.column.is-offset-12-fullhd{margin-left:100%}}\n.columns{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}\n.columns:last-child{margin-bottom:-.75rem}\n.columns:not(:last-child){margin-bottom:calc(1.5rem - .75rem)}\n.columns.is-centered{justify-content:center}\n.columns.is-gapless{margin-left:0;margin-right:0;margin-top:0}\n.columns.is-gapless>.column{margin:0;padding:0!important}\n.columns.is-gapless:not(:last-child){margin-bottom:1.5rem}\n.columns.is-gapless:last-child{margin-bottom:0}\n.columns.is-mobile{display:flex}\n.columns.is-multiline{flex-wrap:wrap}\n.columns.is-vcentered{align-items:center}\n@media screen and (min-width:769px), print{.columns:not(.is-desktop){display:flex}}\n@media screen and (min-width:1088px){.columns.is-desktop{display:flex}}\n.columns.is-variable{--columnGap:0.75rem;margin-left:calc(-1 * var(--columnGap));margin-right:calc(-1 * var(--columnGap))}\n.columns.is-variable .column{padding-left:var(--columnGap);padding-right:var(--columnGap)}\n.columns.is-variable.is-0{--columnGap:0rem}\n.columns.is-variable.is-1{--columnGap:0.25rem}\n.columns.is-variable.is-2{--columnGap:0.5rem}\n.columns.is-variable.is-3{--columnGap:0.75rem}\n.columns.is-variable.is-4{--columnGap:1rem}\n.columns.is-variable.is-5{--columnGap:1.25rem}\n.columns.is-variable.is-6{--columnGap:1.5rem}\n.columns.is-variable.is-7{--columnGap:1.75rem}\n.columns.is-variable.is-8{--columnGap:2rem}\n.tile{align-items:stretch;display:block;flex-basis:0;flex-grow:1;flex-shrink:1;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content}\n.tile.is-ancestor{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}\n.tile.is-ancestor:last-child{margin-bottom:-.75rem}\n.tile.is-ancestor:not(:last-child){margin-bottom:.75rem}\n.tile.is-child{margin:0!important}\n.tile.is-parent{padding:.75rem}\n.tile.is-vertical{flex-direction:column}\n.tile.is-vertical>.tile.is-child:not(:last-child){margin-bottom:1.5rem!important}\n@media screen and (min-width:769px), print{.tile:not(.is-child){display:flex}.tile.is-1{flex:none;width:8.33333%}.tile.is-2{flex:none;width:16.66667%}.tile.is-3{flex:none;width:25%}.tile.is-4{flex:none;width:33.33333%}.tile.is-5{flex:none;width:41.66667%}.tile.is-6{flex:none;width:50%}.tile.is-7{flex:none;width:58.33333%}.tile.is-8{flex:none;width:66.66667%}.tile.is-9{flex:none;width:75%}.tile.is-10{flex:none;width:83.33333%}.tile.is-11{flex:none;width:91.66667%}.tile.is-12{flex:none;width:100%}}\n.hero{align-items:stretch;display:flex;flex-direction:column;justify-content:space-between}\n.hero .navbar{background:0 0}\n.hero .tabs ul{border-bottom:none}\n.hero.is-white{background-color:#fff;color:#0a0a0a}\n.hero.is-white a:not(.button):not(.dropdown-item):not(.tag),.hero.is-white strong{color:inherit}\n.hero.is-white .title{color:#0a0a0a}\n.hero.is-white .subtitle{color:rgba(10,10,10,.9)}\n.hero.is-white .subtitle a:not(.button),.hero.is-white .subtitle strong{color:#0a0a0a}\n@media screen and (max-width:1087px){.hero.is-white .navbar-menu{background-color:#fff}}\n.hero.is-white .navbar-item,.hero.is-white .navbar-link{color:rgba(10,10,10,.7)}\n.hero.is-white .navbar-link.is-active,.hero.is-white .navbar-link:hover,.hero.is-white a.navbar-item.is-active,.hero.is-white a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}\n.hero.is-white .tabs a{color:#0a0a0a;opacity:.9}\n.hero.is-white .tabs a:hover{opacity:1}\n.hero.is-white .tabs li.is-active a{opacity:1}\n.hero.is-white .tabs.is-boxed a,.hero.is-white .tabs.is-toggle a{color:#0a0a0a}\n.hero.is-white .tabs.is-boxed a:hover,.hero.is-white .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}\n.hero.is-white .tabs.is-boxed li.is-active a,.hero.is-white .tabs.is-boxed li.is-active a:hover,.hero.is-white .tabs.is-toggle li.is-active a,.hero.is-white .tabs.is-toggle li.is-active a:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}\n.hero.is-white.is-bold{background-image:linear-gradient(141deg,#e6e6e6 0,#fff 71%,#fff 100%)}\n@media screen and (max-width:768px){.hero.is-white.is-bold .navbar-menu{background-image:linear-gradient(141deg,#e6e6e6 0,#fff 71%,#fff 100%)}}\n.hero.is-black{background-color:#0a0a0a;color:#fff}\n.hero.is-black a:not(.button):not(.dropdown-item):not(.tag),.hero.is-black strong{color:inherit}\n.hero.is-black .title{color:#fff}\n.hero.is-black .subtitle{color:rgba(255,255,255,.9)}\n.hero.is-black .subtitle a:not(.button),.hero.is-black .subtitle strong{color:#fff}\n@media screen and (max-width:1087px){.hero.is-black .navbar-menu{background-color:#0a0a0a}}\n.hero.is-black .navbar-item,.hero.is-black .navbar-link{color:rgba(255,255,255,.7)}\n.hero.is-black .navbar-link.is-active,.hero.is-black .navbar-link:hover,.hero.is-black a.navbar-item.is-active,.hero.is-black a.navbar-item:hover{background-color:#000;color:#fff}\n.hero.is-black .tabs a{color:#fff;opacity:.9}\n.hero.is-black .tabs a:hover{opacity:1}\n.hero.is-black .tabs li.is-active a{opacity:1}\n.hero.is-black .tabs.is-boxed a,.hero.is-black .tabs.is-toggle a{color:#fff}\n.hero.is-black .tabs.is-boxed a:hover,.hero.is-black .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}\n.hero.is-black .tabs.is-boxed li.is-active a,.hero.is-black .tabs.is-boxed li.is-active a:hover,.hero.is-black .tabs.is-toggle li.is-active a,.hero.is-black .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}\n.hero.is-black.is-bold{background-image:linear-gradient(141deg,#000 0,#0a0a0a 71%,#181616 100%)}\n@media screen and (max-width:768px){.hero.is-black.is-bold .navbar-menu{background-image:linear-gradient(141deg,#000 0,#0a0a0a 71%,#181616 100%)}}\n.hero.is-light{background-color:#f5f5f5;color:#363636}\n.hero.is-light a:not(.button):not(.dropdown-item):not(.tag),.hero.is-light strong{color:inherit}\n.hero.is-light .title{color:#363636}\n.hero.is-light .subtitle{color:rgba(54,54,54,.9)}\n.hero.is-light .subtitle a:not(.button),.hero.is-light .subtitle strong{color:#363636}\n@media screen and (max-width:1087px){.hero.is-light .navbar-menu{background-color:#f5f5f5}}\n.hero.is-light .navbar-item,.hero.is-light .navbar-link{color:rgba(54,54,54,.7)}\n.hero.is-light .navbar-link.is-active,.hero.is-light .navbar-link:hover,.hero.is-light a.navbar-item.is-active,.hero.is-light a.navbar-item:hover{background-color:#e8e8e8;color:#363636}\n.hero.is-light .tabs a{color:#363636;opacity:.9}\n.hero.is-light .tabs a:hover{opacity:1}\n.hero.is-light .tabs li.is-active a{opacity:1}\n.hero.is-light .tabs.is-boxed a,.hero.is-light .tabs.is-toggle a{color:#363636}\n.hero.is-light .tabs.is-boxed a:hover,.hero.is-light .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}\n.hero.is-light .tabs.is-boxed li.is-active a,.hero.is-light .tabs.is-boxed li.is-active a:hover,.hero.is-light .tabs.is-toggle li.is-active a,.hero.is-light .tabs.is-toggle li.is-active a:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}\n.hero.is-light.is-bold{background-image:linear-gradient(141deg,#dfd8d9 0,#f5f5f5 71%,#fff 100%)}\n@media screen and (max-width:768px){.hero.is-light.is-bold .navbar-menu{background-image:linear-gradient(141deg,#dfd8d9 0,#f5f5f5 71%,#fff 100%)}}\n.hero.is-dark{background-color:#363636;color:#f5f5f5}\n.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag),.hero.is-dark strong{color:inherit}\n.hero.is-dark .title{color:#f5f5f5}\n.hero.is-dark .subtitle{color:rgba(245,245,245,.9)}\n.hero.is-dark .subtitle a:not(.button),.hero.is-dark .subtitle strong{color:#f5f5f5}\n@media screen and (max-width:1087px){.hero.is-dark .navbar-menu{background-color:#363636}}\n.hero.is-dark .navbar-item,.hero.is-dark .navbar-link{color:rgba(245,245,245,.7)}\n.hero.is-dark .navbar-link.is-active,.hero.is-dark .navbar-link:hover,.hero.is-dark a.navbar-item.is-active,.hero.is-dark a.navbar-item:hover{background-color:#292929;color:#f5f5f5}\n.hero.is-dark .tabs a{color:#f5f5f5;opacity:.9}\n.hero.is-dark .tabs a:hover{opacity:1}\n.hero.is-dark .tabs li.is-active a{opacity:1}\n.hero.is-dark .tabs.is-boxed a,.hero.is-dark .tabs.is-toggle a{color:#f5f5f5}\n.hero.is-dark .tabs.is-boxed a:hover,.hero.is-dark .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}\n.hero.is-dark .tabs.is-boxed li.is-active a,.hero.is-dark .tabs.is-boxed li.is-active a:hover,.hero.is-dark .tabs.is-toggle li.is-active a,.hero.is-dark .tabs.is-toggle li.is-active a:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}\n.hero.is-dark.is-bold{background-image:linear-gradient(141deg,#1f191a 0,#363636 71%,#46403f 100%)}\n@media screen and (max-width:768px){.hero.is-dark.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1f191a 0,#363636 71%,#46403f 100%)}}\n.hero.is-primary{background-color:#00d1b2;color:#fff}\n.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag),.hero.is-primary strong{color:inherit}\n.hero.is-primary .title{color:#fff}\n.hero.is-primary .subtitle{color:rgba(255,255,255,.9)}\n.hero.is-primary .subtitle a:not(.button),.hero.is-primary .subtitle strong{color:#fff}\n@media screen and (max-width:1087px){.hero.is-primary .navbar-menu{background-color:#00d1b2}}\n.hero.is-primary .navbar-item,.hero.is-primary .navbar-link{color:rgba(255,255,255,.7)}\n.hero.is-primary .navbar-link.is-active,.hero.is-primary .navbar-link:hover,.hero.is-primary a.navbar-item.is-active,.hero.is-primary a.navbar-item:hover{background-color:#00b89c;color:#fff}\n.hero.is-primary .tabs a{color:#fff;opacity:.9}\n.hero.is-primary .tabs a:hover{opacity:1}\n.hero.is-primary .tabs li.is-active a{opacity:1}\n.hero.is-primary .tabs.is-boxed a,.hero.is-primary .tabs.is-toggle a{color:#fff}\n.hero.is-primary .tabs.is-boxed a:hover,.hero.is-primary .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}\n.hero.is-primary .tabs.is-boxed li.is-active a,.hero.is-primary .tabs.is-boxed li.is-active a:hover,.hero.is-primary .tabs.is-toggle li.is-active a,.hero.is-primary .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#00d1b2}\n.hero.is-primary.is-bold{background-image:linear-gradient(141deg,#009e6c 0,#00d1b2 71%,#00e7eb 100%)}\n@media screen and (max-width:768px){.hero.is-primary.is-bold .navbar-menu{background-image:linear-gradient(141deg,#009e6c 0,#00d1b2 71%,#00e7eb 100%)}}\n.hero.is-link{background-color:#3273dc;color:#fff}\n.hero.is-link a:not(.button):not(.dropdown-item):not(.tag),.hero.is-link strong{color:inherit}\n.hero.is-link .title{color:#fff}\n.hero.is-link .subtitle{color:rgba(255,255,255,.9)}\n.hero.is-link .subtitle a:not(.button),.hero.is-link .subtitle strong{color:#fff}\n@media screen and (max-width:1087px){.hero.is-link .navbar-menu{background-color:#3273dc}}\n.hero.is-link .navbar-item,.hero.is-link .navbar-link{color:rgba(255,255,255,.7)}\n.hero.is-link .navbar-link.is-active,.hero.is-link .navbar-link:hover,.hero.is-link a.navbar-item.is-active,.hero.is-link a.navbar-item:hover{background-color:#2366d1;color:#fff}\n.hero.is-link .tabs a{color:#fff;opacity:.9}\n.hero.is-link .tabs a:hover{opacity:1}\n.hero.is-link .tabs li.is-active a{opacity:1}\n.hero.is-link .tabs.is-boxed a,.hero.is-link .tabs.is-toggle a{color:#fff}\n.hero.is-link .tabs.is-boxed a:hover,.hero.is-link .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}\n.hero.is-link .tabs.is-boxed li.is-active a,.hero.is-link .tabs.is-boxed li.is-active a:hover,.hero.is-link .tabs.is-toggle li.is-active a,.hero.is-link .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#3273dc}\n.hero.is-link.is-bold{background-image:linear-gradient(141deg,#1577c6 0,#3273dc 71%,#4366e5 100%)}\n@media screen and (max-width:768px){.hero.is-link.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1577c6 0,#3273dc 71%,#4366e5 100%)}}\n.hero.is-info{background-color:#209cee;color:#fff}\n.hero.is-info a:not(.button):not(.dropdown-item):not(.tag),.hero.is-info strong{color:inherit}\n.hero.is-info .title{color:#fff}\n.hero.is-info .subtitle{color:rgba(255,255,255,.9)}\n.hero.is-info .subtitle a:not(.button),.hero.is-info .subtitle strong{color:#fff}\n@media screen and (max-width:1087px){.hero.is-info .navbar-menu{background-color:#209cee}}\n.hero.is-info .navbar-item,.hero.is-info .navbar-link{color:rgba(255,255,255,.7)}\n.hero.is-info .navbar-link.is-active,.hero.is-info .navbar-link:hover,.hero.is-info a.navbar-item.is-active,.hero.is-info a.navbar-item:hover{background-color:#118fe4;color:#fff}\n.hero.is-info .tabs a{color:#fff;opacity:.9}\n.hero.is-info .tabs a:hover{opacity:1}\n.hero.is-info .tabs li.is-active a{opacity:1}\n.hero.is-info .tabs.is-boxed a,.hero.is-info .tabs.is-toggle a{color:#fff}\n.hero.is-info .tabs.is-boxed a:hover,.hero.is-info .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}\n.hero.is-info .tabs.is-boxed li.is-active a,.hero.is-info .tabs.is-boxed li.is-active a:hover,.hero.is-info .tabs.is-toggle li.is-active a,.hero.is-info .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#209cee}\n.hero.is-info.is-bold{background-image:linear-gradient(141deg,#04a6d7 0,#209cee 71%,#3287f5 100%)}\n@media screen and (max-width:768px){.hero.is-info.is-bold .navbar-menu{background-image:linear-gradient(141deg,#04a6d7 0,#209cee 71%,#3287f5 100%)}}\n.hero.is-success{background-color:#23d160;color:#fff}\n.hero.is-success a:not(.button):not(.dropdown-item):not(.tag),.hero.is-success strong{color:inherit}\n.hero.is-success .title{color:#fff}\n.hero.is-success .subtitle{color:rgba(255,255,255,.9)}\n.hero.is-success .subtitle a:not(.button),.hero.is-success .subtitle strong{color:#fff}\n@media screen and (max-width:1087px){.hero.is-success .navbar-menu{background-color:#23d160}}\n.hero.is-success .navbar-item,.hero.is-success .navbar-link{color:rgba(255,255,255,.7)}\n.hero.is-success .navbar-link.is-active,.hero.is-success .navbar-link:hover,.hero.is-success a.navbar-item.is-active,.hero.is-success a.navbar-item:hover{background-color:#20bc56;color:#fff}\n.hero.is-success .tabs a{color:#fff;opacity:.9}\n.hero.is-success .tabs a:hover{opacity:1}\n.hero.is-success .tabs li.is-active a{opacity:1}\n.hero.is-success .tabs.is-boxed a,.hero.is-success .tabs.is-toggle a{color:#fff}\n.hero.is-success .tabs.is-boxed a:hover,.hero.is-success .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}\n.hero.is-success .tabs.is-boxed li.is-active a,.hero.is-success .tabs.is-boxed li.is-active a:hover,.hero.is-success .tabs.is-toggle li.is-active a,.hero.is-success .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#23d160}\n.hero.is-success.is-bold{background-image:linear-gradient(141deg,#12af2f 0,#23d160 71%,#2ce28a 100%)}\n@media screen and (max-width:768px){.hero.is-success.is-bold .navbar-menu{background-image:linear-gradient(141deg,#12af2f 0,#23d160 71%,#2ce28a 100%)}}\n.hero.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}\n.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag),.hero.is-warning strong{color:inherit}\n.hero.is-warning .title{color:rgba(0,0,0,.7)}\n.hero.is-warning .subtitle{color:rgba(0,0,0,.9)}\n.hero.is-warning .subtitle a:not(.button),.hero.is-warning .subtitle strong{color:rgba(0,0,0,.7)}\n@media screen and (max-width:1087px){.hero.is-warning .navbar-menu{background-color:#ffdd57}}\n.hero.is-warning .navbar-item,.hero.is-warning .navbar-link{color:rgba(0,0,0,.7)}\n.hero.is-warning .navbar-link.is-active,.hero.is-warning .navbar-link:hover,.hero.is-warning a.navbar-item.is-active,.hero.is-warning a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}\n.hero.is-warning .tabs a{color:rgba(0,0,0,.7);opacity:.9}\n.hero.is-warning .tabs a:hover{opacity:1}\n.hero.is-warning .tabs li.is-active a{opacity:1}\n.hero.is-warning .tabs.is-boxed a,.hero.is-warning .tabs.is-toggle a{color:rgba(0,0,0,.7)}\n.hero.is-warning .tabs.is-boxed a:hover,.hero.is-warning .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}\n.hero.is-warning .tabs.is-boxed li.is-active a,.hero.is-warning .tabs.is-boxed li.is-active a:hover,.hero.is-warning .tabs.is-toggle li.is-active a,.hero.is-warning .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#ffdd57}\n.hero.is-warning.is-bold{background-image:linear-gradient(141deg,#ffaf24 0,#ffdd57 71%,#fffa70 100%)}\n@media screen and (max-width:768px){.hero.is-warning.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ffaf24 0,#ffdd57 71%,#fffa70 100%)}}\n.hero.is-danger{background-color:#ff3860;color:#fff}\n.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag),.hero.is-danger strong{color:inherit}\n.hero.is-danger .title{color:#fff}\n.hero.is-danger .subtitle{color:rgba(255,255,255,.9)}\n.hero.is-danger .subtitle a:not(.button),.hero.is-danger .subtitle strong{color:#fff}\n@media screen and (max-width:1087px){.hero.is-danger .navbar-menu{background-color:#ff3860}}\n.hero.is-danger .navbar-item,.hero.is-danger .navbar-link{color:rgba(255,255,255,.7)}\n.hero.is-danger .navbar-link.is-active,.hero.is-danger .navbar-link:hover,.hero.is-danger a.navbar-item.is-active,.hero.is-danger a.navbar-item:hover{background-color:#ff1f4b;color:#fff}\n.hero.is-danger .tabs a{color:#fff;opacity:.9}\n.hero.is-danger .tabs a:hover{opacity:1}\n.hero.is-danger .tabs li.is-active a{opacity:1}\n.hero.is-danger .tabs.is-boxed a,.hero.is-danger .tabs.is-toggle a{color:#fff}\n.hero.is-danger .tabs.is-boxed a:hover,.hero.is-danger .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}\n.hero.is-danger .tabs.is-boxed li.is-active a,.hero.is-danger .tabs.is-boxed li.is-active a:hover,.hero.is-danger .tabs.is-toggle li.is-active a,.hero.is-danger .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#ff3860}\n.hero.is-danger.is-bold{background-image:linear-gradient(141deg,#ff0561 0,#ff3860 71%,#ff5257 100%)}\n@media screen and (max-width:768px){.hero.is-danger.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ff0561 0,#ff3860 71%,#ff5257 100%)}}\n.hero.is-small .hero-body{padding-bottom:1.5rem;padding-top:1.5rem}\n@media screen and (min-width:769px), print{.hero.is-medium .hero-body{padding-bottom:9rem;padding-top:9rem}}\n@media screen and (min-width:769px), print{.hero.is-large .hero-body{padding-bottom:18rem;padding-top:18rem}}\n.hero.is-fullheight .hero-body,.hero.is-halfheight .hero-body{align-items:center;display:flex}\n.hero.is-fullheight .hero-body>.container,.hero.is-halfheight .hero-body>.container{flex-grow:1;flex-shrink:1}\n.hero.is-halfheight{min-height:50vh}\n.hero.is-fullheight{min-height:100vh}\n.hero-video{overflow:hidden}\n.hero-video video{left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}\n.hero-video.is-transparent{opacity:.3}\n@media screen and (max-width:768px){.hero-video{display:none}}\n.hero-buttons{margin-top:1.5rem}\n@media screen and (max-width:768px){.hero-buttons .button{display:flex}.hero-buttons .button:not(:last-child){margin-bottom:.75rem}}\n@media screen and (min-width:769px), print{.hero-buttons{display:flex;justify-content:center}.hero-buttons .button:not(:last-child){margin-right:1.5rem}}\n.hero-foot,.hero-head{flex-grow:0;flex-shrink:0}\n.hero-body{flex-grow:1;flex-shrink:0;padding:3rem 1.5rem}\n.section{padding:3rem 1.5rem}\n@media screen and (min-width:1088px){.section.is-medium{padding:9rem 1.5rem}.section.is-large{padding:18rem 1.5rem}}\n.footer{background-color:#fafafa;padding:3rem 1.5rem 6rem}\n.device-wrapper {\n  height: 920px;\n  padding: 6.9rem;\n  padding-left: 2.5rem;\n  background-image: url('iphone_portrait_black.png');\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n  background-position: left top;\n  z-index: -1; }\n.device {\n  width: 380px;\n  height: 607px;\n  position: absolute;\n  overflow: hidden; }\n"

/***/ }),

/***/ "./client/app/app.component.ts":
/*!*************************************!*\
  !*** ./client/app/app.component.ts ***!
  \*************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.mobile = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.calcHeight = window.innerHeight * 0.958;
        this.frameHeight = window.innerHeight * 0.662;
        this.frameWidth = window.innerHeight * 0.400;
        var ua = navigator.userAgent;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
            this.mobile = true;
        else
            this.mobile = false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./client/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./client/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./client/app/app.module.ts":
/*!**********************************!*\
  !*** ./client/app/app.module.ts ***!
  \**********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./client/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./client/app/app-routing.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./client/app/components/login/login.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/registration/registration.component */ "./client/app/components/registration/registration.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ "./client/app/guards/auth.guard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _components_not_found__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/not-found */ "./client/app/components/not-found/index.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/alert.service */ "./client/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sharedModule/shared.module */ "./client/app/sharedModule/shared.module.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/category.service */ "./client/app/services/category.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./client/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"],
                _components_not_found__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
                _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production })
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"],
                _services_category_service__WEBPACK_IMPORTED_MODULE_15__["CategoryService"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./client/app/components/login/login.component.html":
/*!**********************************************************!*\
  !*** ./client/app/components/login/login.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container fullscreenBackground\">\n  <div class=\"circleBackground\"></div>\n  <div class=\"columns is-mobile\">\n    <div class=\"column is-6 box colorMargin\">\n      <div style=\"margin-bottom: 1rem;\">\n        <b>Einloggen</b>\n      </div>\n      <ul>\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n      </ul>\n    </div>\n    <div class=\"column is-6 box\" routerLink=\"/registration\">\n      <div style=\"margin-bottom: 1rem;\">\n        Registieren\n      </div>\n    </div>\n  </div>\n  <section class=\"login\" style=\"padding: 1rem; padding-top: 3rem\">\n    <form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\n      <input class=\"input is-medium\" type=\"email\" placeholder=\"Email\" id=\"mail\" required [(ngModel)]=\"model.mail\" name=\"mail\"\n        #mail=\"ngModel\">\n      <br>\n      <br>\n      <input class=\"input is-medium\" type=\"password\" placeholder=\"Passwort\" id=\"password\" required [(ngModel)]=\"model.password\"\n        name=\"password\" #mail=\"ngModel\">\n       <alert></alert> \n      <button class=\"button is-primary is-medium is-fullwidth\" style=\"margin-top:1.5rem\" [disabled]=\"!heroForm.form.valid\" type=\"submit\">Einloggen</button>\n    </form>\n  </section>\n</div>"

/***/ }),

/***/ "./client/app/components/login/login.component.scss":
/*!**********************************************************!*\
  !*** ./client/app/components/login/login.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  border-radius: 0px;\n  margin: 0px;\n  padding-top: 2rem;\n  padding-right: 0rem;\n  padding-bottom: 0px;\n  text-align: center;\n  padding-left: 0rem; }\n\nul {\n  list-style: none;\n  width: 100%;\n  font-size: 0; }\n\nli {\n  display: inline-block;\n  width: 25%;\n  height: 5px; }\n\nli:nth-child(1) {\n  background: #209cee; }\n\nli:nth-child(2) {\n  background: #ff3860; }\n\nli:nth-child(3) {\n  background: #ffdd57; }\n\nli:nth-child(4) {\n  background: #00d1b2; }\n\n.fullscreenBackground {\n  position: absolute;\n  min-height: 100%;\n  width: 100%;\n  overflow: hidden; }\n\n.circleBackground {\n  height: 30rem;\n  width: 30rem;\n  z-index: -1;\n  background-color: #209cee;\n  border-radius: 15rem;\n  position: absolute;\n  margin-top: 6rem;\n  margin-left: 7rem; }\n\n.button.is-primary[disabled] {\n  color: grey; }\n\n.button[disabled] {\n  opacity: 1 !important; }\n"

/***/ }),

/***/ "./client/app/components/login/login.component.ts":
/*!********************************************************!*\
  !*** ./client/app/components/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _models_UserData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/UserData */ "./client/app/models/UserData.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authSerive, router) {
        this.authSerive = authSerive;
        this.router = router;
        this.model = new _models_UserData__WEBPACK_IMPORTED_MODULE_2__["UserData"]("", "");
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authSerive.login(this.model).subscribe(function (response) {
            // login successful if there's a jwt token in the response      
            if (response.token && !_this.jwtHelper.isTokenExpired(response.token)) {
                // store jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', response.token);
                _this.router.navigate(['/home/kategorien']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./client/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./client/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./client/app/components/not-found/index.ts":
/*!**************************************************!*\
  !*** ./client/app/components/not-found/index.ts ***!
  \**************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component */ "./client/app/components/not-found/not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return _not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"]; });




/***/ }),

/***/ "./client/app/components/not-found/not-found.component.html":
/*!******************************************************************!*\
  !*** ./client/app/components/not-found/not-found.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tile is-primary\">\n  <p class=\"title\">{{status_text}}</p>\n</div>"

/***/ }),

/***/ "./client/app/components/not-found/not-found.component.ts":
/*!****************************************************************!*\
  !*** ./client/app/components/not-found/not-found.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
        this.status_text = '';
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        this.status_text = '404: Not found!';
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./not-found.component.html */ "./client/app/components/not-found/not-found.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./client/app/components/registration/registration.component.html":
/*!************************************************************************!*\
  !*** ./client/app/components/registration/registration.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container fullscreenBackground\" style=\"overflow: hidden;\">\n  <div class=\"circleBackground\" *ngIf=\"!login\"></div>\n  <div class=\"circleBackground login\" *ngIf=\"login\"></div>\n  <div class=\"columns is-mobile\">\n    <div class=\"column is-6 box\" [routerLink]=\"['/login']\">\n      Einloggen\n    </div>\n    <div class=\"column is-6 box\" style=\"padding-left: 0rem;\">\n      <div style=\"margin-bottom: 1rem;\">\n        <b>Registieren</b>\n      </div>\n      <ul>\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n      </ul>\n    </div>\n  </div>\n  <section class=\"registrieren-0\" *ngIf=\"state == 0\" style=\"padding: 1rem; padding-top: 2rem\">\n    <div class=\"select is-medium is-fullwidth\">\n      <select [(ngModel)]=\"user.teil_anrede\">\n        <option value=\"0\">Herr</option>\n        <option value=\"1\">Frau</option>\n        <option value=\"2\">Sonstiges</option>\n      </select>\n    </div>\n    <input class=\"input is-medium\" type=\"text\" placeholder=\"Vorname\" style=\"margin-top: 1.5rem\" [(ngModel)]=\"user.teil_vorname\">\n    <input class=\"input is-medium\" type=\"text\" placeholder=\"Nachname\" style=\"margin-top: 1.5rem\" [(ngModel)]=\"user.teil_nachname\">\n\n    <div class=\"columns is-mobile\" style=\"padding:1rem\">\n      <div class=\"column is-12\" style=\"padding: 0rem;\">\n        <button class=\"button is-info is-medium is-fullwidth\" style=\"margin-top:1.5rem\" (click)=\"state = state + 1\">\n          <div>Weiter</div>\n        </button>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"registrieren-1\" *ngIf=\"state == 1\" style=\"padding: 1rem; padding-top: 2rem\">\n    <input class=\"input is-medium\" type=\"text\" placeholder=\"Straße, Hausnummer\" [(ngModel)]=\"user.teil_strasse1\">\n    <input class=\"input is-medium\" type=\"text\" placeholder=\"PLZ\" style=\"margin-top: 1.5rem\" [(ngModel)]=\"user.teil_plz\">\n    <input class=\"input is-medium\" type=\"text\" placeholder=\"Wohnort\" style=\"margin-top: 1.5rem\" [(ngModel)]=\"user.teil_ort\">\n    <div class=\"columns is-mobile\" style=\"padding:1rem\">\n      <div class=\"column is-2\">\n        <div style=\"margin-top: 0.65rem;\" (click)=\"state = state - 1\">\n          <span class=\"icon\" style=\"color: #209cee; padding: 1.5rem; padding-left: 1rem\">\n            <i class=\"fa fa-chevron-left\"></i>\n          </span>\n        </div>\n      </div>\n      <div class=\"column is-10\" style=\"padding: 0rem;\">\n        <button class=\"button is-info is-medium is-fullwidth\" style=\"margin-top:1.5rem\" (click)=\"state = state + 1\">\n          <div>Weiter</div>\n        </button>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"registrieren-2\" *ngIf=\"state == 2\" style=\"padding: 1rem; padding-top: 0rem\">\n    <div class=\"column is-12\" style=\"font-size: 1.15rem; padding-bottom: 0.5rem; padding-left: 0rem;\">\n      Geburtsdatum\n    </div>\n    <div class=\"columns is-mobile\">\n      <div class=\"column is-4\">\n        <div class=\"select is-medium is-fullwidth\">\n          <select [(ngModel)]=\"birthday.day\">\n            <option value=\"Tag\" disabled selected>Tag</option>\n            <option *ngFor=\"let day of generate(1,31)\" [ngValue]=\"day\">{{day}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"column is-4\">\n        <div class=\"select is-medium is-fullwidth\">\n          <select [(ngModel)]=\"birthday.month\">\n            <option value=\"Monat\" disabled selected>Monat</option>\n            <option *ngFor=\"let month of generate(1,12)\" [ngValue]=\"month\">{{month}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"column is-4\">\n        <div class=\"select is-medium is-fullwidth\">\n          <select [(ngModel)]=\"birthday.year\">\n            <option value=\"Jahr\" disabled selected>Jahr</option>\n            <option *ngFor=\"let year of generate(1930,2018)\" [ngValue]=\"year\">{{year}}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <input class=\"input is-medium\" type=\"mail\" placeholder=\"Email\" [(ngModel)]=\"user.teil_email\">\n    <div class=\"columns is-mobile\" style=\"padding:1rem\">\n      <div class=\"column is-2\">\n        <div style=\"margin-top: 0.65rem;\" (click)=\"state = state - 1\">\n          <span class=\"icon\" style=\"color: #209cee; padding: 1.5rem; padding-left: 1rem\">\n            <i class=\"fa fa-chevron-left\"></i>\n          </span>\n        </div>\n      </div>\n      <div class=\"column is-10\" style=\"padding: 0rem;\">\n        <button class=\"button is-info is-medium is-fullwidth\" style=\"margin-top:1.5rem\" (click)=\"state = state + 1\">\n          <div>Weiter</div>\n        </button>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"registrieren-2\" *ngIf=\"state == 3\" style=\"padding: 1rem; padding-top: 2rem\">\n    <input class=\"input is-medium\" type=\"text\" placeholder=\"BLZ\" maxlength=\"8\" style=\"margin-top: 1.5rem\" [(ngModel)]=\"user.teil_blz\">\n    <input class=\"input is-medium\" type=\"text\" placeholder=\"IBAN\" maxlength=\"22\" style=\"margin-top: 1.5rem\" [(ngModel)]=\"user.teil_iban\">\n    <div class=\"columns is-mobile\" style=\"padding:1rem\">\n      <div class=\"column is-2\">\n        <div style=\"margin-top: 0.65rem;\" (click)=\"state = state - 1\">\n          <span class=\"icon\" style=\"color: #209cee; padding: 1.5rem; padding-left: 1rem\">\n            <i class=\"fa fa-chevron-left\"></i>\n          </span>\n        </div>\n      </div>\n      <div class=\"column is-10\" style=\"padding: 0rem;\">\n        <button class=\"button is-info is-medium is-fullwidth\" style=\"margin-top:1.5rem\" (click)=\"state = state + 1\">\n          <div>Weiter</div>\n        </button>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"registrieren-3\" *ngIf=\"state == 4\" style=\"padding: 1rem; padding-top: 2rem\">\n\n    <div class=\"columns is-mobile\" style=\"padding: 2rem; padding-bottom: 0rem; padding-left: 1rem;\">\n      <label class=\"checkContainer\">Hiermit akzeptiere ich die Allgemeinen Geschäftsbedingungen\n        <a href=\"#\">AGBs</a>\n        <input type=\"checkbox\" [(ngModel)]=\"agb_state\">\n        <span class=\"checkmark\"></span>\n      </label>\n    </div>\n\n    <div class=\"columns is-mobile\" style=\"padding: 2rem; padding-top: 1rem; padding-bottom: 0rem; padding-left: 1rem;\">\n      <label class=\"checkContainer\">Hiermit akzeptiere ich die Dateschutzerklärung\n        <a href=\"#\">DSE</a>\n        <input type=\"checkbox\" [(ngModel)]=\"dse_state\">\n        <span class=\"checkmark\"></span>\n      </label>\n    </div>\n\n    <div class=\"columns is-mobile\" style=\"padding:1rem;  padding-top: 0rem\">\n      <div class=\"column is-2\">\n        <div style=\"margin-top: 0.65rem;\" (click)=\"state = state - 1; login = false\">\n          <span class=\"icon\" style=\"color: #209cee; padding: 1.5rem; padding-left: 1rem;\">\n            <i class=\"fa fa-chevron-left\"></i>\n          </span>\n        </div>\n      </div>\n      <div class=\"column is-10\" style=\"padding: 0rem;\">\n        <button *ngIf=\"!login\" class=\"button is-info is-medium is-fullwidth\" style=\"margin-top:1.5rem\" (click)=\"onSubmit()\">\n          <div>Registieren</div>\n        </button>\n        <button *ngIf=\"login\" class=\"button is-primary is-medium is-fullwidth\" style=\"margin-top:1.5rem\" [(routerLink)]=\"categories\">\n          <div>Erfolgreich angemeldet</div>\n        </button>\n      </div>\n    </div>\n  </section>\n\n  <div class=\"has-text-centered\" style=\"padding: 2rem\">\n    <span class=\"dot\" [ngClass]=\"{'active': state==0}\" (click)=\"state = 0\"></span>\n    <span class=\"dot\" [ngClass]=\"{'active': state==1}\" (click)=\"state = 1\"></span>\n    <span class=\"dot\" [ngClass]=\"{'active': state==2}\" (click)=\"state = 2\"></span>\n    <span class=\"dot\" [ngClass]=\"{'active': state==3}\" (click)=\"state = 3\"></span>\n    <span class=\"dot\" [ngClass]=\"{'active': state==4}\" (click)=\"state = 4\"></span>\n  </div>\n\n  <div style=\"padding: 1rem\">\n    <alert></alert>\n  </div>\n</div>"

/***/ }),

/***/ "./client/app/components/registration/registration.component.scss":
/*!************************************************************************!*\
  !*** ./client/app/components/registration/registration.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  border-radius: 0px;\n  margin: 0px;\n  padding-top: 2rem;\n  padding-bottom: 0px;\n  text-align: center; }\n\n.dot {\n  height: 10px;\n  width: 10px;\n  background-color: white;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 0.2rem; }\n\n.active {\n  background-color: #209cee; }\n\nul {\n  list-style: none;\n  width: 100%;\n  font-size: 0; }\n\nli {\n  display: inline-block;\n  width: 25%;\n  height: 5px; }\n\nli:nth-child(1) {\n  background: #209cee; }\n\nli:nth-child(2) {\n  background: #ff3860; }\n\nli:nth-child(3) {\n  background: #ffdd57; }\n\nli:nth-child(4) {\n  background: #00d1b2; }\n\n.fullscreenBackground {\n  position: absolute;\n  min-height: 100%;\n  width: 100%;\n  overflow: hidden; }\n\n.circleBackground {\n  height: 30rem;\n  width: 30rem;\n  z-index: -1;\n  background-color: #00d1b2;\n  border-radius: 15rem;\n  position: absolute;\n  margin-top: 6rem;\n  margin-left: 7rem; }\n\n.login {\n  background-color: #209cee; }\n\n.button.is-primary[disabled] {\n  color: grey; }\n\n.button[disabled] {\n  opacity: 1 !important; }\n\n/* The container */\n\n.checkContainer {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 1.15rem;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default checkbox */\n\n.checkContainer input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  margin-top: 1rem; }\n\n/* Create a custom checkbox */\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee; }\n\n/* On mouse-over, add a grey background color */\n\n.checkContainer:hover input ~ .checkmark {\n  background-color: #ccc; }\n\n/* When the checkbox is checked, add a blue background */\n\n.checkContainer input:checked ~ .checkmark {\n  background-color: #2196F3; }\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n/* Show the checkmark when checked */\n\n.checkContainer input:checked ~ .checkmark:after {\n  display: block; }\n\n/* Style the checkmark/indicator */\n\n.checkContainer .checkmark:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n"

/***/ }),

/***/ "./client/app/components/registration/registration.component.ts":
/*!**********************************************************************!*\
  !*** ./client/app/components/registration/registration.component.ts ***!
  \**********************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_RegisterUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/RegisterUser */ "./client/app/models/RegisterUser.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/alert.service */ "./client/app/services/alert.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./client/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(userService, alertService) {
        this.userService = userService;
        this.alertService = alertService;
        this.state = 0;
        this.user = new _models_RegisterUser__WEBPACK_IMPORTED_MODULE_1__["RegisterUser"]("", "", "", "", this.parseDate(new Date(Date.now())), 0, this.parseDate(new Date(Date.now())), this.parseTime(new Date(Date.now())), "", "", "", "", "", "", 0);
        this.agb_state = false;
        this.dse_state = false;
        this.login = false;
        this.birthday = {
            day: 0,
            month: 0,
            year: 0
        };
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.validateUser()) {
            this.alertService.setErrorMessage("clear");
            this.userService.registerUser(this.user).subscribe(function (response) {
                if (response.name != "HttpResponseError") {
                    _this.login = true;
                }
            });
        }
    };
    RegistrationComponent.prototype.parseDate = function (date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + String(date.getDate());
    };
    RegistrationComponent.prototype.parseTime = function (date) {
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    };
    RegistrationComponent.prototype.parseBirthDate = function () {
        var dayOfBirth = new Date(Date.parse(this.birthday.year + " " + this.birthday.month + " " + this.birthday.day));
        this.user.teil_geburtsdatum = this.parseDate(dayOfBirth);
    };
    RegistrationComponent.prototype.validateUser = function () {
        this.parseBirthDate();
        if (!this.agb_state || !this.dse_state) {
            this.alertService.setErrorMessage("Akzeptiere bitte die AGBs und DSE.");
            this.state = 4;
            return false;
        }
        if (!this.validateEmail(this.user.teil_email)) {
            this.alertService.setErrorMessage("Bitte Mail ausfüllen.");
            this.state = 2;
            return false;
        }
        if (this.user.teil_geburtsdatum.includes("NaN")) {
            this.alertService.setErrorMessage("Bitte Datum ausfüllen.");
            this.state = 2;
            return false;
        }
        if (this.user.teil_vorname == "" || this.user.teil_nachname == "") {
            this.alertService.setErrorMessage("Bitte Vor- und Nachname ausfüllen.");
            this.state = 0;
            return false;
        }
        return true;
    };
    RegistrationComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    RegistrationComponent.prototype.generate = function (start, end) {
        var returnValue = [];
        for (var index = start; index < end + 1; index++) {
            returnValue.push(index);
        }
        return returnValue;
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./client/app/components/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./client/app/components/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./client/app/guards/auth.guard.ts":
/*!*****************************************!*\
  !*** ./client/app/guards/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./client/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isLoggedIn();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./client/app/models/RegisterUser.ts":
/*!*******************************************!*\
  !*** ./client/app/models/RegisterUser.ts ***!
  \*******************************************/
/*! exports provided: RegisterUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUser", function() { return RegisterUser; });
var RegisterUser = /** @class */ (function () {
    function RegisterUser(teil_vorname, teil_nachname, teil_email, teil_notizen, teil_geburtsdatum, eingegeben_von_user, eingegeben_am_datum, eingegeben_am_zeit, datenhistory, teil_strasse1, teil_ort, teil_plz, teil_blz, teil_iban, teil_anrede) {
        this.teil_vorname = teil_vorname;
        this.teil_nachname = teil_nachname;
        this.teil_email = teil_email;
        this.teil_notizen = teil_notizen;
        this.teil_geburtsdatum = teil_geburtsdatum;
        this.eingegeben_von_user = eingegeben_von_user;
        this.eingegeben_am_datum = eingegeben_am_datum;
        this.eingegeben_am_zeit = eingegeben_am_zeit;
        this.datenhistory = datenhistory;
        this.teil_strasse1 = teil_strasse1;
        this.teil_ort = teil_ort;
        this.teil_plz = teil_plz;
        this.teil_blz = teil_blz;
        this.teil_iban = teil_iban;
        this.teil_anrede = teil_anrede;
    }
    return RegisterUser;
}());



/***/ }),

/***/ "./client/app/models/User.ts":
/*!***********************************!*\
  !*** ./client/app/models/User.ts ***!
  \***********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(firstname, address, id, email, lastname) {
        this.email = email;
        this.address = address;
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
    }
    return User;
}());



/***/ }),

/***/ "./client/app/models/UserData.ts":
/*!***************************************!*\
  !*** ./client/app/models/UserData.ts ***!
  \***************************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
var UserData = /** @class */ (function () {
    function UserData(mail, password) {
        this.mail = mail;
        this.password = password;
    }
    return UserData;
}());



/***/ }),

/***/ "./client/app/selective-preloading-strategy.ts":
/*!*****************************************************!*\
  !*** ./client/app/selective-preloading-strategy.ts ***!
  \*****************************************************/
/*! exports provided: SelectivePreloadingStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectivePreloadingStrategy", function() { return SelectivePreloadingStrategy; });
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectivePreloadingStrategy = /** @class */ (function () {
    function SelectivePreloadingStrategy() {
        this.preloadedModules = [];
    }
    SelectivePreloadingStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            // add the route path to the preloaded module array
            this.preloadedModules.push(route.path);
            // log the route path to the console
            // console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
    };
    SelectivePreloadingStrategy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SelectivePreloadingStrategy);
    return SelectivePreloadingStrategy;
}());



/***/ }),

/***/ "./client/app/services/alert.service.ts":
/*!**********************************************!*\
  !*** ./client/app/services/alert.service.ts ***!
  \**********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.keepAfterNavigationChange = true;
        this.status_message = '';
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = true;
                }
                else {
                    // clear alert
                    _this.status_message = '';
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = true; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: this.mapMessage(message) });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = true; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: this.mapMessage(message) });
    };
    AlertService.prototype.setErrorMessage = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = true; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.clearMessage = function () {
        this.subject.next();
    };
    AlertService.prototype.getStatusText = function () {
        if (this.status_message) {
            return this.status_message;
        }
    };
    AlertService.prototype.mapMessageLogin = function (response) {
        if (response.status === 401 && response._body === '{"error":"invalid_client"}') {
            return 'Wrong username or password!';
        }
        else if (response.status === 403) {
            return 'User not allowed!';
        }
        else {
            return this.mapMessage(response);
        }
    };
    AlertService.prototype.mapMessage = function (response) {
        if (response.status === 400 && response.json().hasOwnProperty('message')) {
            var body = response.json();
            if (body.hasOwnProperty('error') && body.error === 'PATTERN') {
                return 'HTTP Status ' + response.status + '.';
            }
            else {
                return response.json().message;
            }
        }
        else if (response.status === 401) {
            return 'Email oder Password falsch.';
        }
        else if (response.status === 403) {
            return 'User not allowed!';
        }
        else if (response.status === 405) {
            return 'Method not allowed!';
        }
        else if (response.status === 409) {
            return 'Sie sind bereits angemeldet!';
        }
        else if (response.status === 503) {
            this.keepAfterNavigationChange = true;
            this.status_message = response.status + '\n' + 'Service Unavailable.';
            this.router.navigate(['/error']);
            return;
        }
        else if (response.status === 500) {
            this.keepAfterNavigationChange = true;
            this.status_message = response.status + '\n' + 'Internal Server Error.';
            this.router.navigate(['/error']);
            return;
        }
        else {
            if (response.name = "HttpResponseError") {
                return 'Verbindung unterbrochen.';
            }
            if (response === undefined || response === 0 || response.statusText === '') {
                return 'Connection Error!';
            }
            /*
             * This seems to be currently a bug in the angular library for http error response transition
             * that the statusText is not set properly. Therefore currently only status-code is printed back.
             */
            // return message.status + ': ' + message.statusText;
            return 'HTTP Status ' + response.status + '.';
        }
    };
    AlertService.prototype.push = function (err, login_page) {
        if (login_page === void 0) { login_page = false; }
        if (err instanceof Error) {
            // display error message for dev
            this.subject.next({ type: 'error', text: this.mapMessage(err) });
        }
        else {
            if (login_page) {
                this.subject.next({ type: 'error', text: this.mapMessageLogin(err) });
            }
            else {
                this.subject.next({ type: 'error', text: this.mapMessage(err) });
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./client/app/services/auth.service.ts":
/*!*********************************************!*\
  !*** ./client/app/services/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./client/environments/environment.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ "./client/app/services/alert.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(http, alertService, router) {
        this.http = http;
        this.alertService = alertService;
        this.router = router;
        this.authStatus = false;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]();
    }
    AuthService.prototype.isLoggedIn = function () {
        if (this.jwtHelper.isTokenExpired(localStorage.getItem('token'))) {
            this.navToLogin();
            this.authStatus = false;
        }
        else {
            this.authStatus = true;
        }
        if (!this.authStatus) {
            this.navToLogin();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(this.authStatus);
    };
    AuthService.prototype.navToLogin = function () {
        this.authStatus = false;
        this.router.navigate(['/login']).catch(function (error) {
            console.log(error);
        });
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.url + "/auth", { email: user.mail, password: user.password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.authStatus = true;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this.alertService.push(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(err);
        }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.authStatus = false;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./client/app/services/category.service.ts":
/*!*************************************************!*\
  !*** ./client/app/services/category.service.ts ***!
  \*************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./client/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "./client/app/services/alert.service.ts");
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






var CategoryService = /** @class */ (function () {
    function CategoryService(http, alertService) {
        this.http = http;
        this.alertService = alertService;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        };
    }
    CategoryService.prototype.getAllCategories = function () {
        var _this = this;
        return this.http.get(this.url + "/categories", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.alertService.push(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    CategoryService.prototype.getCoursesByCategoryId = function (courseId) {
        var _this = this;
        return this.http.get(this.url + "/categories/" + courseId + "/courses", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.alertService.push(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
        }));
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./client/app/services/user.service.ts":
/*!*********************************************!*\
  !*** ./client/app/services/user.service.ts ***!
  \*********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./client/environments/environment.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ "./client/app/services/alert.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/User */ "./client/app/models/User.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = /** @class */ (function () {
    function UserService(http, alertService) {
        this.http = http;
        this.alertService = alertService;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.httpOptions = {
            headers: new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        };
    }
    UserService.prototype.getUserMe = function () {
        var _this = this;
        return this.http.get(this.url + "/user/me", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this.alertService.push(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err);
        }));
    };
    UserService.prototype.updateUserMe = function (user) {
        var _this = this;
        return this.http.put(this.url + "/user/me", user, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return Object.assign(_models_User__WEBPACK_IMPORTED_MODULE_5__["User"], res);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this.alertService.push(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err);
        }));
    };
    UserService.prototype.registerUser = function (user) {
        var _this = this;
        return this.http.post(this.url + "/user", user, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return Object.assign(_models_User__WEBPACK_IMPORTED_MODULE_5__["User"], res);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this.alertService.push(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err);
        }));
    };
    UserService.prototype.getCoursesByUser = function () {
        var _this = this;
        return this.http.get(this.url + "/user/me/courses", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this.alertService.push(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err);
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./client/app/sharedModule/alert/alert.component.html":
/*!************************************************************!*\
  !*** ./client/app/sharedModule/alert/alert.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"notification is-danger\" *ngIf=\"message\" style=\"margin-top:1.5rem\">\n      <button class=\"delete\" (click)=\"message = null\"></button>\n      {{message.text}}\n    </div>"

/***/ }),

/***/ "./client/app/sharedModule/alert/alert.component.scss":
/*!************************************************************!*\
  !*** ./client/app/sharedModule/alert/alert.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navOpen {\n  margin-left: 24%; }\n\n.notification > .delete {\n  position: relative;\n  right: -1rem;\n  top: .1rem;\n  float: right; }\n"

/***/ }),

/***/ "./client/app/sharedModule/alert/alert.component.ts":
/*!**********************************************************!*\
  !*** ./client/app/sharedModule/alert/alert.component.ts ***!
  \**********************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alert.service */ "./client/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.navStatus = true;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.alertService.getStatusText()) {
            this.message = { text: this.alertService.getStatusText() };
        }
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            console.log(message);
            try {
                if (message.text == "clear") {
                    _this.message = null;
                }
                else {
                    _this.message = message;
                }
            }
            catch (error) {
            }
        });
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./client/app/sharedModule/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./client/app/sharedModule/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./client/app/sharedModule/shared.module.ts":
/*!**************************************************!*\
  !*** ./client/app/sharedModule/shared.module.ts ***!
  \**************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert/alert.component */ "./client/app/sharedModule/alert/alert.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alert.service */ "./client/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            declarations: [
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]
            ],
            providers: [
                _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
            ],
            exports: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./client/environments/environment.ts":
/*!********************************************!*\
  !*** ./client/environments/environment.ts ***!
  \********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    apiUrl: 'http://localhost:8080/v1'
};


/***/ }),

/***/ "./client/main.ts":
/*!************************!*\
  !*** ./client/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./client/app/app.module.ts");



/*if (environment.production) {
  enableProdMode();
}*/
Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
console.log(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])());
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
});


/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./client/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hmSchuller/dev/PS_SS18_vhsLangquaid/client/main.ts */"./client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
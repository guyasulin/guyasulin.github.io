(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-shelf/book-shelf.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-shelf/book-shelf.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"book-shelf\">\r\n    <div *ngFor=\"let book of books\">\r\n        <app-book [book]=\"book\"></app-book>\r\n    </div>\r\n    <mat-paginator \r\n        [length]=\"totalItems\"\r\n        [pageSize]=\"20\" \r\n        [pageSizeOptions]=\"[5, 10, 20]\" \r\n        (page)=\"pageEvent($event)\">\r\n    </mat-paginator>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/book/book.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book/book.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"book\">\r\n    <div class=\"card-group\">\r\n        <div class=\"card\">\r\n            <img [src]=\"book.volumeInfo?.imageLinks?.smallThumbnail\" class=\"card-img-top\">\r\n\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{ book.volumeInfo.title }}\r\n                </h5>\r\n                <h5 class=\"card-title\">{{ book.volumeInfo.subtitle }}</h5>\r\n                <h5 class=\"card-title\">{{ book.volumeInfo.publishedDate }}</h5>\r\n            </div>\r\n\r\n            <div class=\"footer\">\r\n                <button type=\"button\" class=\"btn-details\" (click)=\"openDialogBook()\">More Details</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-page\">\r\n    <div>\r\n        <form #form=\"ngForm\">\r\n            <h4>Set a username to move to the search page</h4>\r\n            <mat-form-field class=\"form-field\" appearance=\"fill\">\r\n                <mat-label>userName</mat-label>\r\n                <input class=\"inputText\" matInput type=\"text\" [(ngModel)]=\"userName\" name=\"userName\" required>\r\n                <mat-error *ngIf=\"!form.hasError('text') && !form.hasError('required')\">\r\n                        Please enter a userName\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <button class=\"btn-next\" type=\"submit\" [disabled]=\"!form.valid\" (click)=\"goSearchPage()\">Next</button>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navbar\">\r\n  <mat-toolbar>\r\n    <mat-toolbar-row>\r\n      <div class=\"user-message\">\r\n        <p> Welcome {{ userName }}</p>\r\n      </div>\r\n      <div class=\"component-navigation\">\r\n        <span routerLink=\"/searchPage/{{ userName }}\">SearchBar</span>\r\n        <span routerLink=\"/wishlist/{{ userName }}\">Wishlist</span>\r\n      </div>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/popup/book-details/book-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popup/book-details/book-details.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"book-details\">\r\n  <div>\r\n    <div class=\"title\">\r\n      <h1 mat-dialog-title>{{ book.volumeInfo.title }}</h1>\r\n    </div>\r\n    <div class=\"content\" mat-dialog-content>\r\n      <p>{{ book.volumeInfo.subtitle }}</p>\r\n      <p>{{ book.volumeInfo.publishedDate }}</p>\r\n      <p>{{ book.volumeInfo.authors }}</p>\r\n      <p>{{ book.volumeInfo.publisher }}</p>\r\n    </div>\r\n    <div class=\"footer\" mat-dialog-actions>\r\n      <button mat-button class=\"btn btn-close\" (click)=\"onNoClick()\">Close</button>\r\n      <button mat-button class=\"btn btn-save\" (click)=\"saveBook()\">Save</button>\r\n        <button mat-button class=\"btn btn-delete\" (click)=\"deleteBook()\">Delete</button>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-bar/search-bar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-bar/search-bar.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-bar\">\r\n    <app-navbar [userName]=\"userName\"></app-navbar>\r\n\r\n    <div class=\"search\">\r\n        <input class=\"searchPut\" name=\"bookName\" [(ngModel)]=\"bookName\" (ngModelChange)=\"searchBook()\" autofocus\r\n            debounceTime=\"2000000\" placeholder=\"Search Book\">\r\n    </div>\r\n\r\n\r\n    <app-book-shelf [books]=\"books\" [totalItems]=\"totalItems\"></app-book-shelf>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wishlist\">\r\n    <div>\r\n        <app-navbar [userName]=\"userName\"></app-navbar>\r\n        <app-book-shelf [books]=\"wishlist\" [totalItems]=\"wishlist.length\"></app-book-shelf>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");






const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'navbar/:userName', component: _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponent"] },
    { path: 'searchPage/:userName', component: _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponent"] },
    { path: 'wishlist/:userName', component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_5__["WishlistComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'search';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _book_shelf_book_shelf_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./book-shelf/book-shelf.component */ "./src/app/book-shelf/book-shelf.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _popup_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./popup/book-details/book-details.component */ "./src/app/popup/book-details/book-details.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"],
            _book_shelf_book_shelf_component__WEBPACK_IMPORTED_MODULE_11__["BookShelfComponent"],
            _book_book_component__WEBPACK_IMPORTED_MODULE_12__["BookComponent"],
            _popup_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_13__["BookDetailsComponent"],
            _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_16__["WishlistComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"]
        ],
        exports: [
            _book_shelf_book_shelf_component__WEBPACK_IMPORTED_MODULE_11__["BookShelfComponent"],
        ],
        entryComponents: [
            _book_shelf_book_shelf_component__WEBPACK_IMPORTED_MODULE_11__["BookShelfComponent"],
            _popup_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_13__["BookDetailsComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/book-shelf/book-shelf.component.scss":
/*!******************************************************!*\
  !*** ./src/app/book-shelf/book-shelf.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".book-shelf {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.book-shelf > div {\n  display: inline-block;\n  padding: 55px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1zaGVsZi9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXE5ldyBmb2xkZXIgKDIpXFxib29rU2VhcmNoLWFwcFxcc2VhcmNoL3NyY1xcYXBwXFxib29rLXNoZWxmXFxib29rLXNoZWxmLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ib29rLXNoZWxmL2Jvb2stc2hlbGYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stc2hlbGYvYm9vay1zaGVsZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rLXNoZWxmIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgPiBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiA1NXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59IiwiLmJvb2stc2hlbGYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmJvb2stc2hlbGYgPiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDU1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/book-shelf/book-shelf.component.ts":
/*!****************************************************!*\
  !*** ./src/app/book-shelf/book-shelf.component.ts ***!
  \****************************************************/
/*! exports provided: BookShelfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookShelfComponent", function() { return BookShelfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");



let BookShelfComponent = class BookShelfComponent {
    constructor(searchService) {
        this.searchService = searchService;
    }
    ngOnInit() {
    }
    pageEvent(event) {
        this.searchService.getBooks(null, event.pageIndex)
            .subscribe(res => {
            this.books = res.items;
        });
    }
};
BookShelfComponent.ctorParameters = () => [
    { type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BookShelfComponent.prototype, "books", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BookShelfComponent.prototype, "totalItems", void 0);
BookShelfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-shelf',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-shelf.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-shelf/book-shelf.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-shelf.component.scss */ "./src/app/book-shelf/book-shelf.component.scss")).default]
    })
], BookShelfComponent);



/***/ }),

/***/ "./src/app/book/book.component.scss":
/*!******************************************!*\
  !*** ./src/app/book/book.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".book .card-group .card {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  margin: 0 15px 20px;\n  width: 250px;\n}\n.book .card-group .card .card-img-top {\n  height: 320px;\n  width: 250px;\n}\n.book .card-group .card .card-body {\n  padding: 0 15px;\n  height: 150px;\n  overflow: auto;\n}\n.book .card-group .card .footer {\n  padding: 15px;\n}\n.book .card-group .card .footer .btn-details {\n  padding: 8px 15px;\n  color: white;\n  cursor: pointer;\n  font-size: 14px;\n  border: transparent;\n  letter-spacing: 1.25px;\n  background-color: cadetblue;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.39);\n  border-radius: 2.6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXE5ldyBmb2xkZXIgKDIpXFxib29rU2VhcmNoLWFwcFxcc2VhcmNoL3NyY1xcYXBwXFxib29rXFxib29rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ib29rL2Jvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RaO0FER1k7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0RoQjtBRElZO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDRmhCO0FES1k7RUFDSSxhQUFBO0FDSGhCO0FESWdCO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtFQUNBLG9CQUFBO0FDRnBCIiwiZmlsZSI6InNyYy9hcHAvYm9vay9ib29rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2sge1xyXG4gICAgLmNhcmQtZ3JvdXAge1xyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHggMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG5cclxuICAgICAgICAgICAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICAgICAgICAgICAgICAuYnRuLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmNhZGV0Ymx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyLjZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5ib29rIC5jYXJkLWdyb3VwIC5jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIG1hcmdpbjogMCAxNXB4IDIwcHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cbi5ib29rIC5jYXJkLWdyb3VwIC5jYXJkIC5jYXJkLWltZy10b3Age1xuICBoZWlnaHQ6IDMyMHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG4uYm9vayAuY2FyZC1ncm91cCAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5ib29rIC5jYXJkLWdyb3VwIC5jYXJkIC5mb290ZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmJvb2sgLmNhcmQtZ3JvdXAgLmNhcmQgLmZvb3RlciAuYnRuLWRldGFpbHMge1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM5KTtcbiAgYm9yZGVyLXJhZGl1czogMi42cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _popup_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popup/book-details/book-details.component */ "./src/app/popup/book-details/book-details.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");




let BookComponent = class BookComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    openDialogBook() {
        const dialogRef = this.dialog.open(_popup_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_2__["BookDetailsComponent"], {
            width: '400px',
            data: this.book,
            panelClass: 'epsSelectorPanel'
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
};
BookComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BookComponent.prototype, "book", void 0);
BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/book/book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book.component.scss */ "./src/app/book/book.component.scss")).default]
    })
], BookComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .home-page {\n  text-align: center;\n  margin-top: 115px;\n}\n::ng-deep .home-page > div {\n  display: inline-block;\n  border: 1px solid #CFD8DC;\n  padding: 20px;\n  text-align: center;\n}\n::ng-deep .home-page > div .form-field {\n  display: block;\n}\n::ng-deep .home-page > div .btn-next {\n  padding: 8px 15px;\n  color: white;\n  cursor: pointer;\n  font-size: 14px;\n  border: transparent;\n  letter-spacing: 1.25px;\n  background-color: #0079FD;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.39);\n  border-radius: 2.6px;\n}\n::ng-deep .home-page > div .btn-next:disabled {\n  opacity: 0.5;\n  cursor: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXE5ldyBmb2xkZXIgKDIpXFxib29rU2VhcmNoLWFwcFxcc2VhcmNoL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQVI7QURFUTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNBWjtBREVZO0VBQ0ksY0FBQTtBQ0FoQjtBREVZO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG9CQUFBO0FDQWhCO0FERWdCO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNBcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gICAgLmhvbWUtcGFnZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDExNXB4O1xyXG5cclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NGRDhEQztcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLmZvcm0tZmllbGQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi1uZXh0IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OUZEO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zOSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyLjZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCI6Om5nLWRlZXAgLmhvbWUtcGFnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTE1cHg7XG59XG46Om5nLWRlZXAgLmhvbWUtcGFnZSA+IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI0NGRDhEQztcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5ob21lLXBhZ2UgPiBkaXYgLmZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjo6bmctZGVlcCAuaG9tZS1wYWdlID4gZGl2IC5idG4tbmV4dCB7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OUZEO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM5KTtcbiAgYm9yZGVyLXJhZGl1czogMi42cHg7XG59XG46Om5nLWRlZXAgLmhvbWUtcGFnZSA+IGRpdiAuYnRuLW5leHQ6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goSearchPage() {
        console.log(this.userName);
        this.router.navigate(['navbar', this.userName]);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/model/bookModel.ts":
/*!************************************!*\
  !*** ./src/app/model/bookModel.ts ***!
  \************************************/
/*! exports provided: BookModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookModel", function() { return BookModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ImageLinks {
}
class VolumeInfo {
}
class BookModel {
}


/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar .mat-toolbar {\n  color: #787993;\n  font-size: medium;\n}\n.navbar .mat-toolbar .user-message {\n  flex: 1 1 auto;\n  color: #008000eb;\n}\n.navbar .mat-toolbar .component-navigation span {\n  cursor: pointer;\n  margin: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcTmV3IGZvbGRlciAoMilcXGJvb2tTZWFyY2gtYXBwXFxzZWFyY2gvc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQVI7QURFUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0FaO0FESVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0ZoQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIC5tYXQtdG9vbGJhciB7XHJcbiAgICAgICAgY29sb3I6ICM3ODc5OTM7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnVzZXItbWVzc2FnZSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwODAwMGViO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5jb21wb25lbnQtbmF2aWdhdGlvbiB7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIubmF2YmFyIC5tYXQtdG9vbGJhciB7XG4gIGNvbG9yOiAjNzg3OTkzO1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cbi5uYXZiYXIgLm1hdC10b29sYmFyIC51c2VyLW1lc3NhZ2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgY29sb3I6ICMwMDgwMDBlYjtcbn1cbi5uYXZiYXIgLm1hdC10b29sYmFyIC5jb21wb25lbnQtbmF2aWdhdGlvbiBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavbarComponent = class NavbarComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.snapshot.paramMap.get("userName");
        this.userName = this.route.snapshot.paramMap.get("userName");
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavbarComponent.prototype, "userName", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/popup/book-details/book-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/popup/book-details/book-details.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".book-details .title {\n  text-align: center;\n}\n.book-details .footer .btn {\n  margin-right: 10px;\n  padding: 8px 15px;\n  color: white;\n  cursor: pointer;\n  font-size: 14px;\n  border: transparent;\n  letter-spacing: 1.25px;\n  border-radius: 2.6px;\n}\n.book-details .footer .btn-close {\n  background: rgba(0, 0, 0, 0.42);\n}\n.book-details .footer .btn-save {\n  background: #0079FD;\n}\n.book-details .footer .btn-delete {\n  background: #ff0000bd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wdXAvYm9vay1kZXRhaWxzL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcTmV3IGZvbGRlciAoMilcXGJvb2tTZWFyY2gtYXBwXFxzZWFyY2gvc3JjXFxhcHBcXHBvcHVwXFxib29rLWRldGFpbHNcXGJvb2stZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9wdXAvYm9vay1kZXRhaWxzL2Jvb2stZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0FDQVI7QURJUztFQUNJLGtCQUFBO0VBQ0QsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNGWjtBREtRO0VBQ0ksK0JBQUE7QUNIWjtBRE1RO0VBQ0ksbUJBQUE7QUNKWjtBRE9RO0VBQ0kscUJBQUE7QUNMWiIsImZpbGUiOiJzcmMvYXBwL3BvcHVwL2Jvb2stZGV0YWlscy9ib29rLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9vay1kZXRhaWxzIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXIge1xyXG4gICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIuNnB4O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG4tY2xvc2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjQyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG4tc2F2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwNzlGRDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG4tZGVsZXRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmMDAwMGJkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuYm9vay1kZXRhaWxzIC50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib29rLWRldGFpbHMgLmZvb3RlciAuYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMi42cHg7XG59XG4uYm9vay1kZXRhaWxzIC5mb290ZXIgLmJ0bi1jbG9zZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG59XG4uYm9vay1kZXRhaWxzIC5mb290ZXIgLmJ0bi1zYXZlIHtcbiAgYmFja2dyb3VuZDogIzAwNzlGRDtcbn1cbi5ib29rLWRldGFpbHMgLmZvb3RlciAuYnRuLWRlbGV0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZjAwMDBiZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/popup/book-details/book-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/popup/book-details/book-details.component.ts ***!
  \**************************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_model_bookModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/bookModel */ "./src/app/model/bookModel.ts");
/* harmony import */ var src_app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/wishlist.service */ "./src/app/services/wishlist.service.ts");





let BookDetailsComponent = class BookDetailsComponent {
    constructor(dialogRef, book, wishlistService) {
        this.dialogRef = dialogRef;
        this.book = book;
        this.wishlistService = wishlistService;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
    deleteBook() {
        this.wishlistService.deleteWishlist(this.book);
        this.onNoClick();
    }
    saveBook() {
        this.wishlistService.addWishlist(this.book);
        this.onNoClick();
    }
};
BookDetailsComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_model_bookModel__WEBPACK_IMPORTED_MODULE_3__["BookModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"] }
];
BookDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/popup/book-details/book-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-details.component.scss */ "./src/app/popup/book-details/book-details.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], BookDetailsComponent);



/***/ }),

/***/ "./src/app/search-bar/search-bar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-bar .search {\n  padding: 45px;\n}\n.search-bar .search .searchPut {\n  width: 100%;\n  height: 50px;\n  border-radius: 3px;\n  background: #8080802e;\n  border: transparent;\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWJhci9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXE5ldyBmb2xkZXIgKDIpXFxib29rU2VhcmNoLWFwcFxcc2VhcmNoL3NyY1xcYXBwXFxzZWFyY2gtYmFyXFxzZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FDQVI7QURFUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFyIHtcclxuICAgIC5zZWFyY2gge1xyXG4gICAgICAgIHBhZGRpbmc6IDQ1cHg7XHJcblxyXG4gICAgICAgIC5zZWFyY2hQdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4MDgwODAyZTtcclxuICAgICAgICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnNlYXJjaC1iYXIgLnNlYXJjaCB7XG4gIHBhZGRpbmc6IDQ1cHg7XG59XG4uc2VhcmNoLWJhciAuc2VhcmNoIC5zZWFyY2hQdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICM4MDgwODAyZTtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");



let SearchBarComponent = class SearchBarComponent {
    constructor(searchService) {
        this.searchService = searchService;
    }
    ngOnInit() {
    }
    searchBook() {
        setTimeout(() => {
            if (!this.bookName) {
                this.books = [];
            }
            else {
                this.searchService.getBooks(this.bookName)
                    .subscribe(res => {
                    this.books = res.items;
                    this.totalItems = res.totalItems;
                    console.log(res);
                });
            }
        }, 600);
    }
};
SearchBarComponent.ctorParameters = () => [
    { type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }
];
SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-bar/search-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/search-bar/search-bar.component.scss")).default]
    })
], SearchBarComponent);



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SearchService = class SearchService {
    constructor(http) {
        this.http = http;
    }
    getBooks(params, pageNumber = 1) {
        if (params == null) {
            params = this.searchChach;
        }
        else {
            this.searchChach = params;
        }
        return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${params}&maxResults=20&startIndex=${(pageNumber - 1) * 20}`);
    }
};
SearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SearchService);



/***/ }),

/***/ "./src/app/services/wishlist.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/wishlist.service.ts ***!
  \**********************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WishlistService = class WishlistService {
    constructor() {
        this.wishlist = [];
    }
    getWishlist() {
        return this.wishlist;
    }
    addWishlist(book) {
        if (this.isBookExist(book) == false) {
            this.wishlist.push(book);
        }
    }
    deleteWishlist(book) {
        for (let i = 0; i < this.wishlist.length; i++) {
            const element = this.wishlist[i];
            if (element.id == book.id) {
                this.wishlist = this.wishlist.splice(i, 1);
                break;
            }
        }
    }
    isBookExist(book) {
        return this.wishlist.some(x => {
            if (x.id == book.id) {
                return true;
            }
            else {
                return false;
            }
        });
    }
};
WishlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WishlistService);



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.scss":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpc2hsaXN0L3dpc2hsaXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wishlist.service */ "./src/app/services/wishlist.service.ts");



let WishlistComponent = class WishlistComponent {
    constructor(wishlistService) {
        this.wishlistService = wishlistService;
    }
    ngOnInit() {
        this.wishlist = this.wishlistService.getWishlist();
    }
};
WishlistComponent.ctorParameters = () => [
    { type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"] }
];
WishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wishlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wishlist.component.scss */ "./src/app/wishlist/wishlist.component.scss")).default]
    })
], WishlistComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\New folder (2)\bookSearch-app\search\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
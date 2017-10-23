webpackJsonp(["auth.module"],{

/***/ "../../../../../src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_panel_user_panel_component__ = __webpack_require__("../../../../../src/app/auth/user-panel/user-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'login' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'user-panel',
        component: __WEBPACK_IMPORTED_MODULE_4__user_panel_user_panel_component__["a" /* UserPanelComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard__["a" /* AuthGuard */]]
    }
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    return AuthRoutingModule;
}());
AuthRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], AuthRoutingModule);

//# sourceMappingURL=auth-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.authService.isLoggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_panel_user_panel_component__ = __webpack_require__("../../../../../src/app/auth/user-panel/user-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_routing_module__ = __webpack_require__("../../../../../src/app/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__auth_auth_routing_module__["a" /* AuthRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_5__user_panel_user_panel_component__["a" /* UserPanelComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__auth_auth_guard__["a" /* AuthGuard */]]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form #customer=\"ngForm\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Email</label>\r\n    <input class=\"form-control\"\r\n           [(ngModel)]=\"user.email\"\r\n           type=\"email\" name=\"email\"\r\n           #email=\"ngModel\" required/>\r\n    <div [hidden]=\"email?.valid || email?.untouched\" class=\"alert alert-danger\">\r\n      Incorrect email\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input class=\"form-control\"\r\n           [(ngModel)]=\"user.password\"\r\n           type=\"password\" name=\"password\"\r\n           #password=\"ngModel\" required/>\r\n    <div [hidden]=\"password?.valid || password?.untouched\" class=\"alert alert-danger\">\r\n      Type your password\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <button class=\"btn btn-success\"  (click)=\"login()\" [disabled]=\"!user.email || !user.password\">\r\n    Login\r\n  </button>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_form__ = __webpack_require__("../../../../../src/app/auth/user-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, route, data, authService) {
        this.router = router;
        this.route = route;
        this.data = data;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user_form__["a" /* UserForm */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['../user-panel'], {
                relativeTo: this.route
            });
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.data.toggleLoading(true);
        this.authService.login(this.user.email, this.user.password)
            .then(function (value) {
            _this.data.toggleLoading(false);
            localStorage.setItem('user', value.uid);
            _this.router.navigate(['../user-panel'], {
                relativeTo: _this.route
            });
            window.location.reload();
        })
            .catch(function (err) {
            _this.data.toggleLoading(false);
            alert(err.message);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userForm\" (submit)=\"signup()\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Email</label>\r\n    <input class=\"form-control\"\r\n           formControlName=\"email\"\r\n           type=\"email\">\r\n    <div [hidden]=\"userForm.get('email')?.valid || userForm.get('email')?.untouched\"\r\n         class=\"alert alert-danger\">\r\n      Incorrect email\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input class=\"form-control\"\r\n           formControlName=\"password\"\r\n           type=\"password\"/>\r\n    <div [hidden]=\"userForm.get('password')?.valid || userForm.get('password')?.untouched\"\r\n         class=\"alert alert-danger\">\r\n      Type your password\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Repeat password</label>\r\n    <input class=\"form-control\"\r\n           formControlName=\"passwordRepeat\"\r\n           type=\"password\"/>\r\n    <div [hidden]=\"userForm.get('passwordRepeat')?.valid || userForm.get('passwordRepeat')?.untouched\"\r\n         class=\"alert alert-danger\">\r\n      Type your password again\r\n    </div>\r\n    <div [hidden]=\"userForm.get('passwordRepeat')?.valid\r\n     || userForm.get('passwordRepeat')?.untouched\r\n     || !userForm.get('passwordRepeat')?.errors?.notEquivalent\"\r\n         class=\"alert alert-danger\">\r\n      NOT EQUALs\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-success\" [disabled]=\"!userForm.valid\">\r\n    Register\r\n  </button>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(fb, router, route, data, authService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.data = data;
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    RegisterComponent.prototype.matchingPasswords = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey];
            var passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
        };
    };
    RegisterComponent.prototype.initForm = function () {
        var minPassLength = 6;
        this.userForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].email,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(minPassLength)
                ])],
            passwordRepeat: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(minPassLength)
                ])]
        }, {
            validator: this.matchingPasswords('password', 'passwordRepeat')
        });
        console.log(this.userForm);
    };
    RegisterComponent.prototype.signup = function () {
        var _this = this;
        if (this.userForm.valid) {
            this.data.toggleLoading(true);
            this.authService.signup(this.userForm.get('email').value, this.userForm.get('password').value)
                .then(function (value) {
                localStorage.setItem('user', value.uid);
                _this.data.toggleLoading(false);
                _this.data.postRater(_this.userForm.get('email').value).subscribe(function (x) {
                    window.location.reload();
                    _this.router.navigate(['../user-panel'], {
                        relativeTo: _this.route
                    });
                });
            })
                .catch(function (err) {
                _this.data.toggleLoading(false);
                alert(err.message);
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/auth/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/user-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserForm; });
var UserForm = (function () {
    function UserForm() {
    }
    return UserForm;
}());

//# sourceMappingURL=user-form.js.map

/***/ }),

/***/ "../../../../../src/app/auth/user-panel/user-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/user-panel/user-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome {{ (authService.user | async)?.email }}!</h1>\r\n<ul>\r\n  <li *ngFor=\"let city of list$ | async\">{{city.id}} - {{city.name}}</li>\r\n</ul>\r\n<button (click)=\"logout()\" *ngIf=\"authService.user | async\">\r\n  Logout\r\n</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/user-panel/user-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPanelComponent = (function () {
    function UserPanelComponent(router, route, db, authService) {
        this.router = router;
        this.route = route;
        this.db = db;
        this.authService = authService;
    }
    UserPanelComponent.prototype.ngOnInit = function () {
        this.list$ = this.db.list('cities');
    };
    UserPanelComponent.prototype.logout = function () {
        localStorage.removeItem('user');
        this.router.navigate(['../login'], {
            relativeTo: this.route
        });
        this.authService.logout();
        window.location.reload();
    };
    return UserPanelComponent;
}());
UserPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-panel',
        template: __webpack_require__("../../../../../src/app/auth/user-panel/user-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/user-panel/user-panel.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], UserPanelComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-panel.component.js.map

/***/ })

});
//# sourceMappingURL=auth.module.chunk.js.map
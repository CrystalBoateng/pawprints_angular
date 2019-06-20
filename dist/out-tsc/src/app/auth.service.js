import * as tslib_1 from "tslib";
// TODO: change all references to local storage, to set and retrieve from cookies instead
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from "moment";
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post('/api/login', { email: email, password: password })
            .do(function (res) { return _this.setSession; })
            .shareReplay();
    };
    AuthService.prototype.setSession = function (authResult) {
        var expiresAt = moment().add(authResult.expiresIn, 'second');
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    };
    AuthService.prototype.isLoggedIn = function () {
        return moment().isBefore(this.getExpiration());
    };
    AuthService.prototype.isLoggedOut = function () {
        return !this.isLoggedIn();
    };
    AuthService.prototype.getExpiration = function () {
        var expiration = localStorage.getItem("expires_at");
        var expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
        /* Token Manager */
        ,
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
/* HTTP Interceptor */
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var idToken = localStorage.getItem("id_token");
        if (idToken) {
            var cloned = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + idToken)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib_1.__decorate([
        Injectable()
    ], AuthInterceptor);
    return AuthInterceptor;
}());
export { AuthInterceptor };
//# sourceMappingURL=auth.service.js.map
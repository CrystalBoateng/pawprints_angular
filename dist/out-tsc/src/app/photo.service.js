import * as tslib_1 from "tslib";
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
var PhotoService = /** @class */ (function () {
    function PhotoService(http) {
        this.http = http;
        this.apiurl = environment.apiurl;
        this.photoUrl = environment.photoUrl;
    }
    // sends create requests
    PhotoService.prototype.createPhoto = function (photo) {
        return this.http.post(this.apiurl + 'api/photos/', photo);
    };
    // sends read requests
    PhotoService.prototype.listPhotos = function () {
        return this.http.get(this.apiurl + 'api/photos');
    };
    PhotoService.prototype.getPhoto = function (id) {
        return this.http.get(this.apiurl + 'api/photos/' + id);
    };
    // sends put requests
    PhotoService.prototype.updatePhoto = function (id, origObject) {
        return this.http.put(this.apiurl + 'api/photos/' + id, origObject);
    };
    // sends delete requests
    PhotoService.prototype.deletePhoto = function (id) {
        return this.http.delete(this.apiurl + 'api/photos/' + id);
    };
    PhotoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PhotoService);
    return PhotoService;
}());
export { PhotoService };
//# sourceMappingURL=photo.service.js.map
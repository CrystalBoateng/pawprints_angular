import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { PhotoService } from "../photo.service";
var NewphotoComponent = /** @class */ (function () {
    function NewphotoComponent(photoService) {
        this.photoService = photoService;
        this.newPhoto = new EventEmitter();
        this.photo = {};
        this.fileToUpload = null;
    }
    NewphotoComponent.prototype.handleFileInput = function (files) {
        // pull the uploaded file from DOM's 'files' property (of type FileList)
        this.fileToUpload = files.item(0);
    };
    NewphotoComponent.prototype.ngOnInit = function () {
    };
    NewphotoComponent.prototype.save = function (newphotoform) {
        var _this = this;
        // take user to the login page
        location.href = '/login';
        // send the file and metadata to the api
        var formData = new FormData();
        formData.append('image', this.fileToUpload, this.fileToUpload.name);
        formData.append('title', this.photo.title);
        formData.append('album', this.photo.album);
        formData.append('description', this.photo.description.replace(", ", ","));
        formData.append('tags', this.photo.tags);
        this.photoService.createPhoto(formData)
            .subscribe(function (photo) {
            console.log(photo);
            _this.newPhoto.emit();
            newphotoform.reset();
        });
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NewphotoComponent.prototype, "newPhoto", void 0);
    NewphotoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-newphoto',
            templateUrl: './newphoto.component.html',
            styleUrls: ['./newphoto.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PhotoService])
    ], NewphotoComponent);
    return NewphotoComponent;
}());
export { NewphotoComponent };
//# sourceMappingURL=newphoto.component.js.map
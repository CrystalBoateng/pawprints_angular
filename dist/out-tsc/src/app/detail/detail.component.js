import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo.service';
var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, photoService) {
        this.route = route;
        this.photoService = photoService;
        this.photodisplayurl = '';
        this.editing = false;
    }
    DetailComponent.prototype.deletePhoto = function () {
        if (confirm("Are you sure you want to delete " + this.photo.title + "?")) {
            this.photoService.deletePhoto((this.photo._id))
                .subscribe(function (result) {
                location.href = '/#/';
            });
        }
    };
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // retrieve the photo's remote metadata and local file
        var param = this.route.snapshot.paramMap.get('id');
        this.photoService.getPhoto(param)
            .subscribe(function (retrievedPhoto) {
            _this.photo = retrievedPhoto;
            _this.photodisplayurl = _this.photoService.photoUrl + _this.photo.imageurl;
        });
    };
    DetailComponent.prototype.setEditMode = function () {
        // toggle the metadata form
        this.editing = (this.editing ? false : true);
    };
    DetailComponent.prototype.updatePhoto = function (formFields) {
        // update the photo's remote metadata and refresh the view
        this.photo.title = formFields.titleField;
        this.photo.album = formFields.albumField;
        this.photo.description = formFields.descriptionField;
        this.photo.tags = formFields.tagsField;
        this.photoService.updatePhoto(this.photo._id, this.photo)
            .subscribe(function (apiResponse) {
            location.reload();
        });
    };
    DetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-detail',
            templateUrl: './detail.component.html',
            styleUrls: ['./detail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            PhotoService])
    ], DetailComponent);
    return DetailComponent;
}());
export { DetailComponent };
//# sourceMappingURL=detail.component.js.map
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(photoService) {
        this.photoService = photoService;
        this.photoList = null;
        this.photoUrl = '';
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.photoUrl = this.photoService.photoUrl;
        this.updatePhotoList();
    };
    GalleryComponent.prototype.updatePhotoList = function () {
        var _this = this;
        this.photoService.listPhotos().subscribe(function (photos) {
            _this.photoList = photos;
        });
    };
    GalleryComponent = tslib_1.__decorate([
        Component({
            selector: 'gallery',
            templateUrl: './gallery.component.html',
            styleUrls: ['./gallery.component.css'],
            providers: [PhotoService]
        }),
        tslib_1.__metadata("design:paramtypes", [PhotoService])
    ], GalleryComponent);
    return GalleryComponent;
}());
export { GalleryComponent };
//# sourceMappingURL=gallery.component.js.map
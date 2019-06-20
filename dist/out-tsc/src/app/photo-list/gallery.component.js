import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PhotoService } from './../photo.service';
var PhotoListComponent = /** @class */ (function () {
    function PhotoListComponent(photoService) {
        this.photoService = photoService;
        this.photoList = null;
        this.photoUrl = '';
    }
    PhotoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photoUrl = this.photoService.photoUrl;
        this.photoService.listPhotos().subscribe(function (photos) {
            _this.photoList = photos;
        });
    };
    PhotoListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-photo-list',
            templateUrl: './photo-list.component.html',
            styleUrls: ['./photo-list.component.css'],
            providers: [PhotoService]
        }),
        tslib_1.__metadata("design:paramtypes", [PhotoService])
    ], PhotoListComponent);
    return PhotoListComponent;
}());
export { PhotoListComponent };
//# sourceMappingURL=gallery.component.js.map
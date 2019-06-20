import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../photo.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [ PhotoService ]
})
export class GalleryComponent {
  photoList = null;
  photoUrl = '';
constructor(private photoService: PhotoService) { }
  ngOnInit() {
    this.photoUrl = this.photoService.photoUrl;
    this.updatePhotoList();
  }
  updatePhotoList(): void {
    this.photoService.listPhotos().subscribe((photos) => {
      this.photoList = photos;
    });
  }
}

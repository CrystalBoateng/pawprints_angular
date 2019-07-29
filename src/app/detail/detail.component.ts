import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  photo: any;
  photodisplayurl = '';
  editing = false;

  constructor(private route: ActivatedRoute,
              private photoService: PhotoService) { }

  deletePhoto() {
    if (confirm(`Are you sure you want to delete ${this.photo.title}?`)) {
      this.photoService.deletePhoto((this.photo._id))
        .subscribe((result) => {
          location.href = '/#/';
        });
    }
  }
  ngOnInit() {
    // retrieve the photo's remote metadata and local file
    const param = this.route.snapshot.paramMap.get('id');
    this.photoService.getPhoto(param)
      .subscribe((retrievedPhoto) => {
        this.photo = retrievedPhoto;
        this.photodisplayurl = this.photoService.photoUrl + this.photo.imageurl;
      });
  }
  setEditMode() {
    // toggle the metadata form
    this.editing = (this.editing ? false : true);
  }
  updatePhoto(formFields: any): void {
    // update the photo's remote metadata and refresh the view
    this.photo.title = formFields.titleField;
    this.photo.album = formFields.albumField;
    this.photo.description = formFields.descriptionField;
    this.photo.tags = formFields.tagsField;
    this.photoService.updatePhoto(this.photo._id, this.photo)
      .subscribe((apiResponse) => {
        location.reload();
      });
  }


}

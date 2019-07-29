import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PhotoService} from "../photo.service";

@Component({
  selector: 'app-newphoto',
  templateUrl: './newphoto.component.html',
  styleUrls: ['./newphoto.component.css']
})
export class NewphotoComponent implements OnInit {
  @Output() newPhoto = new EventEmitter();
  photo: any = {};
  fileToUpload: File = null;

  constructor(private photoService:PhotoService) { }

  handleFileInput(files): void {
    // pull the uploaded file from DOM's 'files' property (of type FileList)
    this.fileToUpload = files.item(0);
  }
  ngOnInit() {
  }
  save(newphotoform) : void {
    // take user to the login page
    location.href = '/login';
    // send the file and metadata to the api
    let formData = new FormData();
    formData.append('image', this.fileToUpload, this.fileToUpload.name);
    formData.append('title', this.photo.title);
    formData.append('album', this.photo.album);
    formData.append('description',
      this.photo.description.replace(", ", ","));
    formData.append('tags', this.photo.tags);
    this.photoService.createPhoto(formData)
      .subscribe((photo)=>{
        console.log(photo);
        this.newPhoto.emit();
        newphotoform.reset();
      });
  }
}

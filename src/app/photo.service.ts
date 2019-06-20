import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) { }
  private apiurl = environment.apiurl;
  photoUrl = environment.photoUrl;

  // sends create requests
  createPhoto(photo: FormData) {
    return this.http.post(this.apiurl + 'api/photos/', photo);
  }

  // sends read requests
  listPhotos() {
    return this.http.get(this.apiurl + 'api/photos');
  }
  getPhoto(id) {
    return this.http.get(this.apiurl + 'api/photos/' + id);
  }

  // sends put requests
  updatePhoto(id, origObject) {
    return this.http.put(this.apiurl + 'api/photos/' + id, origObject);
  }

  // sends delete requests
  deletePhoto(id) {
    return this.http.delete(this.apiurl + 'api/photos/' + id);
  }
}

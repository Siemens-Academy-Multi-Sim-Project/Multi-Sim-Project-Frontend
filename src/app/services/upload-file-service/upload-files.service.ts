import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {


  total: any;
  progress: any;

  uploaded: boolean = false;
  startUpload: boolean = false;

  username = "omar.atef.2001@gmail.com"
  password = "1010abab";

  constructor(public httpClient: HttpClient) {

  }

  handle_files(form: FormData) {
    this.httpClient.post('http://localhost:8080/UploadCSV', form, {
      reportProgress: true,
      observe: 'events',
      headers: {
        Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
      }
    }).subscribe((event) => {
      if (event.type == HttpEventType.UploadProgress) {
        this.total = event.total;//total file size
        this.progress = Math.round(event.loaded / this.total * 100) + '%';
        console.log(this.progress);
        setTimeout(() => {
        }, 3000);
      } else if (event.type == HttpEventType.Response) { //is the file succesfully uploaded
        console.log(event);
        this.uploaded = true;
        this.startUpload = false;
      }
    })
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {


  total: any;
  progress: any;

  uploaded: boolean = false;
  startUpload: boolean = false;

  username = "email@email.com"
  password = "1234";

  constructor(public httpClient: HttpClient) {

  }

  create_cluster(clusterName: string) {
    return this.httpClient.post <string>(environment.baseUrl + '/profiling-data/create-cluster', {"clusterName": clusterName}, {
      headers: {
        Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
      }
    })
  }

  handle_files(form: FormData) {
    for (let i = 0; i < form.getAll('file').length; i++) {
      let temp = new FormData();
      temp.append('file', form.getAll('file')[i]);
      temp.append('ClusterName', form.getAll('ClusterName')[0]);
      this.httpClient.post<FormData>(environment.baseUrl + '/UploadCSV', temp, {
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
        } else if (event.type == HttpEventType.Response) { //is the file succesfully uploaded
          console.log(event);
          this.uploaded = true;
          this.startUpload = false;
        }
      })
    }

  }
}

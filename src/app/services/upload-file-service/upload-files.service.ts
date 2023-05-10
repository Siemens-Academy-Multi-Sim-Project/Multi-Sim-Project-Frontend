import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  username = "awadafif77777@gmail.comm"
  password = "password";

  constructor(public httpClient: HttpClient) {

  }

  create_cluster(clusterName: string) {
    return this.httpClient.post <number>(environment.baseUrl + '/profiling-data/create-cluster', {"clusterName": clusterName}, {
      headers: {
        Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
      }
    })
  }

  uploadFile(clusterName: string, file: File){
    let temp = new FormData();
    temp.append('file', file);
    temp.append('ClusterName', clusterName);

    return this.httpClient.post<FormData>(environment.baseUrl + '/UploadCSV', temp , {
      headers: {
        Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
      }
    })
  }
}

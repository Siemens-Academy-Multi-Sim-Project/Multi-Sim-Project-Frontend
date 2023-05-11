import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  auth = localStorage.getItem('Auth');

  constructor(public httpClient: HttpClient) {
  }
  create_cluster(clusterName: string) {
    return this.httpClient.post <number>(environment.baseUrl + '/profiling-data/create-cluster', {"clusterName": clusterName}, {
      headers: {
        Authorization: 'Basic ' + this.auth
      }
    })
  }

  uploadFile(clusterName: string, file: File){
    let temp = new FormData();
    temp.append('file', file);
    temp.append('ClusterName', clusterName);

    return this.httpClient.post<FormData>(environment.baseUrl + '/UploadCSV', temp , {
      headers: {
        Authorization: 'Basic ' +  this.auth
      }
    })
  }
}

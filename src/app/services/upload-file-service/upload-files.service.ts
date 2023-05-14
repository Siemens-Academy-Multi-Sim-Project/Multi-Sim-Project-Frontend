import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {formatDate} from "@angular/common";
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  constructor(
    public httpClient: HttpClient,
    private authService: AuthService
  ) {
  }
  create_cluster(clusterName: string) {
    return this.httpClient.post <number>(environment.baseUrl + '/profiling-data/create-cluster', {"clusterName": clusterName}, {
      headers: {
        Authorization: this.authService.getAuthHeader()
      }
    })
  }

  uploadFile(clusterName: string, file: File){
    let temp = new FormData();
    temp.append('file', file);
    temp.append('ClusterName', clusterName);

    return this.httpClient.post<FormData>(environment.baseUrl + '/UploadCSV', temp , {
      headers: {
        Authorization: this.authService.getAuthHeader()
      }
    })
  }
}

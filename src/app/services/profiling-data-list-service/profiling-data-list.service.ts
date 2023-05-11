import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DataCluster} from 'src/app/models/session-overview-models/profiling-data/DataCluster';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfilingDataListService {



  auth = localStorage.getItem('Auth');


  profilingDataClustersArray: DataCluster[] = []
  constructor(private http: HttpClient) {
  }

  getClustersData() {
    return this.http.get<DataCluster[]>(environment.baseUrl + `/profiling-data-clusters/all`, {
      headers: {
        Authorization: 'Basic ' + this.auth
      }
    })
  }
  setClusterData(data: DataCluster[]) {
    this.profilingDataClustersArray = data;
  }




}

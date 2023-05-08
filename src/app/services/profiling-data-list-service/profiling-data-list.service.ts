import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DataCluster} from 'src/app/models/session-overview-models/profiling-data/DataCluster';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfilingDataListService {

  username = "siemens.project@g.com"
  password = "1010abab";
  // profilingDataClustersArray: DataCluster[] = []
  constructor(private http: HttpClient) {
  }

  // getClustersData() {
  //   return this.http.get<DataCluster[]>(environment.baseUrl + `/profiling-data-clusters/all`, {
  //     headers: {
  //       Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
  //     }
  //   })
  // }
  // setClusterData(data: DataCluster[]) {
  //   this.profilingDataClustersArray = data;
  // }

  profilingDataClustersArray: DataCluster[] = [
    {
      
        "id": 1,
        "clusterName": "SPRONG"
      
    },
    {
      
      "id": 2,
      "clusterName": "SPRONG2"
    
  },
  {
      
    "id": 3,
    "clusterName": "test"
  
}
  ]

  
}

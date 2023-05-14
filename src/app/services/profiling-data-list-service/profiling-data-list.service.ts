import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DataCluster} from 'src/app/models/session-overview-models/profiling-data/DataCluster';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth-service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProfilingDataListService {

  profilingDataClustersArray: DataCluster[] = []
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getClustersData() {
    return this.http.get<DataCluster[]>(environment.baseUrl + `/GetRecentClusters`, {
      headers: {
        Authorization: this.authService.getAuthHeader()
      }
    })
  }
  setClusterData(data: DataCluster[]) {
    this.profilingDataClustersArray = data;
  }




}

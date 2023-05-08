import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ProfilingData} from 'src/app/models/session-overview-models/profiling-data/ProfilingData';
import { ApiService } from 'src/app/shared/ApiService';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OverviewService {

  username = "omar.atef.2001@gmail.com"
  password = "1010abab";
  profilingDataArray: ProfilingData[] = []

  constructor(private http: ApiService) {
  }

  getClusterById(id: number) {
    return this.http.get<ProfilingData[]>(`/profiling-data-clusters/getProfilingData/${id}`)
  }


}

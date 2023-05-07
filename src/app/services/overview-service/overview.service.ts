import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfilingData } from 'src/app/models/session-overview-models/profiling-data/ProfilingData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {
  profilingDataArray: ProfilingData[] = []
  constructor(private http: HttpClient) { }
  getClusterById(id: number){
    return this.http.get<ProfilingData[]>(environment.baseUrl + `/profiling-data-clusters/getProfilingData/${id}`)
  }


}

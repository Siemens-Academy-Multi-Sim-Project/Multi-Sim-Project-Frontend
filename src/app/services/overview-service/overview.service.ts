import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfilingData } from 'src/app/models/session-overview-models/profiling-data/ProfilingData';
import { environment } from 'src/environments/environment';
import { SingleAttribute } from "../../models/session-overview-models/singleAttribute";
import { MultiAttribute } from "../../models/session-overview-models/multiAttribute";
import { DualAttribute } from "../../models/session-overview-models/dual-attribute";
import { Columns } from "../../models/usage-profile/columns";
import { BarChartService } from './bar-chart-service/bar-chart.service';
import { HeatMapService } from './heat-map-service/heat-map.service';
import { TopOverviewService } from './top-overview-service/top-overview.service';
import { UsageProfileService } from './usage-profile-service/usage-profile.service';

@Injectable({
  providedIn: 'root'
})


export class OverviewService {


  username = "email@email.com"
  password = "1234";

  profilingDataArray: ProfilingData[] = []

  constructor(
    private http: HttpClient,
    private barChartService: BarChartService,
    private heatMapService: HeatMapService,
    private topOverviewService: TopOverviewService,
    private usageProfileService: UsageProfileService
  ) { }

  getClusterById(id: number) {
    return this.http.get<ProfilingData[]>(environment.baseUrl + `/profiling-data-clusters/getProfilingData/${id}`, {
      headers: {
        Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
      }
    })
  }

  set_profiling_data(data: ProfilingData[]) {
    this.profilingDataArray = data;
  }

  getVsimTimes(): number[] {
    return this.barChartService.getVsimTimes(this.profilingDataArray)
  }

  getVoptMemory(): number[] {
    return this.barChartService.getVoptMemory(this.profilingDataArray)
  }

  getVsimMemory(): number[] {
    return this.barChartService.getVsimMemory(this.profilingDataArray)
  }

  getTotalSimulations(): SingleAttribute {
    return this.topOverviewService.getTotalSimulations(this.profilingDataArray)
  }

  getDesigns(): SingleAttribute {
    return this.topOverviewService.getDesigns(this.profilingDataArray)
  }

  getVoptTime_multiAttr(): MultiAttribute {
    return this.topOverviewService.getVoptTime_multiAttr(this.profilingDataArray)
  }

  getVsimTime_multiAttr(): MultiAttribute {
    return this.topOverviewService.getVsimTime_multiAttr(this.profilingDataArray)
  }

  getVoptMemory_multiAttr(): MultiAttribute {
    return this.topOverviewService.getVoptMemory_multiAttr(this.profilingDataArray)
  }

  getVsimMemory_multiAttr(): MultiAttribute {
    return this.topOverviewService.getVsimMemory_multiAttr(this.profilingDataArray)
  }

  getSamplesAndCalls(): DualAttribute {
    return this.topOverviewService.getSamplesAndCalls(this.profilingDataArray)
  }


  getUsageProfilingData(): Columns[] {
    return this.usageProfileService.getUsageProfilingData(this.profilingDataArray)
  }

  getDuLocalHitsData(): Map<string, number> {
    return this.heatMapService.getDuLocalHitsData(this.profilingDataArray)
  }


  getDuAvgHitPercentage(): Map<string, number> {
    return this.heatMapService.getDuAvgHitPercentage(this.profilingDataArray)
  }
}

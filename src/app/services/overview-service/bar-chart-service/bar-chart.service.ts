import { Injectable } from '@angular/core';
import { ProfilingData } from 'src/app/models/session-overview-models/profiling-data/ProfilingData';
import { UnitData } from 'src/app/models/session-overview-models/profiling-data/UnitData';

@Injectable({
  providedIn: 'root'
})
export class BarChartService {

  constructor() { }

  getVsimTimes(profilingDataArray: ProfilingData[]): number[] {
    let times: number[] = []

    profilingDataArray.forEach((data) => {
      let unitData = new UnitData(data.vsimTime)
      times.push(unitData.value)
    })

    return times
  }

  getVoptMemory(profilingDataArray: ProfilingData[]): number[] {
    let memories: number[] = []

    profilingDataArray.forEach((data) => {
      let unitData = new UnitData(data.voptMemory)
      memories.push(unitData.value)
    })

    return memories
  }

  getVsimMemory(profilingDataArray: ProfilingData[]): number[] {
    let memories: number[] = []

    profilingDataArray.forEach((data) => {
      let unitData = new UnitData(data.vsimMemory)
      memories.push(unitData.value)
    })

    return memories
  }
}

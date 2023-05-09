import { Injectable } from '@angular/core';
import { DualAttribute } from 'src/app/models/session-overview-models/dual-attribute';
import { MultiAttribute } from 'src/app/models/session-overview-models/multiAttribute';
import { ProfilingData } from 'src/app/models/session-overview-models/profiling-data/ProfilingData';
import { UnitData } from 'src/app/models/session-overview-models/profiling-data/UnitData';
import { SingleAttribute } from 'src/app/models/session-overview-models/singleAttribute';
import { ListUtils } from 'src/app/shared/utils/ListUtils';

@Injectable({
  providedIn: 'root'
})
export class TopOverviewService {
  constructor() { }

  getTotalSimulations(profilingDataArray: ProfilingData[]): SingleAttribute {
    return {count: profilingDataArray.length, type: "Simulations"}
  }

  getDesigns(profilingDataArray: ProfilingData[]): SingleAttribute {
    let designs: Set<string> = new Set<string>()

    profilingDataArray.forEach((data) => {
      designs.add(data.designCompositionName)
    })

    return {count: designs.size, type: "Designs"}
  }

  getVoptTime_multiAttr(profilingDataArray: ProfilingData[]): MultiAttribute {
    let voptTimes: number[] = []

    profilingDataArray.forEach((data) => {
      let unitData = new UnitData(data.voptTime)
      voptTimes.push(unitData.value)
    })

    voptTimes.sort();

    return {
      min: voptTimes[0],
      max: voptTimes[voptTimes.length - 1],
      avg: ListUtils.getAverage(voptTimes),
      min_name: "Min Vopt Time",
      max_name: "Max Vopt Time",
      avg_name: "Avg Vopt Time",
      measuring_unit: "sec"
    }
  }

  getVsimTime_multiAttr(profilingDataArray: ProfilingData[]): MultiAttribute {
    let vsimTimes: number[] = []

    profilingDataArray.forEach((data) => {
      let unitData = new UnitData(data.vsimTime)
      vsimTimes.push(unitData.value)
    })

    vsimTimes.sort();

    return {
      min: vsimTimes[0],
      max: vsimTimes[vsimTimes.length - 1],
      avg: ListUtils.getAverage(vsimTimes),
      min_name: "Min Vsim Time",
      max_name: "Max Vsim Time",
      avg_name: "Avg Vsim Time",
      measuring_unit: "sec"
    }
  }

  getVoptMemory_multiAttr(profilingDataArray: ProfilingData[]): MultiAttribute {
    let VoptMemory: number[] = []

    profilingDataArray.forEach((data) => {
      let unitData = new UnitData(data.voptMemory)
      VoptMemory.push(unitData.value)
    })

    VoptMemory.sort();

    return {
      min: VoptMemory[0],
      max: VoptMemory[VoptMemory.length - 1],
      avg: ListUtils.getAverage(VoptMemory),
      min_name: "Min Vopt Memory",
      max_name: "Max Vopt Memory",
      avg_name: "Avg Vopt Memory",
      measuring_unit: "GB"
    }
  }

  getVsimMemory_multiAttr(profilingDataArray: ProfilingData[]): MultiAttribute {
    let VsimMemory: number[] = []

    profilingDataArray.forEach((data) => {
      let unitData = new UnitData(data.vsimTime)
      VsimMemory.push(unitData.value)
    })

    VsimMemory.sort();

    return {
      min: VsimMemory[0],
      max: VsimMemory[VsimMemory.length - 1],
      avg: ListUtils.getAverage(VsimMemory),
      min_name: "Min Vsim Memory",
      max_name: "Max Vsim Memory",
      avg_name: "Avg Vsim Memory",
      measuring_unit: "GB"
    }
  }

  getSamplesAndCalls(profilingDataArray: ProfilingData[]): DualAttribute {
    let samples: number = 0
    let calls: number = 0

    profilingDataArray.forEach((data) => {
      samples += data.totalSamples
      let calls_unit_data = new UnitData(data.randomizeCall)
      calls += calls_unit_data.value
    })

    return {samples: samples, calls: calls}
  }
}

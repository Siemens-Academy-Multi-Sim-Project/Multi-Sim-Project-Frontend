import { Injectable } from '@angular/core';
import { ProfilingData } from 'src/app/models/session-overview-models/profiling-data/ProfilingData';
import { UnitData } from 'src/app/models/session-overview-models/profiling-data/UnitData';
import { Columns } from 'src/app/models/usage-profile/columns';

@Injectable({
  providedIn: 'root'
})
export class UsageProfileService {

  constructor() { }

  getUsageProfilingData(profilingDataArray: ProfilingData[]): Columns[] {
    let cols: Columns[] = []
    for (let i = 0; i < profilingDataArray.length; i++) {
      let calls_unit_data = new UnitData(profilingDataArray[i].randomizeCall)
      if (isNaN(calls_unit_data.value)){
        calls_unit_data.value=0
      }
      let col: Columns = {
        file_name: profilingDataArray[i].fileName,
        design_type: profilingDataArray[i].designType,
        methodology: profilingDataArray[i].methodology,
        language: profilingDataArray[i].designCompositionName.split(" ")[0],
        du_count: profilingDataArray[i].designUnits.length,
        vopt_time: profilingDataArray[i].voptTime,
        vsim_time: profilingDataArray[i].vsimTime,
        vopt_memory: profilingDataArray[i].voptMemory,
        vsim_memory: profilingDataArray[i].vsimMemory,
        pref_samples: profilingDataArray[i].totalSamples,
        randomize_calls: calls_unit_data.value,
        date_of_collection: profilingDataArray[i].dateOfCollection,
        vopt_cmd: profilingDataArray[i].voptCMDCommand,
        vsim_cmd: profilingDataArray[i].vsimCMDCommand,
      }
      cols.push(col)
    }

    console.log("cols " + cols.forEach((col) => {
      console.log(col)
    }));
    return cols
  }
}

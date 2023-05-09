import { Injectable } from '@angular/core';
import { ProfilingData } from 'src/app/models/session-overview-models/profiling-data/ProfilingData';
import { ListUtils } from 'src/app/shared/utils/ListUtils';

@Injectable({
    providedIn: 'root'
})
export class HeatMapService {
    getDuLocalHitsData(profilingDataArray: ProfilingData[]): Map<string, number> {
        let duLocalHits: Map<string, number> = new Map<string, number>();
        let localHitsSum: number = 0;
        
        profilingDataArray.forEach((profilingData) => {
          profilingData.designUnits.forEach((designUnit) => {
            let localHits: number = duLocalHits.get(designUnit.name) || 0
            localHits += designUnit.localHits
            localHitsSum += designUnit.localHits
    
            duLocalHits.set(designUnit.name, localHits)
          })
        })
    
        // convert sum into percentages
        duLocalHits.forEach((value, key) => {
          duLocalHits.set(key, value/localHitsSum)
        })
    
        return duLocalHits
      }
    
    
      getDuAvgHitPercentage(profilingDataArray: ProfilingData[]): Map<string, number> {
        let localPercentages: Map<string, number[]> = new Map<string, number[]>();
        let avgLocalPercentages: Map<string, number> = new Map<string, number>();
        profilingDataArray.forEach((profilingData) => {
          profilingData.designUnits.forEach((desginUnit) => {
            let percentages: number[] = localPercentages.get(desginUnit.name) || []
            percentages.push(Number.parseFloat(desginUnit.localPercentage)/100.00)
            localPercentages.set(desginUnit.name, percentages)
          })
        })
        localPercentages.forEach((percentages, key) => {
          avgLocalPercentages.set(key, ListUtils.getAverage(percentages))
        })
    
        return avgLocalPercentages
      }
}

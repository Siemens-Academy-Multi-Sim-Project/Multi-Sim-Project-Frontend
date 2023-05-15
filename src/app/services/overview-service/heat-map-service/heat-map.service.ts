import { Injectable } from '@angular/core';
import { HeatMapEntry } from 'src/app/models/session-overview-models/profiling-data/HeatMapEntry';
import { ProfilingData } from 'src/app/models/session-overview-models/profiling-data/ProfilingData';
import { ListUtils } from 'src/app/shared/utils/ListUtils';

@Injectable({
    providedIn: 'root'
})
export class HeatMapService {
    static DESIGN_UNIT_LIMIT = 20

    private getDuLocalHitsData(profilingDataArray: ProfilingData[]): Map<string, number> {
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
            duLocalHits.set(key, value / localHitsSum)
        })

        return duLocalHits
    }


    private getDuAvgHitPercentage(profilingDataArray: ProfilingData[]): Map<string, number> {
        let localPercentages: Map<string, number[]> = new Map<string, number[]>();
        let avgLocalPercentages: Map<string, number> = new Map<string, number>();
        profilingDataArray.forEach((profilingData) => {
            profilingData.designUnits.forEach((desginUnit) => {
                let percentages: number[] = localPercentages.get(desginUnit.name) || []
                percentages.push(Number.parseFloat(desginUnit.localPercentage) / 100.00)
                localPercentages.set(desginUnit.name, percentages)
            })
        })
        localPercentages.forEach((percentages, key) => {
            let avg: number =  ListUtils.getAverage(percentages, 10)
            if(isNaN(avg)) avg = 0
            avgLocalPercentages.set(key, avg)
        })

        return avgLocalPercentages
    }

    getHeatMapEntries(profilingData: ProfilingData[]): HeatMapEntry[]{
        let entries: HeatMapEntry[] = []
        let localHitsMap = this.getDuLocalHitsData(profilingData)
        let avgPercentageMap = this.getDuAvgHitPercentage(profilingData)
        let filesPerDuMap = this.getFilesPerDu(profilingData);

        localHitsMap.forEach((localHits, designUnitName) => {
            let newEntry = new HeatMapEntry (
                designUnitName, 
                localHits, 
                avgPercentageMap.get(designUnitName) || 0, 
                filesPerDuMap.get(designUnitName) || []
            )
            entries.push(newEntry)
        })

        return entries
    }

    private getFilesPerDu(profilingData: ProfilingData[]): Map<string, string[]> {
        let filesPerDuMap = new Map<string, string[]>()
        profilingData.forEach((file) => {
            file.designUnits.forEach((designUnit) => {
                let currentFileList = filesPerDuMap.get(designUnit.name) || [];
                currentFileList.push(file.fileName);
                filesPerDuMap.set(designUnit.name, currentFileList);
            });
        });
        return filesPerDuMap
    }
}

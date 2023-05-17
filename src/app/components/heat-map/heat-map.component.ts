import { style } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { TreeMapChartOptions } from 'src/app/models/session-overview-models/bar-chart-models/ChartOptions';
import { HeatMapEntry } from 'src/app/models/session-overview-models/profiling-data/HeatMapEntry';
import { HeatMapService } from 'src/app/services/overview-service/heat-map-service/heat-map.service';
import { OverviewService } from 'src/app/services/overview-service/overview.service';




@Component({
    selector: 'app-heat-map',
    templateUrl: './heat-map.component.html',
    styleUrls: ['./heat-map.component.css'],
})
export class HeatMapComponent implements OnChanges {

    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions!: TreeMapChartOptions;

    @Input() heatMapEntries: HeatMapEntry[] = []
    showSystemCalls: boolean = false
    maxDuName: string | null = null

    ngOnInit(): void {
        this.renderGraph()
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.renderGraph()
    }

    toggleShowingSystemCalls(show: boolean){
        this.showSystemCalls = show;
        this.renderGraph()
    }

    getTop20Du(showSystemCalls: boolean = false): HeatMapEntry[]{
        let returnedDu: HeatMapEntry[] = []
        this.heatMapEntries = this.heatMapEntries.sort((a, b) => b.localHitsPercentage - a.localHitsPercentage)
        
        // set max DU name
        this.maxDuName = this.heatMapEntries[0].name

        let addedDesignUnits = 0
        for(let i = 0; i < this.heatMapEntries.length; i++){
            let entry = this.heatMapEntries[i]
            if(!showSystemCalls && entry.isSystemCall()) continue;

            returnedDu.push(entry);
            addedDesignUnits++;
            if(addedDesignUnits == HeatMapService.DESIGN_UNIT_LIMIT){
                return returnedDu;
            }
        }
        return returnedDu;
    }


    renderGraph() {
        let du = this.getTop20Du(this.showSystemCalls)
        this.chartOptions = TreeMapChartOptions.createTreeMapChartOptions(du)    
    }
}

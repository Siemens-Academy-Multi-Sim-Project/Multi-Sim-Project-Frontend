import { style } from '@angular/animations';
import { Component, Input, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { TreeMapChartOptions } from 'src/app/models/session-overview-models/bar-chart-models/ChartOptions';
import { HeatMapService } from 'src/app/services/heat-map-service/heat-map.service';
import { OverviewService } from 'src/app/services/overview-service/overview.service';




@Component({
    selector: 'app-heat-map',
    templateUrl: './heat-map.component.html',
    styleUrls: ['./heat-map.component.css'],
})
export class HeatMapComponent {
    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions!: TreeMapChartOptions;
    heatMapService!: HeatMapService

    @Input() data: Map<string, number> = new Map<string, number>()

    constructor(private overviewService: OverviewService) {
        this.renderGraph()
    }

    renderGraph() {
        // let data = this.heatMapService.getDuPerformance()
        this.chartOptions = TreeMapChartOptions.createTreeMapChartOptions(this.overviewService.getDuLocalHitsData(), this.overviewService.getDuAvgHitPercentage())    
    }
}

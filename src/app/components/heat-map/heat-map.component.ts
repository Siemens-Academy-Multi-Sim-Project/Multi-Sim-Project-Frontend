import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { TreeMapChartOptions } from 'src/app/models/session-overview-models/bar-chart-models/ChartOptions';
import { HeatMapService } from 'src/app/services/heat-map-service/heat-map.service';




@Component({
    selector: 'app-heat-map',
    templateUrl: './heat-map.component.html',
    styleUrls: ['./heat-map.component.css'],
    providers: [HeatMapService]
})
export class HeatMapComponent {
    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions!: TreeMapChartOptions;
    heatMapService!: HeatMapService

    constructor(heatMapService: HeatMapService) {
        this.heatMapService = heatMapService
        this.renderGraph()
    }

    renderGraph() {
        let data = this.heatMapService.getDuPerformance()
        this.chartOptions = TreeMapChartOptions.createTreeMapChartOptions(data)    
    }
}

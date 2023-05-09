import { style } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { TreeMapChartOptions } from 'src/app/models/session-overview-models/bar-chart-models/ChartOptions';
import { OverviewService } from 'src/app/services/overview-service/overview.service';




@Component({
    selector: 'app-heat-map',
    templateUrl: './heat-map.component.html',
    styleUrls: ['./heat-map.component.css'],
})
export class HeatMapComponent implements OnInit, OnChanges {

    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions!: TreeMapChartOptions;

    @Input() data: Map<string, number> = new Map<string, number>()
    @Input() avgPercentages:Map<string,  number> = new Map<string, number>();

    ngOnInit(): void {
        this.renderGraph()
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.renderGraph()
    }
    renderGraph() {
        this.chartOptions = TreeMapChartOptions.createTreeMapChartOptions(this.data, this.avgPercentages)    
    }
}

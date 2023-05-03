import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { BarChartOptions } from 'src/app/models/session-overview-models/bar-chart-models/ChartOptions';
import { BarChartService } from 'src/app/services/bar-chart-service/bar-chart.service';
import { GroupingStrategy,  groupData } from 'src/app/shared/utils/DynamicHistogram';

@Component({
    selector: 'app-overview-bar-chart',
    templateUrl: './overview-bar-chart.component.html',
    styleUrls: ['./overview-bar-chart.component.css'],
    providers: [BarChartService]
})
export class OverviewBarChartComponent {

    @ViewChild("chart", { static: false }) chart!: ChartComponent;
    public chartOptions!: BarChartOptions;

    barChartService!: BarChartService 

    graphingChoices = ["Vsim Time", "Vopt Time", "Vsim Memory"]
    selectedGraphingChoice: string = this.graphingChoices[0]

    binStrategy: GroupingStrategy[] = ["Tight Grouping", "Moderate Grouping", "Loose Grouping", "No Grouping"]
    selectedBinStrategy: GroupingStrategy = "Tight Grouping"

    constructor(chartService: BarChartService) {
        this.barChartService = chartService
        this.renderGraph()
    }

    getCurrentlySelectedTestData(): number[]{
        switch (this.selectedGraphingChoice) {
            case this.graphingChoices[0]:
                return this.barChartService.getVsimTime()
            case this.graphingChoices[1]:
                return this.barChartService.getVoptTime()
            default:
                return this.barChartService.getVsimMemory()
        }
    }

    onGraphingDataChanged(): void {
        this.renderGraph();
    }




    private renderGraph() {
        let currentData = this.getCurrentlySelectedTestData();
        let currentStrategy = this.selectedBinStrategy;

        let buckets = groupData(currentData, currentStrategy);
        this.chartOptions = BarChartOptions.createBarChartOptions(
            this.selectedGraphingChoice,
            buckets[0],
            buckets[1]
        );
    }
}

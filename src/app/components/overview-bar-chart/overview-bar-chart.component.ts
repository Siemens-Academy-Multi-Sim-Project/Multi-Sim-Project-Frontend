import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { ChartOptions } from 'src/app/models/session-overview-models/bar-chart-models/ChartOptions';
import { GroupingStrategy,  t } from 'src/app/shared/utils/DynamicHistogram';

@Component({
    selector: 'app-overview-bar-chart',
    templateUrl: './overview-bar-chart.component.html',
    styleUrls: ['./overview-bar-chart.component.css']
})
export class OverviewBarChartComponent {

    @ViewChild("chart", { static: false }) chart!: ChartComponent;
    public chartOptions!: ChartOptions;
    vsimTimeTestData = [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 5, 5, 10, 10, 20, 20, 150, 150, 156, 156]
    voptTimeTestData = [40, 203, 12, 30412,203, 12, 3255, 2034,3255, 2034, 600, 414]
    vsimMemoryTestData = [324, 2313, 20, 23, 41, 23, 41, 23, 41, 281, 236, 281, 236]
    
    graphingChoices = ["Vsim Time", "Vopt Time", "Vsim Memory"]
    selectedGraphingChoice: string = this.graphingChoices[0]

    binStrategy: GroupingStrategy[] = ["Tight Grouping", "Moderate Grouping", "Loose Grouping", "No Grouping"]
    
    selectedBinStrategy: GroupingStrategy = "Tight Grouping"

    constructor() {
        this.renderGraph()
    }

    getCurrentlySelectedTestData(): number[]{
        switch (this.selectedGraphingChoice) {
            case this.graphingChoices[0]:
                return this.vsimTimeTestData
            case this.graphingChoices[1]:
                return this.voptTimeTestData
            default:
                return this.vsimMemoryTestData
        }
    }

    onGraphingDataChanged(): void {
        this.renderGraph();
    }




    private renderGraph() {
        let currentData = this.getCurrentlySelectedTestData();
        let currentStrategy = this.selectedBinStrategy;

        let buckets = t(currentData, currentStrategy);
        this.chartOptions = ChartOptions.createChartOptions(
            this.selectedGraphingChoice,
            buckets[0],
            buckets[1]
        );
    }
}

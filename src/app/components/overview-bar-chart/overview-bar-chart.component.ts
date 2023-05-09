import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { BarChartOptions } from 'src/app/models/session-overview-models/bar-chart-models/ChartOptions';
import { GroupingStrategy,  groupData } from 'src/app/shared/utils/DynamicHistogram';

@Component({
    selector: 'app-overview-bar-chart',
    templateUrl: './overview-bar-chart.component.html',
    styleUrls: ['./overview-bar-chart.component.css'],  
})
export class OverviewBarChartComponent implements OnInit {

    @ViewChild("chart", { static: false }) chart!: ChartComponent;
    public chartOptions!: BarChartOptions;

    @Input() public vsimTimes: number[] = [];
    @Input() public vsimMemories: number[] = [];
    @Input() public voptMemories: number[] = [];

    graphingChoices = ["","Vsim Time", "Vopt Memory", "Vsim Memory"]
    selectedGraphingChoice: string = this.graphingChoices[0]

    binStrategy: GroupingStrategy[] = ["Tight Grouping", "Moderate Grouping", "Loose Grouping", "No Grouping"]
    selectedBinStrategy: GroupingStrategy = "Tight Grouping"

    ngOnInit(): void {
        this.renderGraph()
    }

    getCurrentlySelectedTestData(): number[]{
        switch (this.selectedGraphingChoice) {
            case this.graphingChoices[1]:
                return this.vsimTimes
            case this.graphingChoices[2]:
                return this.voptMemories
            case this.graphingChoices[3]:
                return this.vsimMemories
            default:
                return []
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

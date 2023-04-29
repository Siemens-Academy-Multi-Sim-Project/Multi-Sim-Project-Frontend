import { Component, OnInit, ViewChild } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexTitleSubtitle
} from "ng-apexcharts";
import { ChartOptions} from 'src/app/models/session-overview-models/bar-chart-models/ChartOptions';

@Component({
    selector: 'app-overview-bar-chart',
    templateUrl: './overview-bar-chart.component.html',
    styleUrls: ['./overview-bar-chart.component.css']
})
export class OverviewBarChartComponent {

    @ViewChild("chart", { static: false }) chart!: ChartComponent;
    public chartOptions!: ChartOptions;

    constructor() {
        this.chartOptions = ChartOptions.createChartOptions("Distribution", this.testcat1, this.testdata1)
    }

    onGraphViewChanged(selection: string): void {
        switch(selection){
            case this.choices[0]:
                this.chartOptions = ChartOptions.createChartOptions("Distribution", this.testcat1, this.testdata1)
                break;
            case this.choices[1]:
                this.chartOptions = ChartOptions.createChartOptions("Distribution", this.testcat2, this.testdata2)
                break;
            case this.choices[2]:
                this.chartOptions = ChartOptions.createChartOptions("Distribution", this.testcat3, this.testdata3)
                break;
        }
    }


    testdata1 = [30, 40, 35, 50, 49, 60, 70, 91, 125]
    testcat1 = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]

    testdata2 = [30, 40, 35, 50]
    testcat2 = [1991, 1992, 1993, 1993]

    testdata3 = [30, 40, 35, 50, 91, 125]
    testcat3 = [1991, 1992, 1993, 1994, 1995, 1996]
    choices = ["Vsim Time", "Vopt Time", "Vsim Memory"]

    selectedChoice: string = this.choices[0]


}

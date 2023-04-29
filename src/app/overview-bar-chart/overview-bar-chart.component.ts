import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
    selector: 'app-overview-bar-chart',
    templateUrl: './overview-bar-chart.component.html',
    styleUrls: ['./overview-bar-chart.component.css']
})
export class OverviewBarChartComponent implements OnInit {

    onGraphViewChanged(selection: string): void {
        switch (selection) {
            case this.choices[0]:
                this.renderChartWith(this.testdata1, this.testcat1)
                break;
            case this.choices[1]:
                this.renderChartWith(this.testdata2, this.testcat2)
                break;
            case this.choices[2]:
                this.renderChartWith(this.testdata3, this.testcat3)
                break;
            default:
                break;
        }
    }

    testdata1 = [30,40,35,50,49,60,70,91,125]
    testcat1 = [1991,1992,1993,1994,1995,1996,1997, 1998,1999]

    testdata2 = [30,40,35,50]
    testcat2 = [1991,1992,1993, 1993]
    
    testdata3 = [30,40,35,50,91,125]
    testcat3 = [1991,1992,1993,1994,1995,1996]

    choices = ["Data 1", "Data 2", "Data 3"]

    chart!: ApexCharts

    selectedChoice: string = this.choices[0]


    ngOnInit(): void {
        this.renderChartWith(this.testdata1, this.testcat1)
    }

    renderChartWith(yValues: number[], xValues: number[]): void{
        let graphOptions = this.createGraphOptions(yValues, xValues)
        if(this.chart){
            this.chart.updateOptions(graphOptions)
        }else{
            this.chart = new ApexCharts(document.getElementById("chart"), graphOptions)
            this.chart.render();
        }
    }


    private createGraphOptions(yValues: number[], xValues: number[], graphType: string = 'bar') {
        return {
            chart: { type: graphType },
            series: [{ data: yValues }],
            xaxis: { categories: xValues }
        };
    }
}

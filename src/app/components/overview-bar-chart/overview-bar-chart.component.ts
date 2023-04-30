import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { ChartOptions } from 'src/app/models/session-overview-models/bar-chart-models/ChartOptions';

@Component({
    selector: 'app-overview-bar-chart',
    templateUrl: './overview-bar-chart.component.html',
    styleUrls: ['./overview-bar-chart.component.css']
})
export class OverviewBarChartComponent {

    @ViewChild("chart", { static: false }) chart!: ChartComponent;
    public chartOptions!: ChartOptions;

    constructor() {
        let x = [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 5, 5, 10, 10, 20, 20, 150, 150, 20, 20, 150, 150, 156, 20, 150, 150, 156]
        console.log();
        
        let data = this.dynamicBin(x)
        let data2 = this.dynamicBin2(data)
        this.chartOptions = ChartOptions.createChartOptions(this.choices[0], data2[0], data2[1])
        console.log(
            this.dynamicBin(x)
        );
        
    }

    onGraphViewChanged(selection: string): void {
        switch (selection) {
            case this.choices[0]:
                this.chartOptions = ChartOptions.createChartOptions(this.choices[0], this.testcat1, this.testdata1)
                break;
            case this.choices[1]:
                this.chartOptions = ChartOptions.createChartOptions(this.choices[1], this.testcat2, this.testdata2)
                break;
            case this.choices[2]:
                this.chartOptions = ChartOptions.createChartOptions(this.choices[2], this.testcat3, this.testdata3)
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


    // Sort the list of numbers in ascending order.
    // Calculate the range of the data by subtracting the minimum value from the maximum value.
    // Calculate the interquartile range (IQR) of the data by subtracting the first quartile (Q1) from the third quartile (Q3). The quartiles can be calculated using any appropriate method (e.g., Tukey's hinges, the median of the lower and upper halves of the sorted data, etc.).
    // Calculate the bin width (w) using the Freedman-Diaconis rule: w = 2 * IQR / (n^(1/3)), where n is the number of data points.
    // Calculate the number of bins (k) using the Sturges' rule: k = ceil(log2(n) + 1), where ceil() is the ceiling function (i.e., rounds up to the nearest integer).
    // If the calculated bin width is 0, set it to 1.
    // Create k bins of width w, starting from the minimum value of the data.
    // Assign each data point to the appropriate bin based on its value.
    // Return the list of bins and the corresponding frequencies.

    dynamicBin(data: number[]): [number,number[]][] {
        const sortedData = data.slice().sort((a, b) => a - b);
        // console.log(sortedData);
        const n = sortedData.length;
        const q1 = sortedData[Math.floor(n * 0.25)];
        const q3 = sortedData[Math.floor(n * 0.75)];
        const iqr = q3 - q1;
        const w = 2 * iqr / Math.pow(n, 1 / 3);
        const k = Math.ceil(Math.log2(n) + 1);
        const numberBins: number[][] = Array.from({ length: k }, () => []);
        const bins = Array.from({ length: k }, (_, i) => Math.min(...sortedData) + i * w);
        bins.push(Math.max(...sortedData) + 1);
        for (const d of sortedData) {
            for (let i = 0; i < k; i++) {
                if (bins[i] <= d && d < bins[i + 1]) {
                    // console.log("putting " + d + " in bin "+ i);
                    numberBins[i].push(d);
                    break;
                }
            }
        }
        return bins.slice(0, -1).map((bin, i) => [bin, numberBins[i]]);
    }

    dynamicBin2(data: [number, number[]][]): [string[], number[]]{
        let count = data.length;
        let labels: string[] = []
        let points: number[] = []
        for(let i = 0; i < count; i++){
            if(data[i][1].length == 0) continue;
            if(i == 0){
                let label = " < " + Math.max(...data[i][1])
                labels.push(label)
                points.push(data[i][1].length)
            }
            else if (i == count-1){
                let label = " > " + Math.min(...data[i][1])
                labels.push(label)
                points.push(data[i][1].length)
            }
            else {
                let label = Math.min(...data[i][1]) + " - " + Math.max(...data[i][1])
                labels.push(label)
                points.push(data[i][1].length)
            }
        }

        return [labels, points]
    }

    makeHistogram(data: number[]): [number[], number[]]{
        let bukcets = new Map<number, number>();
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            let oldval = bukcets.get(element) || 0
            bukcets.set(element, oldval+1)
        }
        return [
            Array.from(bukcets.keys()), 
            Array.from(bukcets.values())
        ];  
    }
}

import {
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexTitleSubtitle
} from "ng-apexcharts";

export class ChartOptions {
    series!: ApexAxisChartSeries;
    chart!: ApexChart;
    xaxis!: ApexXAxis;
    title!: ApexTitleSubtitle;

    static createChartOptions(title: string, xValues: number[], yValues: number[]): ChartOptions {
        return {
            series: [{data: yValues}],
            chart: {type: "bar"},
            title: {text: title},
            xaxis: {categories: xValues}
        };
    }
}
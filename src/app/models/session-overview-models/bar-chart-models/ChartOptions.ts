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
            chart: {type: "bar", foreColor:"#FFFFFF"},
            title: {text: title, style:{color: "#FFFFFF"}},
            xaxis: {
                categories: xValues,
                labels: {
                    style:{colors: "#FFFFFF"}
                }
            }

        };
    }
}
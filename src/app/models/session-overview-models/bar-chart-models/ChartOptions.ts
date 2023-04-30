import {
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexTitleSubtitle
} from "ng-apexcharts";

export class ChartOptions {
    series!: ApexAxisChartSeries;
    chart!: ApexChart;
    xaxis!: ApexXAxis;
    yaxis!: ApexYAxis;
    title!: ApexTitleSubtitle;

    static createChartOptions(xAxisName: string, xValues: any[], yValues: number[]): ChartOptions {
        return {
            series: [{ data: yValues, name: "" }],
            chart: { type: "bar", foreColor: "#FFFFFF", height:300, width:500},
            title: { text: "Distribution", style: { color: "#FFFFFF" } },
            xaxis: {
                categories: xValues,
                labels: {
                    style: { colors: "#FFFFFF" }
                },
                title:{text: xAxisName}
            },
            yaxis: {
                title: {
                    text: "Count", 
                    style:{
                        color: "#FFFFFF"
                    }
                }
            }

        };
    }
}
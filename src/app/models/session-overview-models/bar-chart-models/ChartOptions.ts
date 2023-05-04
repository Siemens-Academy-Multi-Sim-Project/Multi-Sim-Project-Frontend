import {
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexPlotOptions,
    ApexLegend
} from "ng-apexcharts";

export class BarChartOptions {
    series!: ApexAxisChartSeries;
    chart!: ApexChart;
    xaxis!: ApexXAxis;
    yaxis!: ApexYAxis;
    title!: ApexTitleSubtitle;

    static createBarChartOptions(xAxisName: string, xValues: any[], yValues: number[]): BarChartOptions {
        return {
            series: [{ data: yValues, name: "" }],
            chart: { type: "bar", foreColor: "#FFFFFF", height: 300, width: "100%" },
            title: { text: "Distribution", style: { color: "#FFFFFF" } },
            xaxis: {
                categories: xValues,
                labels: {
                    style: { colors: "#FFFFFF" }
                },
                title: { text: xAxisName }
            },
            yaxis: {
                title: {
                    text: "Count",
                    style: {
                        color: "#FFFFFF"
                    }
                }
            }

        };
    }
}

export class TreeMapChartOptions {
    series!: ApexAxisChartSeries;
    chart!: ApexChart;
    dataLabels!: ApexDataLabels;
    title!: ApexTitleSubtitle;
    plotOptions!: ApexPlotOptions;
    legend!: ApexLegend;

    static createTreeMapChartOptions(data: {labels:string[], sizes:number[]}): TreeMapChartOptions {
        let dataSeries = data.labels.map((value, idx) => {
            return { x: value, y: data.sizes[idx] }
        })

        return {
            series: [
                {data: dataSeries}
            ],
            legend: {
                show: false,
            },
            chart: {
                height: 387,
                type: "treemap",
                width: "100%"
            },
            title: {
                text: "DU Performance Heat Map",
                style: { color: "#FFFFFF" }
            },
            dataLabels: {
                enabled: true,
                offsetY: -3
            },
            plotOptions: {
                treemap: {
                    enableShades: true,
                    shadeIntensity: 0.5,
                    reverseNegativeShade: true,
                    colorScale: {
                        ranges: [
                            {
                                from: -6,
                                to: 0,
                                color: "#CD363A"
                            },
                            {
                                from: 0.001,
                                to: 6,
                                color: "#52B12C"
                            }
                        ]
                    }
                }
            }
        };
    }
}
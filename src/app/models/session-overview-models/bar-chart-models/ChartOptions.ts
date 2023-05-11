import {
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexPlotOptions,
    ApexLegend,
    ApexTooltip
} from "ng-apexcharts";
import { HeatMapEntry } from "../profiling-data/HeatMapEntry";

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
    legend!: ApexLegend;
    tooltip!: ApexTooltip;

    static createTreeMapChartOptions(entries: HeatMapEntry[]): TreeMapChartOptions {
        let dataSeries: { x: string, y: number, fillColor: string, filesAppearedIn: string[] }[] = []

        entries.forEach((entry) => {
            dataSeries.push({
                x: entry.name,
                y: entry.localHitsPercentage,
                fillColor: mapNumbersToColors(entry.avgPercentage),
                filesAppearedIn: entry.appearedIn
            })
        })

        return {
            series: [
                { data: dataSeries },

            ],
            legend: {
                show: true,
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
            tooltip: {
            
                custom: function ({ seriesIndex, dataPointIndex, w }) {
                    var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
                    return createToolTip(data.filesAppearedIn);
                }
            },
        };
    }
}

function createToolTip(files: string[]): string {
    return `<p>Appeared in ${files.length} simulations<br>
        ${files.join("<br>")}</p>
    `
}

function mapNumbersToColors(num: number | undefined): string {
    const [startNum, endNum] = [0, 1];
    const [startColor, endColor] = ["#FF0000", "#00FF00"];

    if (num == null) return startColor

    const colorMap = (n: number): string => {
        const p = (n - startNum) / (endNum - startNum); // Map current number value to 0-1 range
        const r = Math.round((1 - p) * parseInt(startColor.substring(1, 3), 16) + p * parseInt(endColor.substring(1, 3), 16)).toString(16).padStart(2, "0"); // Calculate red value of resulting color
        const g = Math.round((1 - p) * parseInt(startColor.substring(3, 5), 16) + p * parseInt(endColor.substring(3, 5), 16)).toString(16).padStart(2, "0"); // Calculate green value of resulting color
        const b = Math.round((1 - p) * parseInt(startColor.substring(5, 7), 16) + p * parseInt(endColor.substring(5, 7), 16)).toString(16).padStart(2, "0"); // Calculate blue value of resulting color
        return `#${r}${g}${b}`; // Return resulting color
    }

    return colorMap(num) // Map numbers to colors
}
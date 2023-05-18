import {
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexPlotOptions,
    ApexLegend,
    ApexTooltip,
    ApexNoData
} from "ng-apexcharts";
import { HeatMapEntry } from "../profiling-data/HeatMapEntry";

export class BarChartOptions {
    series!: ApexAxisChartSeries;
    chart!: ApexChart;
    xaxis!: ApexXAxis;
    yaxis!: ApexYAxis;
    title!: ApexTitleSubtitle;
    noData!: ApexNoData;

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
            },
            noData: {
                text: "No Data",
                align: "center"
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
    noData!: ApexNoData;

    static createTreeMapChartOptions(entries: HeatMapEntry[]): TreeMapChartOptions {
        let dataSeries: {
            x: string,
            y: number,
            fillColor: string,
            heatMapEntry: HeatMapEntry
        }[] = []

        let maxAvgLocalPercentage = 0
        entries.forEach((entry) => {
            maxAvgLocalPercentage = Math.max(maxAvgLocalPercentage, entry.avgPercentage)
        })

        entries.forEach((entry) => {
            dataSeries.push({
                x: entry.name,
                y: entry.localHitsPercentage,
                fillColor: mapNumbersToColors(entry.avgPercentage, maxAvgLocalPercentage),
                heatMapEntry: entry
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
                    return createToolTip(data.heatMapEntry);
                }
            },
            noData: {
                text: "No Data",
                align: "center"
            }
        };
    }
}

function createToolTip(entry: HeatMapEntry): string {
    let name = entry.name
    name = name.replace("<", "&lt;")
    name = name.replace(">", "&gt;")
    // FIXME: The only way to get the tooltip to overflow outside the bounds
    // of the heat map component is to set the position to fixed
    // but changing the page size messes up the tooltip position
    return `
    <div class="card" >
        <div class="card-body">
            <p class="card-text"><b>DU Name:</b> ${name}</p>
            <hr style="border-top: 2px solid blue">
            <p class="card-text"><b>DU Local Hits Percentage:</b> ${(entry.localHitsPercentage * 100).toFixed(2)}%</p>
            <hr style="border-top: 2px solid blue">
            <p class="card-text"><b>DU Avg Local Percentage:</b> ${(entry.avgPercentage * 100).toFixed(2)}%</p>
            <hr style="border-top: 2px solid blue">
            <p class="card-text">Appeared in ${entry.appearedIn.length} simulation(s)</p>
            ${entry.appearedIn.join('<br>')}
        </div>
    </div>
    `
}

function mapNumbersToColors(num: number | undefined, max: number): string {
    const [startNum, endNum] = [0, max];
    const [startColor, endColor] = ["#00FF00", "#FF0000"];

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

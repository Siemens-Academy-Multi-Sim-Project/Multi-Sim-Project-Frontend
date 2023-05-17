import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { BarChartOptions } from 'src/app/models/session-overview-models/bar-chart-models/ChartOptions';
import { GroupingStrategy, groupData } from 'src/app/shared/utils/DynamicHistogram';
import { UnitData } from "../../models/session-overview-models/profiling-data/UnitData";

@Component({
  selector: 'app-overview-bar-chart',
  templateUrl: './overview-bar-chart.component.html',
  styleUrls: ['./overview-bar-chart.component.css'],
})
export class OverviewBarChartComponent implements OnChanges {

  @ViewChild("chart", { static: false }) chart!: ChartComponent;
  public chartOptions!: BarChartOptions;

  @Input() public chartingData: Map<string, number[]> = new Map<string, number[]>()

  graphingChoices: string[] = []
  selectedGraphingChoice: string = ""

  binStrategy: GroupingStrategy[] = ["Tight Grouping", "Moderate Grouping", "Loose Grouping", "No Grouping"]
  selectedBinStrategy: GroupingStrategy = "Tight Grouping"


  ngOnChanges(changes: SimpleChanges): void {
    this.graphingChoices = Array.from(this.chartingData.keys())
    this.selectedGraphingChoice = this.graphingChoices[0]
    this.renderGraph()
  }

  getCurrentlySelectedData(): number[] {
    return this.chartingData.get(this.selectedGraphingChoice) || []
  }

  onGraphingDataChanged(): void {
    this.renderGraph();
  }


  private renderGraph() {
    let currentData = this.getCurrentlySelectedData();
    let currentStrategy = this.selectedBinStrategy;

    let [labels, counts] = groupData(currentData, currentStrategy);
    this.chartOptions = BarChartOptions.createBarChartOptions(
      this.selectedGraphingChoice,
      labels,
      counts
    );
  }
}

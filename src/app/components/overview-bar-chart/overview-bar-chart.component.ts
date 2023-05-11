import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChartComponent} from "ng-apexcharts";
import {BarChartOptions} from 'src/app/models/session-overview-models/bar-chart-models/ChartOptions';
import {GroupingStrategy, groupData} from 'src/app/shared/utils/DynamicHistogram';
import {UnitData} from "../../models/session-overview-models/profiling-data/UnitData";

@Component({
  selector: 'app-overview-bar-chart',
  templateUrl: './overview-bar-chart.component.html',
  styleUrls: ['./overview-bar-chart.component.css'],
})
export class OverviewBarChartComponent implements OnInit, OnChanges {

  @ViewChild("chart", {static: false}) chart!: ChartComponent;
  public chartOptions!: BarChartOptions;

  @Input() public vsimTimes: number[] = [];
  @Input() public vsimMemories: number[] = [];
  @Input() public voptMemories: number[] = [];

  graphingChoices = ["Vsim Time Sec", "Vopt Memory GB", "Vsim Memory GB"]
  selectedGraphingChoice: string = this.graphingChoices[0]

  binStrategy: GroupingStrategy[] = ["Tight Grouping", "Moderate Grouping", "Loose Grouping", "No Grouping"]
  selectedBinStrategy: GroupingStrategy = "Tight Grouping"


    ngOnInit(): void {
        this.renderGraph()
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.renderGraph()
    }
    getCurrentlySelectedTestData(): number[]{
        switch (this.selectedGraphingChoice) {
            case this.graphingChoices[0]:
                return this.vsimTimes
            case this.graphingChoices[1]:
                return this.voptMemories
            default:
                return this.vsimMemories
        }
    }

  onGraphingDataChanged(): void {
    this.renderGraph();
  }


  private renderGraph() {
    let currentData = this.getCurrentlySelectedTestData();
    let currentStrategy = this.selectedBinStrategy;

    let buckets = groupData(currentData, currentStrategy);
    this.chartOptions = BarChartOptions.createBarChartOptions(
      this.selectedGraphingChoice,
      buckets[0],
      buckets[1]
    );
  }
}

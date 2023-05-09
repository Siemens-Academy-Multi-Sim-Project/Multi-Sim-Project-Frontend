import {Component, ViewEncapsulation} from '@angular/core';
import {SingleAttribute} from "../../models/session-overview-models/singleAttribute";
import {MultiAttribute} from "../../models/session-overview-models/multiAttribute";
import {DualAttribute} from "../../models/session-overview-models/dual-attribute";
import {OverviewService} from 'src/app/services/overview-service/overview.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Columns} from "../../models/usage-profile/columns";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-session-overview',
  templateUrl: './session-overview.component.html',
  styleUrls: ['./session-overview.component.css']
})
export class SessionOverviewComponent {

  constructor(public service: OverviewService, private route: ActivatedRoute, private router: Router) {
    let id = this.route.snapshot.queryParamMap.get('clusterId') || "blabla";

    if(id == "blabla"){
      this.router.navigate(['/clusterNotFound'])
    }

    service.getClusterById(id).subscribe((data) => {
      this.service.set_profiling_data(data);
      if(data.length == 0){
        this.router.navigate(['/clusterNotFound'])
      }
      // console.log(this.service.profilingDataArray);
      this.singleAttributes = [this.service.getTotalSimulations(), this.service.getDesigns()]
      this.multiAttributes = [this.service.getVoptTime_multiAttr(), this.service.getVsimTime_multiAttr(), this.service.getVoptMemory_multiAttr(), this.service.getVsimMemory_multiAttr()]
      this.dualAttribute = this.service.getSamplesAndCalls();
      
      this.vsimTimes = this.service.getVsimTimes();
      this.voptMemories = this.service.getVoptMemory();
      this.vsimMemories = this.service.getVsimMemory();
      this.usageProfileData = this.service.getUsageProfilingData();
      this.table_data = new MatTableDataSource<Columns>(this.usageProfileData);
      this.duHits = this.service.getDuLocalHitsData()
      this.duAvgPercentages = this.service.getDuAvgHitPercentage()
    })
  }


  singleAttributes: SingleAttribute[] = [];
  multiAttributes: MultiAttribute[] = [];
  dualAttribute: DualAttribute = {calls: 0, samples: 0};
  usageProfileData: Columns[] = [];
  table_data: MatTableDataSource<Columns> = new MatTableDataSource<Columns>(this.usageProfileData);

  public vsimTimes: number[] = [];
  public vsimMemories: number[] = [];
  public voptMemories: number[] = [];

  duHits: Map<string,  number> = new Map<string, number>();
  duAvgPercentages:Map<string,  number> = new Map<string, number>();
}

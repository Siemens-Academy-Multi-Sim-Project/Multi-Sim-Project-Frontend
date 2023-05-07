import {Component} from '@angular/core';
import {SingleAttribute} from "../../models/session-overview-models/singleAttribute";
import {MultiAttribute} from "../../models/session-overview-models/multiAttribute";
import {DualAttribute} from "../../models/session-overview-models/dual-attribute";
import {UsageProfileTableComponent} from "../usage-profile-table/usage-profile-table.component";
import { OverviewService } from 'src/app/services/overview-service/overview.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-session-overview',
  templateUrl: './session-overview.component.html',
  styleUrls: ['./session-overview.component.css']
})
export class SessionOverviewComponent {
  
  constructor(public service: OverviewService, private route: ActivatedRoute){
    console.log(this.route.snapshot.queryParamMap.get('clusterId'));
    service.getClusterById(1).subscribe((data) => {
      console.log(data);
    })
  }

  singleAttributes: SingleAttribute[] = [{count: 420, type: "Test Element"}];
  multiAttributes: MultiAttribute[] = [{
    min: 4,
    max: 9,
    avg: 6,
    min_name: "min temp data",
    max_name: "max temp data",
    avg_name: "avg temp data",
    measuring_unit: "GB"
  }];
  dualAttribute: DualAttribute  = {calls: 465, samples: 123};

  parseSingleAttrub(ind: number){
    return this.singleAttributes[ind]
  }
}

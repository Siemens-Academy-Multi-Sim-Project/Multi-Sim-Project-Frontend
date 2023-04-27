import {Component} from '@angular/core';
import {SingleAttribute} from "../../models/singleAttribute";
import {MultiAttribute} from "../../models/multiAttribute";
import {DualAttribute} from "../../models/dual-attribute";

@Component({
  selector: 'app-session-overview',
  templateUrl: './session-overview.component.html',
  styleUrls: ['./session-overview.component.css']
})
export class SessionOverviewComponent {
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
}

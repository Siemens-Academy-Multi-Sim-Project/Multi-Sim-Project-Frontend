import {Component, Input} from '@angular/core';
import {MultiAttribute} from "../../../models/session-overview-models/multiAttribute";

@Component({
  selector: 'app-multi-attribute',
  templateUrl: './multi-attribute.component.html',
  styleUrls: ['./multi-attribute.component.css']
})
export class MultiAttributeComponent {
  @Input() multi_attribute_info: MultiAttribute = {min: 0, max: 0, avg: 0, min_name: "", max_name: "", avg_name: "", measuring_unit: ""};
}

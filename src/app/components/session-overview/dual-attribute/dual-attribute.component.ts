import {Component, Input} from '@angular/core';
import {DualAttribute} from "../../../models/session-overview-models/dual-attribute";

@Component({
  selector: 'app-dual-attribute',
  templateUrl: './dual-attribute.component.html',
  styleUrls: ['./dual-attribute.component.css']
})
export class DualAttributeComponent {
  @Input() dual_attribute_info: DualAttribute={calls:0,samples:0};
}

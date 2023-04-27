import {Component, Input} from '@angular/core';
import {SingleAttribute} from "../../../models/singleAttribute";

@Component({
  selector: 'app-single-attribute',
  templateUrl: './single-attribute.component.html',
  styleUrls: ['./single-attribute.component.css']
})
export class SingleAttributeComponent {
  @Input() attribute_info: SingleAttribute={count:0,type:""};
}

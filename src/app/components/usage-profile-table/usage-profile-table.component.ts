import {Component, Input} from '@angular/core';
import {Columns} from "../../models/usage-profile/columns";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-usage-profile-table',
  templateUrl: './usage-profile-table.component.html',
  styleUrls: ['./usage-profile-table.component.css']
})
export class UsageProfileTableComponent {


  @Input() data: Columns[] = [];

  col_defs = [
    {property: "file_name", displayName: "File Name"},
    {property: "design_type", displayName: "Design Type"},
    {property: "methodology", displayName: "Methodology"},
    {property: "language", displayName: "Language"},
    {property: "du_count", displayName: "DU #"},
    {property: "vopt_time", displayName: "VOPT Time"},
    {property: "vsim_time", displayName: "VSIM Time"},
    {property: "vopt_memory", displayName: "VOPT Memory"},
    {property: "vsim_memory", displayName: "VSIM Memory"},
    {property: "pref_samples", displayName: "Pref Samples"},
    {property: "randomize_calls", displayName: "Randomize Calls"},
    {property: "date_of_collection", displayName: "Date of Collection"},
    {property: "vopt_cmd", displayName: "VOPT CMD"},
    {property: "vsim_cmd", displayName: "VSIM CMD"},
  ]
  displayedColumns: string[] = ["File Name", "Design Type", "Methodology", "Language", "DU #", "VOPT Time", "VSIM Time", "VOPT Memory", "VSIM Memory", "Pref Samples", "Randomize Calls", "Date of Collection", "VOPT CMD", "VSIM CMD"];

  @Input() dataSource = new MatTableDataSource<Columns>(this.data);

  selected_item: string = "";
  selected_property: string = "";

  setItemData(item: string, property: string) {
    console.log("item: " + item + " property: " + property);
    if (item === '') {

      return;
    }
    this.selected_item = item;
    this.selected_property = property;
  }

  resetSelected() {
    this.selected_item = "";
    this.selected_property = "";
  }
}

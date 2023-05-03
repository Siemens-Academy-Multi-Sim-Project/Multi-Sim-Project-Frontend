import {Component} from '@angular/core';
import {Columns} from "../../models/usage-profile/columns";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-usage-profile-table',
  templateUrl: './usage-profile-table.component.html',
  styleUrls: ['./usage-profile-table.component.css']
})
export class UsageProfileTableComponent {


  data: Columns[] = [
    {
      file_name: "test",
      design_type: "test",
      methodology: "test",
      language: "test",
      du_count: 1,
      vopt_time: "test",
      vsim_time: "test",
      vopt_memory: "test",
      vsim_memory: "test",
      pref_samples: 1,
      randomize_calls: 1,
      date_of_collection: "test",
      vopt_cmd: "test",
      vsim_cmd: "test"
    }, {
      file_name: "test",
      design_type: "test",
      methodology: "test",
      language: "test",
      du_count: 1,
      vopt_time: "test",
      vsim_time: "test",
      vopt_memory: "test",
      vsim_memory: "test",
      pref_samples: 1,
      randomize_calls: 1,
      date_of_collection: "test",
      vopt_cmd: "test",
      vsim_cmd: "test"
    }, {
      file_name: "test",
      design_type: "test",
      methodology: "test",
      language: "test",
      du_count: 1,
      vopt_time: "test",
      vsim_time: "test",
      vopt_memory: "test",
      vsim_memory: "test",
      pref_samples: 1,
      randomize_calls: 1,
      date_of_collection: "test",
      vopt_cmd: "test",
      vsim_cmd: "teste"
    },
    {
      file_name: "test",
      design_type: "test",
      methodology: "test",
      language: "test",
      du_count: 1,
      vopt_time: "test",
      vsim_time: "test",
      vopt_memory: "test",
      vsim_memory: "test",
      pref_samples: 1,
      randomize_calls: 1,
      date_of_collection: "test",
      vopt_cmd: "test",
      vsim_cmd: "teste"
    },{
      file_name: "test",
      design_type: "test",
      methodology: "test",
      language: "test",
      du_count: 1,
      vopt_time: "test",
      vsim_time: "test",
      vopt_memory: "test",
      vsim_memory: "test",
      pref_samples: 1,
      randomize_calls: 1,
      date_of_collection: "test",
      vopt_cmd: "test",
      vsim_cmd: "teste"
    },{
      file_name: "test",
      design_type: "test",
      methodology: "test",
      language: "test",
      du_count: 1,
      vopt_time: "test",
      vsim_time: "tnwnwnwnwnwnwnwnwnwnwnwnwwnwnw",
      vopt_memory: "test",
      vsim_memory: "test",
      pref_samples: 1,
      randomize_calls: 1,
      date_of_collection: "test",
      vopt_cmd: "test",
      vsim_cmd: "bawudguipagdagdwyogdayuogwugodaougyuwogduygdouwagdayodg"
    }
  ];

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

  columnsToDisplay: string[] = this.displayedColumns;
  dataSource = new MatTableDataSource<Columns>(this.data);

}

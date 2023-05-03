export interface Columns {
  file_name: string;
  design_type: string;
  methodology: string;
  language: string;
  du_count: number;
  vopt_time: string;

  vsim_time: string;

  vopt_memory: string;
  vsim_memory: string;
  pref_samples: number;
  randomize_calls: number;
  date_of_collection: string;
  vopt_cmd: string;
  vsim_cmd: string;
}

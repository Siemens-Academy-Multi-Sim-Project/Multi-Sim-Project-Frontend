import { Component } from '@angular/core';
import { DataCluster } from 'src/app/models/session-overview-models/profiling-data/DataCluster';
import { ProfilingDataListService } from 'src/app/services/profiling-data-list-service/profiling-data-list.service';

@Component({
  selector: 'app-profiling-data-list',
  templateUrl: './profiling-data-list.component.html',
  styleUrls: ['./profiling-data-list.component.css']
})
export class ProfilingDataListComponent {
profilingDataClusters:DataCluster[] = [];
p:any;
// profilingDataClustersNames:String[]=[];
constructor(private clusterService:ProfilingDataListService){
  // clusterService.getClustersData().subscribe((data) => {
  //   console.log(data);
  //   this.clusterService.setClusterData(data);
  //   console.log(this.clusterService.profilingDataClustersArray);
  // })
  this.clusterService.profilingDataClustersArray.forEach((data) => {
    this.profilingDataClusters.push(data)
  })
  
}

}

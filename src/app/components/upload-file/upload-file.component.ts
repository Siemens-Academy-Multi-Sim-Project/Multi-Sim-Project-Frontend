import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {UploadFilesService} from 'src/app/services/upload-file-service/upload-files.service';
import { DataCluster } from 'src/app/models/session-overview-models/profiling-data/DataCluster';
import { ProfilingDataListService } from 'src/app/services/profiling-data-list-service/profiling-data-list.service';
import {faFile} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'], encapsulation: ViewEncapsulation.None,
})
export class UploadFileComponent implements OnInit {

  fileUploadForm!: FormGroup;
  selectedFiles: File[] = [];
  clusterName: string = "";
  profilingDataClusters:DataCluster[] = [];
  can_attach: boolean = false;
  faFile = faFile;
  constructor(private formBuilder: FormBuilder, private uploadFile: UploadFilesService,private clusterService:ProfilingDataListService) {
    clusterService.getClustersData().subscribe((data) => {
      console.log(data);
      this.clusterService.setClusterData(data);
      // console.log(this.clusterService.profilingDataClustersArray);
      this.clusterService.profilingDataClustersArray.forEach((data) => {
        this.profilingDataClusters.push(data)
      })
    })

  }

  ngOnInit() {
    this.fileUploadForm = this.formBuilder.group({
      file: [''],
      clusterName: ['']
    });
  }


  async send_files() {
    const formData = new FormData();
    const files = this.selectedFiles;
    this.clusterName = this.fileUploadForm.get('clusterName')?.value;
    if (this.clusterName == "") {
      alert("Please enter a cluster name");
      return;
    }
    if (files.length === 0) {
      alert("Please select a file");
      return;
    }
    if (files && files.length > 0) {
      formData.append('ClusterName', this.clusterName);
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(file);
        formData.append('file', file);
      }
      this.uploadFile.handle_files(formData);

    }
    console.log(this.clusterName);
  }

  clearSelectedFiles() {
    this.selectedFiles = [];
    this.fileUploadForm.get('file')?.setValue(null);
    this.can_attach = false;
    this.clusterName = "";
  }

  onFileSelect(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files: FileList | null = inputElement.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.selectedFiles.push(file);
      }
      this.fileUploadForm.get('file')?.setValue(null);
    }
  }

  removeSelectedFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }

}

import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { UploadFilesService } from 'src/app/services/upload-file-service/upload-files.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

declare type UploadState = "Idle" | "Uploading" | "Done"

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  fileUploadForm!: FormGroup;
  clusterName: string = "";
  filesStates: Map<string, UploadState> = new Map<string, UploadState>()
  files: Map<string, File> = new Map<string, File>()

  Idle: UploadState = "Idle"
  Uploading: UploadState = "Uploading"
  Done: UploadState = "Done"

  canRediretLiveData: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false)
  createdClusterId!: number

  finishedUploading: number = 0
  

  constructor(
    private formBuilder: FormBuilder,
    private uploadFile: UploadFilesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fileUploadForm = this.formBuilder.group({
      file: [''],
      clusterName: ['']
    });

    this.canRediretLiveData.subscribe((canRedirect) => {
      if(canRedirect){
        this.router.navigate([
          "session-overview"
        ], {
          queryParams:{clusterId: this.createdClusterId}
        })
      }
    })
  }

  onClusterCreated(){
    this.files.forEach((file, name) => {
      this.filesStates.set(name, "Uploading")
      this.uploadFile.uploadFile(this.clusterName, file)
        .subscribe(() => {
          this.filesStates.set(name, "Done")
          this.finishedUploading++

          this.canRediretLiveData.next(
            this.finishedUploading === this.files.size
          )
        })
    })
  }

  onSubmit() {
    this.clusterName = this.fileUploadForm.get('clusterName')?.value;
    if (this.clusterName == "") {
      alert("Please enter a cluster name");
      return;
    }
    if (this.files.size === 0) {
      alert("Please select a file");
      return;
    }
    this.uploadFile.create_cluster(this.clusterName)
      .subscribe((newId) => { 
        this.createdClusterId = newId
        this.onClusterCreated() 
      })

  }


  clearSelectedFiles() {
    this.filesStates.clear();
    this.files.clear();
    this.fileUploadForm.get('file')?.setValue(null);
    this.clusterName = "";
    this.finishedUploading = 0
  }

  onFileSelect(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files: FileList | null = inputElement.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.filesStates.set(file.name, "Idle")
        this.files.set(file.name, file)
      }
      this.fileUploadForm.get('file')?.setValue(null);
    }
  }

  removeSelectedFileMap(name: string) {
    this.files.delete(name)
    this.filesStates.delete(name)
  }

}

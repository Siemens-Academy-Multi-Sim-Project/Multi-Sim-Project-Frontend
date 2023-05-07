import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {UploadFilesService} from "../../Services/upload-file-service/upload-files.service";


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'], encapsulation: ViewEncapsulation.None,
})
export class UploadFileComponent implements OnInit {

  fileUploadForm!: FormGroup;
  selectedFiles: File[] = [];
  clusterName: String = "";

  constructor(private formBuilder: FormBuilder, private uploadFile: UploadFilesService) {


  }

  ngOnInit() {
    this.fileUploadForm = this.formBuilder.group({
      file: [''],
      clusterName: ['']
    });
  }

  onSubmit() {
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
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(file);
        formData.append('file', file);
        this.uploadFile.handle_files(formData);
        formData.delete('file');
      }
      // send formData to server

    }
    console.log(this.clusterName);
  }

  clearSelectedFiles() {
    this.selectedFiles = [];
    this.fileUploadForm.get('file')?.setValue(null);
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

  // getFil1(event: any) {
  //   this.file = event.target.files[0];
  // }

  // submitData() {
  //   let formData = new FormData();
  //   this.startUpload = true; //true while the upload not finished
  //   formData.set('file', this.file);//setting  the dile
  //
  //
  //   this.uploadObject.UploadCSV(formData);
  //   /*this.http.post('http://localhost:8080/UploadCSV',formData,{
  //     reportProgress:true,
  //     observe:'events'
  //   }).subscribe((event)=>{
  //     if(event.type==HttpEventType.UploadProgress ){
  //         this.total = event.total;//total file size
  //         this.progress=Math.round(event.loaded / this.total * 100) +'%';
  //         console.log(this.progress);
  //         setTimeout(()=>{},3000);
  //     }
  //     else if(event.type==HttpEventType.Response){ //is the file succesfully uploaded
  //       console.log(event);
  //       this.uploaded=true;
  //       this.startUpload=false;
  //     }
  //     })*/
  //
  // }
}

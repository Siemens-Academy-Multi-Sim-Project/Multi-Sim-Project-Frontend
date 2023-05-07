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
  clusterName: string = "";

  can_attach: boolean = false;

  constructor(private formBuilder: FormBuilder, private uploadFile: UploadFilesService) {


  }

  ngOnInit() {
    this.fileUploadForm = this.formBuilder.group({
      file: [''],
      clusterName: ['']
    });
  }

  generate_cluster() {
    this.clusterName = this.fileUploadForm.get('clusterName')?.value;
    if (this.clusterName == "") {
      alert("Please enter a cluster name");
      return;
    } else {
      this.uploadFile.create_cluster(this.clusterName).then(() => {
        alert("Cluster created successfully Plz Attach Files");
        this.can_attach = true;
      }).catch((err) => {
        alert("Error While Creating CLuster!");
      });
    }
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
      await this.uploadFile.create_cluster(this.clusterName)
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(file);
        formData.append('file', file);
        await this.uploadFile.handle_files(formData);
        setTimeout(() => {
        }, 1000);
        formData.delete('file');
      }

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

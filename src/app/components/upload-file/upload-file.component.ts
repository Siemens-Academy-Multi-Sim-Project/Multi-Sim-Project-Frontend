import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { UploadFileService } from 'src/app/services/upload-file-service/upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],encapsulation: ViewEncapsulation.None,
})
export class UploadFileComponent implements OnInit{
  myform!: FormGroup;
  file:any;
  username!:any;
  total:any;
  uploaded: boolean = false;
  startUpload: boolean = false;
  progress:any;

  constructor( public  uploadObject : UploadFileService,public  http:HttpClient){}
  ngOnInit() {

      }
  getFil1( event : any){
    this.file= event.target.files[0];
 }

 submitData(){
  let formData =new FormData();
  this.startUpload=true; //true while the upload not finished
  formData.set('file',this.file);//setting  the dile


   this.uploadObject.UploadCSV(formData);
  /*this.http.post('http://localhost:8080/UploadCSV',formData,{
    reportProgress:true,
    observe:'events'
  }).subscribe((event)=>{
    if(event.type==HttpEventType.UploadProgress ){
        this.total = event.total;//total file size
        this.progress=Math.round(event.loaded / this.total * 100) +'%';
        console.log(this.progress);
        setTimeout(()=>{},3000);
    }
    else if(event.type==HttpEventType.Response){ //is the file succesfully uploaded
      console.log(event);
      this.uploaded=true;
      this.startUpload=false;
    }
    })*/

}
}

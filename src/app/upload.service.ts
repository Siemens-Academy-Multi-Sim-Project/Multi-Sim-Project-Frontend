import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(public http:HttpClient ) { }
  total:any;
  uploaded: boolean = false;
  startUpload: boolean = false;
  progress:any;

  UploadCSV( formData:FormData   ){
    this.http.post('http://127.0.0.1:8000/public/UF/',formData,{
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
      })

  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

constructor(private http: HttpClient,private router: Router) { }
url!:string
register(fName: string,lName:string ,mail:string , pword:string){
this.url="http://localhost:8080/api/v1/registration";
console.log("hello ",fName,"  ",pword);

const body = {
  "firstName": fName,
  "lastName":lName,
  "email":mail,
  "password":pword
};
 this.http.post(this.url ,body ,{
  headers: {
    "Content-Type": "application/json"
  }
}).subscribe(response => {
  console.log(response);
},
error => {
  if(error.status==200){
    alert("Please check Your mailbox to confirm your account");

    this.router.navigate(['/login']);
  }
  else{
    alert("Registeration faild");
    this.router.navigate(['/signUp']);

  }
  // Display an error message or something
})
}


}

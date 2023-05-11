import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient,private router: Router) { }
  valid!:Boolean;

  login(username: string, password: string): any{
    this.valid=false;
    const url = 'http://localhost:8080';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });

    return this.http.get<Response>(url, { headers }).subscribe(
      Response => {
        console.log('Login succeeded:::', Response);
        this.router.navigate(['/profiling-data-list']);
        return this.valid=true;
        // Redirect to the home page or some other page
      },
      error => {
        if(error.status==200){
          console.log('Login succeeded:', error);
          localStorage.setItem("Email", username);
          localStorage.setItem("Password",password);
          this.valid=true;
          console.log('this.valid from if serviceee', this.valid);
          this.router.navigate(['/profiling-data-list']);
          return this.valid;
        }
        else{
          console.log('Login failed:', error);
          this.valid=false;
          alert("Wrong username or password");
          return this.valid;
        }
        // Display an error message or something
      }
    )
    return this.valid;
  }
}

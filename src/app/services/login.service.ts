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
        this.router.navigate(['/profiling-data-list']);
        return this.valid=true;
        // Redirect to the home page or some other page
      },
      error => {
        if(error.status==200){
          localStorage.clear();
          localStorage.setItem("Auth", btoa(username + ':' +password));
          this.valid=true;
          this.router.navigate(['/profiling-data-list']);
          return this.valid;
        }
        else{
          this.valid=false;
          alert("Wrong username or password");
          return this.valid;
        }
      }
    )
    return this.valid;
  }
}

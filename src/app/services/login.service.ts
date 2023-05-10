import { HttpClient,HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
   login(username:any,password:any): any{
    const url = 'http://localhost:8080/login';
    const body = new HttpParams()
    .set('username', username)
    .set('password', password)
    .toString();

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

   /* this.http.post<any>(url, body, { headers }).subscribe(
      response => {
        console.log('Login succeeded:', response);
        // Redirect to the home page or some other page
      },
      error => {
        console.log('Login failed:', error);
        // Display an error message or something
      }
    );*/
  }
  }




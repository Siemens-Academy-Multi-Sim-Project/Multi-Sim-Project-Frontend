import { HttpClient, HttpHeaders, HttpParams, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    username = "omar.atef.2001@gmail.com"
    password = "1010abab";

    defaultAuthObject = {
        headers: {
            Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
        }
    }

    constructor(private http: HttpClient) {
    }

    get<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        context?: HttpContext;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T> {
        return this.http
            .get<T>(
                environment.baseUrl + url,
                {...options, ...this.defaultAuthObject}
            );   
    }


    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        context?: HttpContext;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>{
        return this.http
            .post(
                environment + url,
                body,
                {...options, ...this.defaultAuthObject}
            )
    }

}

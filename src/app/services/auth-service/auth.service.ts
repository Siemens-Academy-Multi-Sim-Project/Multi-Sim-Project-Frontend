import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from 'src/app/models/auth/LoginRequest';
import { RegisterRequest } from 'src/app/models/auth/RegisterRequest';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(
		private http: HttpClient
	) { }

	static AUTH_HEADER_COOKIE_KEY = "auth"
	static EMAIL_COOKIE_KEY = "email"

	login(email: string, password: string) {
		let loginRequestBody: LoginRequest = { email: email, password: password }

		return this.http.post(environment.baseUrl + "/auth/login", loginRequestBody)
	}

	register(
		fName: string, lName: string, mail: string, pword: string
	) {
		let registerRequestBody: RegisterRequest = {
			firstName: fName,
			lastName: lName,
			email: mail,
			password: pword
		}
		console.log(registerRequestBody);

		return this.http.post(
			environment.baseUrl + "/auth/register",
			registerRequestBody, 
			{
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
	}

	logOut(){
		localStorage.clear()
	}

	saveToLocalStorage(email: string | null, password: string | null) {
		if (email === null || password === null) {
			return
		}

		localStorage.setItem(AuthService.AUTH_HEADER_COOKIE_KEY, btoa(email + ":" + password))
		localStorage.setItem(AuthService.EMAIL_COOKIE_KEY, email)
	}

	isLoggedIn(): boolean{
		return localStorage.getItem(AuthService.AUTH_HEADER_COOKIE_KEY) != null
	}

	getAuthHeader(): string {
		let header = 'Basic ' + localStorage.getItem(AuthService.AUTH_HEADER_COOKIE_KEY)
		return header
	}
}

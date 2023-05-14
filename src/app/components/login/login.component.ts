import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    faUser = faUser;
    errorMessage: string | null  = null

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthService
    ) { }
    loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    });
    submit() {
        this.errorMessage = null

        let email = this.loginForm.get('email')?.value || null;
        let password = this.loginForm.get('password')?.value || null;

        if(email === null || password === null) {
            this.errorMessage = "Please enter your credentials"
            return
        }
        
        this.authService.login(email, password)
            .pipe((
                catchError(() => {
                    this.errorMessage = "Incorrect Username or Password"
                    return []
                })
            ))
            .subscribe(() => {
                this.authService.saveToLocalStorage(email, password)
                this.router.navigate(['/upload-file'])
            })
    }
}

import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from '../../shared/validators/password.validator';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Route, Router } from '@angular/router';
import { catchError } from 'rxjs';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    faUser = faUser;
    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) { }

    errorMessage: string | null = null


    registerationForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        email: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required]
    }, { validator: passwordValidator });



    submit() {
        this.errorMessage = null
        let firstName = this.registerationForm.get('firstName')?.value
        let lastName = this.registerationForm.get('lastName')?.value
        let email = this.registerationForm.get('email')?.value
        let password = this.registerationForm.get('password')?.value

        if(this.registerationForm.invalid) return

        this.authService.register(
            firstName,
            lastName,
            email,
            password
        ).pipe((
            catchError((response) => {
                this.errorMessage = response.error.message
                return []
            })
        ))
        .subscribe((response)=> {
            console.log(response);
            alert("Please check Your mailbox to confirm your account");

            this.router.navigate(['/login']);
        })
    }

}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {faUser} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faUser = faUser;
  constructor(private fb:FormBuilder){}
  loginForm = this.fb.group({
    email: ['',[Validators.required,Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]],
    password: ['',[Validators.required,Validators.minLength(8)]]
  });
}

import { Component } from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {FormBuilder,Validators} from '@angular/forms';
import { passwordValidator } from '../shared/password.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  faUser = faUser;
  constructor(private fb:FormBuilder){}
  registerationForm = this.fb.group({
    firstName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    lastName: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email: ['',[Validators.required,Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]],
    password: ['',[Validators.required,Validators.minLength(8)]],
    confirmPassword: ['',Validators.required]
  },{validator:passwordValidator});
  
}

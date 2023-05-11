import { Component } from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {FormBuilder,Validators} from '@angular/forms';
import { passwordValidator } from '../../shared/validators/password.validator';
import { RegisterationService } from 'src/app/services/Registeration.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  faUser = faUser;
  constructor(private fb:FormBuilder,private registerationService:RegisterationService){}
  registerationForm = this.fb.group({
    firstName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    lastName: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email: ['',[Validators.required,Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]],
    password: ['',[Validators.required,Validators.minLength(8)]],
    confirmPassword: ['',Validators.required]
  },{validator:passwordValidator});
  submit(){
    this.registerationService.register(this.registerationForm.get('firstName')?.value,this.registerationForm.get('lastName')?.value ,this.registerationForm.get('email')?.value ,this.registerationForm.get('password')?.value );
  }

}

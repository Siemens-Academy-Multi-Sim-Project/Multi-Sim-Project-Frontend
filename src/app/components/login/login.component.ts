import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faUser = faUser;
  email:any;
  errorMessage=false;

  password:any;
  valid!:Boolean;
  constructor(private fb:FormBuilder,private loginService:LoginService,private router: Router){}
  loginForm = this.fb.group({
    email: ['',[Validators.required,Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]],
    password: ['',[Validators.required,Validators.minLength(8)]]
  });
  submit(){
    this.email=this.loginForm.get('email')?.value;
    this.password=this.loginForm.get('password')?.value;
    this.valid=this.loginService.login(this.email, this.password);
    console.log('this.valid form the component', this.valid);

    if(this.valid==true){
      this.errorMessage=false;
      this.router.navigate(['/profiling-data-list']);
    }
    else{
     // this.errorMessage=true;
      throw new Error('Incorrect username or password');
    }
  }
}

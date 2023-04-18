import { Component } from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  faUser = faUser;
}

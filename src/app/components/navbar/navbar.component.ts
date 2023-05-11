import { Component, Input } from '@angular/core';
import {LogoutService} from 'src/app/services/Logout.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() homePage:boolean=true;
  userName=localStorage.getItem("Email");
  constructor(private logoutService: LogoutService) {}
  onLogOut(){
    this.logoutService.logout();
  }
}

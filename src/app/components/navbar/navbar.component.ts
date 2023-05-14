import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() homePage: boolean = true;
  userName = localStorage.getItem(AuthService.EMAIL_COOKIE_KEY);

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}

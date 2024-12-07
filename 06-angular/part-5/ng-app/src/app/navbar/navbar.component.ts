import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      this.isAdmin = user?.email == 'taberkkaya@gmail.com';
    });
  }

  logout() {
    this.authService.logout();
  }
}

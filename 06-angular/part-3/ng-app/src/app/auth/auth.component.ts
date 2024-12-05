import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AuthResponse } from '../models/auth-response';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  constructor(private authService: AuthService) {}

  loading: boolean = false;
  isLoginMode: boolean = true;
  error: string = '';

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  handleAuth(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.loading = true;
    const email = form.value.email;
    const password = form.value.password;
    let authResponse: Observable<AuthResponse>;

    if (this.isLoginMode) {
      authResponse = this.authService.login(email, password);
    } else {
      authResponse = this.authService.register(email, password);
    }

    authResponse.subscribe({
      next: (response) => {
        // console.log(response);
        this.loading = false;
        this.error = '';
        console.log(response);
      },

      error: (err) => {
        this.loading = false;
        this.error = err;
        // console.log(err);
      },
    });
  }
}

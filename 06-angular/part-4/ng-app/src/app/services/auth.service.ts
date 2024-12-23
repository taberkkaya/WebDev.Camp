import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/auth-response';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api_key = 'AIzaSyCmD5_fWKh-APdBCFaZDDh-E3y0dOsDU70';

  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  register(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          this.api_key,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((response) => {
          this.handleUser(
            response.email,
            response.localId,
            response.idToken,
            response.expiresIn
          );
        }),
        catchError(this.handleError)
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          this.api_key,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((response) => {
          // observable, subject => rxjs
          this.handleUser(
            response.email,
            response.localId,
            response.idToken,
            response.expiresIn
          );
        }),
        catchError(this.handleError)
      );
  }

  autoLogin() {
    if (localStorage.getItem('user') == null) {
      return;
    }

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const loadedUser = new User(
      user.email,
      user.id,
      user._token,
      new Date(user._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
    }
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('user');
  }

  private handleError(err: HttpErrorResponse) {
    let message = 'There is an error';

    // console.log(err);

    if (err.error.error) {
      switch (err.error.error.message) {
        case 'EMAIL_EXISTS':
          message = 'Mail adresi kullanımda';
          break;

        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          message = 'Bekle';
          break;

        case 'EMAIL_NOT_FOUND':
          message = 'mail adresi bulunamadı';
          break;

        case 'INVALID_PASSWORD':
          message = 'Hatalı parola';
          break;

        case 'INVALID_LOGIN_CREDENTIALS':
          message = 'Girilen bilgiler yanlış';
          break;
      }
    }

    return throwError(() => message);
  }

  private handleUser(
    email: string,
    localId: string,
    idToken: string,
    expiresIn: string
  ) {
    // observable, subject => rxjs
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);

    const user = new User(email, localId, idToken, expirationDate);
    this.user.next(user);
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
}

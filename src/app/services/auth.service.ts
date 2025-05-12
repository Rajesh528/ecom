import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signup(username: string, email: string, mobile: string, password: string): Observable<any> {
    const user = { username, email, mobile, password };
    localStorage.setItem('user', JSON.stringify(user));
    return of(user);
  }

  login(emailOrMobile: string, password: string): Observable<any> {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if ((user.email === emailOrMobile || user.mobile === emailOrMobile) && user.password === password) {
      return of(user);
    }
    return throwError(() => new Error('Invalid email, mobile, or password'));
  }
}

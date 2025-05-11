

import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: string, password: string): Observable<{ user: any }> {
    console.log("AuthService - Login called with email:", email);

    // Simulate an API call
    if (email === "test@test.com" && password === "password") {
      return of({ user: { email, name: 'Test User' } }).pipe(
        delay(1000),
        map(response => {
          console.log("AuthService - Login success:", response);
          return response;
        })
      );
    } else {
      return throwError(() => new Error("Invalid email or password"));
    }
  }
}

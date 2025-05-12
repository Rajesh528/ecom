import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { signup, signupSuccess, login, loginSuccess, loginFailure } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signup),
      switchMap(({ username, email, mobile, password }) => {
        const user = { username, email, mobile };
        // Simulate saving user to localStorage
        localStorage.setItem('user', JSON.stringify(user));
        return of(signupSuccess({ user }));
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ emailOrMobile, password }) => {
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
        if (
          (storedUser.email === emailOrMobile || storedUser.mobile === emailOrMobile) &&
          storedUser.password === password
        ) {
          return of(loginSuccess({ user: storedUser }));
        } else {
          return of(loginFailure({ error: 'Invalid email, mobile, or password' }));
        }
      }),
      catchError((error) => of(loginFailure({ error: 'Login failed' })))
    )
  );
}


//  signup$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(signup),
//       switchMap(({ username, email, mobile, password }) => {
//         return this.authService.signup(username, email, mobile, password).pipe(
//           map((user) => signupSuccess({ user })),
//           catchError((error) => of(signupFailure({ error: 'Signup failed' })))
//         );
//       })
//     )
//   );
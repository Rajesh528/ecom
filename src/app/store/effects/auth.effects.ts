import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { signup, signupSuccess, login, loginSuccess, loginFailure } from '../actions/auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router:Router) {}

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signup),
      switchMap(({ username, email, mobile, password }) => {
        const user = { username, email, mobile,password };
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
  loginSuccess$ = createEffect(
  () =>
    this.actions$.pipe(
      ofType(loginSuccess),
      tap(() => this.router.navigate(['/home']))
    ),
  { dispatch: false }
);
}

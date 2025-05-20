import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { signup, signupSuccess, login, loginSuccess, loginFailure, logout, signupFailure } from '../actions/auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signup),
      switchMap(({ username, email, mobile, password }) => {
        const newUser = { username, email, mobile, password };
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const emailExists = storedUsers.some((user: any) => user.email === email);

        if (emailExists) {
          console.log("failed");
          return of(signupFailure({ error: 'Email already exists. Please use a different email.' }));
        }
        storedUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(storedUsers));
        this.router.navigate(['/login'])
        return of(signupSuccess({ user: newUser }));
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
        tap(({ user }) => {
          this.router.navigate(['./home'])
          localStorage.setItem('authUser', JSON.stringify(user));
        })
      ),
    { dispatch: false }
  );
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          localStorage.removeItem('authUser');
        })
      ),
    { dispatch: false }
  );
  logoutRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => this.router.navigate(['/login']))
      ),
    { dispatch: false }
  );
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap, delay } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ credentials }) =>
        // Simulate an async login API
        of({ username: credentials.username, token: 'mock-token' }).pipe(
          delay(1000),
          map(user => AuthActions.loginSuccess({ user })),
          catchError(() => of(AuthActions.loginFailure({ error: 'Login failed' })))
        )
      )
    )
  );
}

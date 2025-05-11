import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../store/actions/auth.actions';
import { Observable } from 'rxjs';
import { AuthState } from '..//store/reducers/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
    authError$: Observable<string | null>;
  loading$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store<{ auth: AuthState }> ) {
  
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.authError$ = this.store.select(state => state.auth.error);
    this.loading$ = this.store.select(state => state.auth.loading);
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.store.dispatch(AuthActions.login({ 
        credentials: this.loginForm.value 
      }));
    }
  }
}

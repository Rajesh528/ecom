import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../store/actions/auth.actions'                        //'../store/auth/auth.actions';
import { AppState } from '../store';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <h2>Login</h2>
      <input [(ngModel)]="emailOrMobile" placeholder="Email or Mobile" />
      <input [(ngModel)]="password" placeholder="Password" type="password" />
      <button (click)="onLogin()">Login</button>
    </div>
  `,
})
export class LoginComponent {
  emailOrMobile = '';
  password = '';

  constructor(private store: Store<AppState>) {}

  onLogin() {
    this.store.dispatch(login({ emailOrMobile: this.emailOrMobile, password: this.password }));
  }
}


















// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Store } from '@ngrx/store';
// import * as AuthActions from '../store/actions/auth.actions';
// import { Observable } from 'rxjs';
// import { AuthState } from '..//store/reducers/auth.reducer';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html'
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   submitted = false;
//     authError$: Observable<string | null>;
//   loading$: Observable<boolean>;

//   constructor(private fb: FormBuilder, private store: Store<{ auth: AuthState }> ) {
  
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });

//     this.authError$ = this.store.select(state => state.auth.error);
//     this.loading$ = this.store.select(state => state.auth.loading);
//   }

//   onSubmit(): void {
//     this.submitted = true;
//     if (this.loginForm.valid) {
//       this.store.dispatch(AuthActions.login({ 
//         credentials: this.loginForm.value 
//       }));
//     }
//   }
// }

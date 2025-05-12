import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signup } from '../store/actions/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  //   templateUrl: './login.component.html',
  template: `
    <div class="signup-container">
      <h2>Signup</h2>
      <input [(ngModel)]="username" placeholder="Username" />
      <input [(ngModel)]="email" placeholder="Email" />
      <input [(ngModel)]="mobile" placeholder="Mobile" />
      <input [(ngModel)]="password" placeholder="Password" type="password" />
      <button (click)="onSignup()">Signup</button>
    </div>
  `,
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent {
  username = '';
  email = '';
  mobile = '';
  password = '';

  constructor(private store: Store, private router : Router) {}

  onSignup() {
    this.store.dispatch(signup({
      username: this.username,
      email: this.email,
      mobile: this.mobile,
      password: this.password
    }));
     this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signup } from '../store/actions/auth.actions';

@Component({
  selector: 'app-signup',
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
  styles: [`
    .signup-container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f9;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    input {
      width: 100%;
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      width: 100%;
      padding: 10px;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #45a049;
    }
  `]
})
export class SignupComponent {
  username = '';
  email = '';
  mobile = '';
  password = '';

  constructor(private store: Store) {}

  onSignup() {
    this.store.dispatch(signup({
      username: this.username,
      email: this.email,
      mobile: this.mobile,
      password: this.password
    }));
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signup } from '../store/actions/auth.actions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private store: Store, private router:Router) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get passwordMismatch(): boolean {
    const { password, confirmPassword } = this.signupForm.value;
    return password !== confirmPassword;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid || this.passwordMismatch) return;

    const { username, email, mobile, password } = this.signupForm.value;
    this.store.dispatch(signup( { username, email, mobile, password }));
    this.router.navigate(['/login'])

  }
}

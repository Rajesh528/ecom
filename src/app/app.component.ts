import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuthenticated } from './store/selectors/auth.selectors';
import { loginSuccess, logout } from './store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isAuthenticated$!: Observable<boolean>;
  constructor(private store: Store){

  }
  ngOnInit(): void {
    const user = localStorage.getItem('authUser');
  if (user) {

    const parsedUser = JSON.parse(user);
    this.store.dispatch(loginSuccess({ user: parsedUser }));
  }
    // this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
  }
  title = 'project';
  logout() {
  localStorage.removeItem('authUser');
  this.store.dispatch(logout());
}
}

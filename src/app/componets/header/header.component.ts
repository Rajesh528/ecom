import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from 'src/app/store/actions/auth.actions';
import { AuthState } from 'src/app/store/reducers/auth.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<{ auth: AuthState }>, private router : Router) {
    this.isAuthenticated$ = this.store.select(state => state.auth.isAuthenticated);
  }

  onLogout() {
    this.store.dispatch(logout());
    //this.router.navigate(['/login'])
  }
}

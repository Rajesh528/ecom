import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuthenticated } from './store/selectors/auth.selectors';

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
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
  }
  title = 'project';
}

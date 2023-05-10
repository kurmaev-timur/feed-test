import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import * as AuthActions from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.loading$ = store.select((state) => state.auth.loading);
  }

  login() {
    this.store.dispatch(AuthActions.login());
  }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { login, loginSuccess, loginFailure, logout } from './auth.actions';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(() =>
        this.authService.getSession().pipe(
          map((res) => loginSuccess({ session: res.data })),
          tap(() => {
            this.router.navigate(['/feed']);
          }),
          catchError((error) => of(loginFailure({ errorMessage: error })))
        )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          this.authService.deleteSessionToken();
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}

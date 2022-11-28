import { AuthService } from 'src/app/auth/services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import {
  requestLogin,
  requestLoginFail,
  requestLoginSuccess,
} from './auth.actions';
import { AuthState } from './auth.reducer';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AuthState>
  ) {}

  getCurrentUser$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(requestLogin.type),
      exhaustMap(
        (action: any) =>
          this.authService.login(action.credentials).pipe(
            map(({ result }: any) => {
              this.store.dispatch(
                requestLoginSuccess({
                  isAuthorized: true,
                  token: result,
                })
              );
            })
          ),
        catchError(({ result }) =>
          of(requestLoginFail({ errorMessage: result }))
        )
      )
    )
  );
}

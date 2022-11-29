import { SessionStorageService } from './../services/session-storage.service';
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
  requestLogout,
  requestLogoutSuccess,
  requestRegister,
  requestRegisterSuccess,
  requestRegisterFail,
} from './auth.actions';
import { AuthState } from './auth.reducer';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AuthState>,
    private router: Router,
    private sessionStorageService: SessionStorageService
  ) {}

  login$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(requestLogin.type),
      exhaustMap(
        ({ body }: any) => {
          return this.authService.login(body).pipe(
            map(({ result }: any) => {
              this.sessionStorageService.setToken(result);
              this.router.navigate(['/courses']);
              this.store.dispatch(
                requestLoginSuccess({
                  isAuthorized: true,
                  token: result,
                })
              );
            })
          );
        },
        catchError(({ result }) =>
          of(requestLoginFail({ errorMessage: result }))
        )
      )
    )
  );

  logout$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(requestLogout.type),
      exhaustMap(() => {
        return this.authService.logout().pipe(
          map(() => {
            this.sessionStorageService.deleteToken();
            this.router.navigate(['/login']);
            this.store.dispatch(
              requestLogoutSuccess({
                isAuthorized: false,
                token: '',
              })
            );
          })
        );
      })
    )
  );

  register$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(requestRegister.type),
      exhaustMap(
        ({ body }: any) => {
          return this.authService.register(body).pipe(
            map(() => {
              alert('Account created with success, please login');
              this.router.navigate(['/login']);
              this.store.dispatch(requestRegisterSuccess());
            })
          );
        },
        catchError(({ result }) =>
          of(requestRegisterFail({ errorMessage: result }))
        )
      )
    )
  );
}

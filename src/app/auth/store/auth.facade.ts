import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthState } from './auth.reducer';
import {
  getSpecificErrorMessage,
  getToken,
  isUserAuthorized,
} from './auth.selectors';
import * as AuthActions from './auth.actions';
import { SessionStorageService } from '../services/session-storage.service';

@Injectable()
export class AuthStateFacade {
  isAuthorized$ = this.store.pipe(select(isUserAuthorized));
  getToken$ = this.store.pipe(select(getToken));
  getLoginErrorMessage$ = this.store.pipe(select(getSpecificErrorMessage));
  getRegisterErrorMessage$ = this.store.pipe(select(getSpecificErrorMessage));

  constructor(
    private store: Store<AuthState>,
    private sessionStorage: SessionStorageService
  ) {
    this.setAuthorization();
    this.sessionStorage.getToken();
  }

  login(body: User) {
    this.store.dispatch(AuthActions.requestLogin({ body }));
  }
  register(body: User) {
    this.store.dispatch(AuthActions.requestRegister({ body }));
  }
  logout() {
    this.store.dispatch(AuthActions.requestLogout());
  }
  closeSession() {
    this.store.dispatch(AuthActions.requestLogoutSuccess());
  }
  setAuthorization() {
    this.store.dispatch(
      AuthActions.requestLoginSuccess({
        token: this.sessionStorage.getToken(),
        isAuthorized: this.sessionStorage.getToken().length > 0 || false,
      })
    );
  }
}

export interface User {
  name?: string;
  email: string;
  password: string;
}

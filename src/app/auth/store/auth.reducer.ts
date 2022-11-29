import { createReducer, on, Action } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  isAuthorized: boolean;
  token: string;
  errorMessage: string;
}

export const initialState: AuthState | any = {
  isAuthorized: false,
  token: '',
  errorMessage: '',
};

const reducer = createReducer(
  initialState,
  on(AuthActions.requestLogin, (state) => ({ ...state })),
  on(AuthActions.requestLoginSuccess, (state, { isAuthorized, token }) => ({
    ...state,
    isAuthorized,
    token,
  })),
  on(AuthActions.requestLoginFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
  })),
  on(AuthActions.requestRegister, (state) => ({ ...state })),
  on(AuthActions.requestRegisterSuccess, (state) => ({ ...state })),
  on(AuthActions.requestRegisterFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
  })),
  on(AuthActions.requestLogout, (state) => ({ ...state })),
  on(AuthActions.requestLogoutSuccess, (state, { isAuthorized, token }) => ({
    ...state,
    isAuthorized,
    token,
  }))
);

export const authReducer = (state: AuthState, action: Action): AuthState =>
  reducer(state, action);

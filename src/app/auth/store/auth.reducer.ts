import { createReducer, on, Action } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  isAuthorized: boolean;
  token: string;
  errorMessage: string;
}

export const initialState: AuthState = {
  isAuthorized: false,
  token: '',
  errorMessage: '',
};

const reducer = createReducer(
  initialState,
  on(AuthActions.requestLogin, (state) => ({ ...state })),
  on(AuthActions.requestLoginSuccess, (state) => ({
    ...state,
    isAuthorized: state.isAuthorized,
    token: state.token,
  })),
  on(AuthActions.requestLoginFail, (state) => ({
    ...state,
    errorMessage: state.errorMessage,
  })),
  on(AuthActions.requestRegister, (state) => ({ ...state })),
  on(AuthActions.requestRegisterSuccess, (state) => ({ ...state })),
  on(AuthActions.requestRegisterFail, (state) => ({
    ...state,
    errorMessage: state.errorMessage,
  })),
  on(AuthActions.requestLogout, (state) => ({ ...state })),
  on(AuthActions.requestLogoutSuccess, (state) => ({ ...state }))
);

export const userReducer = (state: AuthState, action: Action): AuthState =>
  reducer(state, action);

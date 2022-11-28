import { createAction, props } from '@ngrx/store';

export enum AuthFeatureKey {
  RequestLogin = '[Auth API] Request Login',
  RequestLoginSuccess = '[Auth API] Request Login Success',
  RequestLoginFail = '[Auth API] Request Login Fail',

  RequestRegister = '[Auth API] Request Register',
  RequestRegisterSuccess = '[Auth API] Request Register Success',
  RequestRegisterFail = '[Auth API] Request Register Fail',

  RequestLogout = '[Auth API] Request Logout',
  RequestLogoutSuccess = '[Auth API] Request Logout Success',
}

// Login Actions Request
export const requestLogin: any = createAction(AuthFeatureKey.RequestLogin);
export const requestLoginSuccess: any = createAction(
  AuthFeatureKey.RequestLoginSuccess,
  props<{ isAuthorized: boolean; token: string }>()
);
export const requestLoginFail: any = createAction(
  AuthFeatureKey.RequestLoginFail,
  props<{ errorMessage: string }>()
);

// Register Actions Request
export const requestRegister: any = createAction(
  AuthFeatureKey.RequestRegister
);
export const requestRegisterSuccess: any = createAction(
  AuthFeatureKey.RequestRegisterSuccess
);
export const requestRegisterFail: any = createAction(
  AuthFeatureKey.RequestRegisterFail,
  props<{ errorMessage: string }>()
);

// Logout Actions Request
export const requestLogout: any = createAction(AuthFeatureKey.RequestLogout);

export const requestLogoutSuccess: any = createAction(
  AuthFeatureKey.RequestLogoutSuccess,
  props<{ isAuthorized: boolean; token: string }>()
);

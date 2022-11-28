import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

const getAuthState = createFeatureSelector<AuthState>('authState');

export const isUserAuthorized = createSelector(
  getAuthState,
  (state: AuthState) => {
    return state.isAuthorized;
  }
);

export const getToken = createSelector(getAuthState, (state: AuthState) => {
  return state.token;
});

export const getSpecificErrorMessage = createSelector(
  getAuthState,
  (state: AuthState) => {
    return state.errorMessage;
  }
);

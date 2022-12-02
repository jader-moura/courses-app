import { createAction, props } from '@ngrx/store';

export enum UserFeatureKey {
  CurrentUser = '[User API] Current User',
  CurrentUserSuccess = '[User API] Current User Success',
  CurrentUserFail = '[User API] Current User Failure',
}

export const requestCurrentUser: any = createAction(UserFeatureKey.CurrentUser);

export const requestCurrentUserSuccess = createAction(
  UserFeatureKey.CurrentUserSuccess,
  props<{ name: string; isAdmin: boolean }>()
);

export const requestCurrentUserFail = createAction(
  UserFeatureKey.CurrentUserFail
);

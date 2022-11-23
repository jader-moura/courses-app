import { createAction, props } from '@ngrx/store';
import { UserState } from './user.reducer';

export const requestCurrentUser = createAction('[User API] Current User');

export const requestCurrentUserSuccess = createAction(
  '[User API] Current User Success',
  props<{ user: UserState }>()
);

export const requestCurrentUserFail = createAction(
  '[User API] Current User Failure'
);

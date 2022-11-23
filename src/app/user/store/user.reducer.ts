import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
  name: string;
  isAdmin: boolean;
}

export const userInitialState: UserState | any = {
  name: '',
  isAdmin: false,
};

export const userFeatureKey = 'user key';

const reducer = createReducer(
  userInitialState,
  on(UserActions.requestCurrentUser, (state) => ({ ...state })),
  on(UserActions.requestCurrentUserSuccess, (state) => ({
    name: state.name,
    isAdmin: state.isAdmin,
  })),
  on(UserActions.requestCurrentUserFail, (state) => ({ ...state }))
);

export const userReducer = (state: UserState, action: Action): UserState =>
  reducer(state, action);

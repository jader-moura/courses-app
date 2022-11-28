import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
  name: string;
  isAdmin: boolean;
}

export const initialState: UserState | any = {
  name: '',
  isAdmin: false,
};

const reducer = createReducer(
  initialState,
  on(UserActions.requestCurrentUser, (state) => ({ ...state })),
  on(UserActions.requestCurrentUserSuccess, (state, { name, isAdmin }) => ({
    ...state,
    name,
    isAdmin,
  })),
  on(UserActions.requestCurrentUserFail, (state) => ({ ...state }))
);

export const userReducer = (state: UserState, action: Action): UserState =>
  reducer(state, action);

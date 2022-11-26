import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

const getUser = createFeatureSelector<UserState>('user');

export const getName = createSelector(getUser, (state: UserState) => {
  console.log(state);
  return state.name;
});

export const isAdmin = createSelector(
  getUser,
  (state: UserState) => state.isAdmin
);

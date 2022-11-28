import { createReducer, on, Action } from '@ngrx/store';
import * as AuthorsActions from './authors.actions';

export interface AuthorsState {
  authors: string[];
  addedAuthor: string[];
}

export const initialState: AuthorsState = {
  authors: [],
  addedAuthor: [],
};

const reducer = createReducer(
  initialState,
  on(AuthorsActions.requestAuthors, (state) => ({ ...state })),
  on(AuthorsActions.requestAuthorsSuccess, (state) => ({
    ...state,
    authors: state.authors,
  })),
  on(AuthorsActions.requestAuthorsFail, (state) => ({ ...state })),
  on(AuthorsActions.requestAddAuthors, (state) => ({ ...state })),
  on(AuthorsActions.requestAddAuthorSuccess, (state) => ({
    ...state,
    addedAuthor: state.addedAuthor,
  })),
  on(AuthorsActions.requestAddAuthorFail, (state) => ({ ...state })),
  on(AuthorsActions.resetAddedAuthor, (state) => ({
    ...state,
    addedAuthor: [],
  }))
);

export const authorReducer = (
  state: AuthorsState,
  action: Action
): AuthorsState => reducer(state, action);

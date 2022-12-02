import { createReducer, on, Action } from '@ngrx/store';
import * as AuthorsActions from './authors.actions';
import { Author } from './authors.facade';

export interface AuthorsState {
  authors: Author[];
  addedAuthor?: Author;
}

export const initialState: AuthorsState | any = {
  authors: [],
  addedAuthor: undefined,
};

const reducer = createReducer(
  initialState,
  on(AuthorsActions.requestAuthors, (state) => ({ ...state })),
  on(AuthorsActions.requestAuthorsSuccess, (state, { authors }) => ({
    ...state,
    authors,
  })),
  on(AuthorsActions.requestAuthorsFail, (state) => ({ ...state })),
  on(AuthorsActions.requestAddAuthors, (state) => ({ ...state })),
  on(AuthorsActions.requestAddAuthorSuccess, (state, { addedAuthor }) => ({
    ...state,
    addedAuthor,
  })),
  on(AuthorsActions.requestAddAuthorFail, (state) => ({ ...state })),
  on(AuthorsActions.resetAddedAuthor, (state) => ({
    ...state,
    addedAuthor: undefined,
  }))
);

export const authorsReducer = (
  state: AuthorsState,
  action: Action
): AuthorsState => reducer(state, action);

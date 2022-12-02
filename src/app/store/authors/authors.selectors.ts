import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthorsState } from './authors.reducer';

const getAuthorsFeature = createFeatureSelector<AuthorsState>('authors');

export const getAuthors = createSelector(
  getAuthorsFeature,
  (state: AuthorsState) => {
    return state.authors;
  }
);

export const getAddedAuthors = createSelector(
  getAuthorsFeature,
  (state: AuthorsState) => {
    return state.addedAuthor;
  }
);

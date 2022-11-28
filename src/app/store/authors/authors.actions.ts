import { createAction, props } from '@ngrx/store';

export enum AuthorsFeatureKey {
  // Get authors keys
  RequestAuthors = '[Authors API] Request Authors',
  RequestAuthorsSuccess = '[Authors API] Request Authors Success',
  RequestAuthorsFail = '[Authors API] Request Authors Failure',

  // Add author keys
  RequestAddAuthors = '[Authors API] Request Add Authors',
  requestAddAuthorSuccess = '[Authors API] Request Add Authors Success',
  requestAddAuthorFail = '[Authors API] Request Add Authors Failure',
  ResetAddedAuthor = '[Authors API] Reset Added Author',
}

// Get authors action
export const requestAuthors: any = createAction(
  AuthorsFeatureKey.RequestAuthors
);
export const requestAuthorsSuccess: any = createAction(
  AuthorsFeatureKey.RequestAuthorsSuccess,
  props<{ authors: string[] }>()
);
export const requestAuthorsFail: any = createAction(
  AuthorsFeatureKey.RequestAuthorsFail
);

// Add authors action
export const requestAddAuthors: any = createAction(
  AuthorsFeatureKey.RequestAddAuthors
);
export const requestAddAuthorSuccess: any = createAction(
  AuthorsFeatureKey.requestAddAuthorSuccess,
  props<{ addedAuthor: string[] }>()
);
export const requestAddAuthorFail: any = createAction(
  AuthorsFeatureKey.requestAddAuthorFail
);
export const resetAddedAuthor: any = createAction(
  AuthorsFeatureKey.ResetAddedAuthor,
  props<{ addedAuthor: string[] }>()
);

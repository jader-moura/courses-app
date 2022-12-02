import { getAddedAuthors, getAuthors } from './authors.selectors';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthorsState } from './authors.reducer';
import * as AuthorsActions from './authors.actions';

@Injectable()
export class AuthorsStateFacade {
  authors$ = this.store.pipe(select(getAuthors));
  addedAuthor$ = this.store.pipe(select(getAddedAuthors));

  constructor(private store: Store<AuthorsState>) {}

  getAuthors() {
    this.store.dispatch(AuthorsActions.requestAuthors());
  }

  addAuthor(author: Author) {
    this.store.dispatch(AuthorsActions.requestAddAuthors({ author }));
  }
}

export interface Author {
  name: string;
  id?: string;
}

// Create facade for encapsulation store selection and action dispatching: - create injectable class UserStateFacade inside previous created file. - create public observable properties (this.store.pipe(select(...))): name$, isAdmin$. - create getCurrentUser(): void method which should dispatch requestCurrentUser action.

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserState } from './user.reducer';
import * as UserActions from './user.actions';
import { getName, isAdmin } from './user.selectors';

@Injectable()
export class UserStateFacade {
  name$ = this.store.pipe(select(getName));
  isAdmin$ = this.store.pipe(select(isAdmin));
  constructor(private store: Store<UserState>) {}
  getCurrentUser() {
    this.store.dispatch(new UserActions.requestCurrentUser());
  }
}

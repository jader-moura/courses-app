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
    this.store.dispatch(UserActions.requestCurrentUser());
  }
}

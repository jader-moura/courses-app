import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import {
  requestCurrentUser,
  requestCurrentUserFail,
  requestCurrentUserSuccess,
} from './user.actions';
import { UserState } from './user.reducer';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<UserState>
  ) {}

  getCurrentUser$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(requestCurrentUser.type),
      mergeMap(
        () =>
          this.userService.getUser().pipe(
            map(({ result }: any) => {
              this.store.dispatch(
                requestCurrentUserSuccess({
                  name: result.name,
                  isAdmin: result.role === 'admin',
                })
              );
            })
          ),
        catchError(() => of(requestCurrentUserFail()))
      )
    )
  );
}

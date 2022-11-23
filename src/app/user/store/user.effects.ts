import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
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
  getCurrentUser$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(requestCurrentUser.type),
      mergeMap(
        () =>
          this.userService.getUser().pipe(
            map((user: UserState) =>
              requestCurrentUserSuccess({
                user,
              })
            )
          ),
        catchError(() => of(requestCurrentUserFail()))
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}

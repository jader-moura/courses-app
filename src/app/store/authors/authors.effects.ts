import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, exhaustMap, catchError } from 'rxjs/operators';
import {
  requestAuthors,
  requestAuthorsSuccess,
  requestAuthorsFail,
  requestAddAuthors,
  requestAddAuthorSuccess,
  requestAddAuthorFail,
} from './authors.actions';
import { AuthorsState } from './authors.reducer';
import { AuthorsService } from 'src/app/services/authors.service';

@Injectable()
export class AuthorsEffects {
  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService,
    private store: Store<AuthorsState>
  ) {}

  getAuthors$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(requestAuthors.type),
      switchMap(
        () =>
          this.authorsService.getAll().pipe(
            map(({ result }: any) => {
              this.store.dispatch(
                requestAuthorsSuccess({
                  authors: result,
                })
              );
            })
          ),
        catchError(() => of(requestAuthorsFail()))
      )
    )
  );

  addAuthor$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(requestAddAuthors.type),
      exhaustMap(
        ({ author }: any) =>
          this.authorsService.addAuthor(author).pipe(
            map(({ result }: any) => {
              this.store.dispatch(
                requestAddAuthorSuccess({
                  addedAuthor: result,
                })
              );
            })
          ),
        catchError(() => of(requestAddAuthorFail()))
      )
    )
  );
}

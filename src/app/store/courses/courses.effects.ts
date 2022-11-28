import { CoursesState } from './courses.reducer';
import { Store } from '@ngrx/store';
import { CoursesService } from 'src/app/services/courses.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, exhaustMap, catchError } from 'rxjs/operators';
import * as CoursesActions from './courses.actions';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store: Store<CoursesState>
  ) {}

  getAll$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(CoursesActions.requestAllCourses.type),
      mergeMap(
        () =>
          this.coursesService.getAll().pipe(
            map(({ result }: any) => {
              this.store.dispatch(
                CoursesActions.requestAllCoursesSuccess({
                  allCourses: result,
                })
              );
            })
          ),
        catchError(({ result }) =>
          of(CoursesActions.requestAllCoursesFail({ errorMessage: result }))
        )
      )
    )
  );

  filteredCourses$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(CoursesActions.requestFilteredCourses.type),
      exhaustMap((action: any) =>
        this.coursesService.getAll(action.credentials).pipe(
          map(({ result }: any) => {
            this.store.dispatch(
              CoursesActions.requestFilteredCoursesSuccess({
                courses: result,
              })
            );
          })
        )
      )
    )
  );

  getSpecificCourse$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(CoursesActions.requestSingleCourse.type),
      exhaustMap(
        (action: any) =>
          this.coursesService.getCourse(action.credentials).pipe(
            map(({ result }: any) => {
              this.store.dispatch(
                CoursesActions.requestSingleCourseSuccess({
                  course: result,
                })
              );
            })
          ),
        catchError(({ result }) =>
          of(CoursesActions.requestSingleCourseFail({ errorMessage: result }))
        )
      )
    )
  );

  deleteCourse$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(CoursesActions.requestDeleteCourse.type),
      exhaustMap(
        (action: any) =>
          this.coursesService.deleteCourse(action.credentials).pipe(
            map(({ result }: any) => {
              this.store.dispatch(
                CoursesActions.requestAllCoursesSuccess({
                  allCourses: result,
                })
              );
            })
          ),
        catchError(({ result }) =>
          of(CoursesActions.requestDeleteCourseFail({ errorMessage: result }))
        )
      )
    )
  );

  editCourse$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(CoursesActions.requestEditCourse.type),
      exhaustMap(
        (action: any) =>
          this.coursesService.editCourse(action.credentials).pipe(
            map(({ result }: any) => {
              this.store.dispatch(
                CoursesActions.requestEditCourseSuccess({
                  course: result,
                })
              );
            })
          ),
        catchError(({ result }) =>
          of(CoursesActions.requestEditCourseFail({ errorMessage: result }))
        )
      )
    )
  );

  createCourse$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(CoursesActions.requestCreateCourse.type),
      exhaustMap(
        (action: any) =>
          this.coursesService.createCourse(action.credentials).pipe(
            map(({ result }: any) => {
              this.store.dispatch(
                CoursesActions.requestCreateCourseSuccess({
                  course: result,
                })
              );
            })
          ),
        catchError(({ result }) =>
          of(CoursesActions.requestCreateCourseFail({ errorMessage: result }))
        )
      )
    )
  );

  redirectToTheCoursesPage$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(
        CoursesActions.requestCreateCourseSuccess.type,
        CoursesActions.requestEditCourseSuccess.type,
        CoursesActions.requestSingleCourseFail.type
      ),
      map(() => (window.location.href = '/courses'))
    )
  );
}

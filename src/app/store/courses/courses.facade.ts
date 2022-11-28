import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  getAllCourses,
  getCourse,
  getCourses,
  getErrorMessage,
  isAllCoursesLoadingSelector,
  isSearchingStateSelector,
  isSingleCourseLoadingSelector,
} from './courses.selectors';
import { CoursesState } from './courses.reducer';
import * as CoursesActions from './courses.actions';
import { CourseProps } from 'src/app/shared/dtos/courses';

@Injectable()
export class CoursesStateFacade {
  isAllCoursesLoading$ = this.store.pipe(select(isAllCoursesLoadingSelector));
  isSingleCourseLoading$ = this.store.pipe(
    select(isSingleCourseLoadingSelector)
  );
  isSearchingState$ = this.store.pipe(select(isSearchingStateSelector));
  courses$ = this.store.pipe(select(getCourses));
  allCourses$ = this.store.pipe(select(getAllCourses));
  course$ = this.store.pipe(select(getCourse));
  errorMessage$ = this.store.pipe(select(getErrorMessage));

  constructor(private store: Store<CoursesState>) {}

  getAllCourses() {
    this.store.dispatch(CoursesActions.requestAllCourses());
  }

  getSingleCourse(id: string) {
    this.store.dispatch(CoursesActions.requestSingleCourse({ id }));
  }

  getFilteredCourses(searchValue: string) {
    this.store.dispatch(CoursesActions.requestFilteredCourses({ searchValue }));
  }

  editCourse(body: CourseProps, id: string) {
    this.store.dispatch(CoursesActions.requestEditCourse({ body, id }));
  }

  createCourse(body: CourseProps) {
    this.store.dispatch(CoursesActions.requestCreateCourse({ body }));
  }

  deleteCourse(body: CourseProps) {
    this.store.dispatch(CoursesActions.requestDeleteCourse({ body }));
  }
}

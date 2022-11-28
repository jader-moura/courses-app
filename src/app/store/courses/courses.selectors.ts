import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './courses.reducer';

const getCoursesFeature = createFeatureSelector<CoursesState>('courses');

export const isAllCoursesLoadingSelector = createSelector(
  getCoursesFeature,
  (state: CoursesState) => {
    return state.isAllCoursesLoading;
  }
);

export const isSearchingStateSelector = createSelector(
  getCoursesFeature,
  (state: CoursesState) => {
    return state.isSearchState;
  }
);

export const isSingleCourseLoadingSelector = createSelector(
  getCoursesFeature,
  (state: CoursesState) => {
    return state.isSingleCourseLoading;
  }
);

export const getCourses = createSelector(
  getCoursesFeature,
  (state: CoursesState) => {
    return state.courses;
  }
);

export const getAllCourses = createSelector(
  getCoursesFeature,
  (state: CoursesState) => {
    return state.allCourses;
  }
);

export const getCourse = createSelector(
  getCoursesFeature,
  (state: CoursesState) => {
    return state.course;
  }
);

export const getErrorMessage = createSelector(
  getCoursesFeature,
  (state: CoursesState) => {
    return state.errorMessage;
  }
);

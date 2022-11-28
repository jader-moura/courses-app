import { createReducer, on, Action } from '@ngrx/store';
import { CourseProps } from 'src/app/shared/dtos/courses';
import * as CoursesActions from './courses.actions';

export interface CoursesState {
  allCourses: CourseProps[];
  courses: CourseProps[];
  course?: CourseProps;
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string;
}

export const initialState: CoursesState | any = {
  allCourses: [],
  courses: [],
  course: undefined,
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: '',
};

const reducer = createReducer(
  initialState,
  // Get All Courses reducer
  on(CoursesActions.requestAllCourses, (state) => ({ ...state })),
  on(
    CoursesActions.requestAllCoursesSuccess,
    (state, { allCourses, isAllCoursesLoading }) => ({
      ...state,
      allCourses,
      isAllCoursesLoading,
    })
  ),
  on(CoursesActions.requestAllCoursesFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
  })),

  // Get Single Course reducer
  on(CoursesActions.requestSingleCourse, (state) => ({ ...state })),
  on(
    CoursesActions.requestSingleCourseSuccess,
    (state, { course, isSingleCourseLoading }) => ({
      ...state,
      course,
      isSingleCourseLoading,
    })
  ),
  on(CoursesActions.requestSingleCourseFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
  })),

  // Get Filtered Courses reducer
  on(CoursesActions.requestFilteredCourses, (state) => ({ ...state })),
  on(CoursesActions.requestFilteredCoursesSuccess, (state) => ({
    ...state,
    courses: state.courses,
    isSearchState: state.isSearchState,
  })),

  // Delete Course reducer
  on(CoursesActions.requestDeleteCourse, (state) => ({ ...state })),
  on(CoursesActions.requestDeleteCourseFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
  })),

  // Edit Course reducer
  on(CoursesActions.requestEditCourse, (state) => ({ ...state })),
  on(CoursesActions.requestEditCourseSuccess, (state, { course }) => ({
    ...state,
    course,
  })),
  on(CoursesActions.requestEditCourseFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
  })),

  // Create Course reducer
  on(CoursesActions.requestCreateCourse, (state) => ({ ...state })),
  on(CoursesActions.requestCreateCourseSuccess, (state, { course }) => ({
    ...state,
    course,
  })),
  on(CoursesActions.requestCreateCourseFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
  }))
);

export const coursesReducer = (
  state: CoursesState,
  action: Action
): CoursesState => reducer(state, action);

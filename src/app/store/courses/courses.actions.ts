import { createAction, props } from '@ngrx/store';
import { CourseProps } from 'src/app/shared/dtos/courses';

export enum CoursesFeatureKey {
  // Get All Courses keys
  RequestAllCourses = '[Courses API] Request All Courses',
  RequestAllCoursesSuccess = '[Courses API] Request All Courses Success',
  RequestAllCoursesFail = '[Courses API] Request All Courses Fail',

  // Get All Course keys
  RequestSingleCourse = '[Courses API] Request Single Course',
  RequestSingleCourseSuccess = '[Courses API] Request Single Course Success',
  RequestSingleCourseFail = '[Courses API] Request Single Course Fail',

  // Get Filtered Courses keys
  RequestFilteredCourses = '[Courses API] Request Filtered Courses',
  RequestFilteredCoursesSuccess = '[Courses API] Request Filtered Courses Success',

  // Delete Course keys
  RequestDeleteCourse = '[Courses API] Request Delete Course',
  RequestDeleteCourseFail = '[Courses API] Request Delete Course Fail',

  // Edit Course keys
  RequestEditCourse = '[Courses API] Request Edit Course',
  RequestEditCourseSuccess = '[Courses API] Request Edit Course Success',
  RequestEditCourseFail = '[Courses API] Request Edit Course Fail',

  // Create Course keys
  RequestCreateCourse = '[Courses API] Request Create Course',
  RequestCreateCourseSuccess = '[Courses API] Request Create Course Success',
  RequestCreateCourseFail = '[Courses API] Request Create Course Fail',
}

// Get All Courses action
export const requestAllCourses: any = createAction(
  CoursesFeatureKey.RequestAllCourses
);
export const requestAllCoursesSuccess: any = createAction(
  CoursesFeatureKey.RequestAllCoursesSuccess,
  props<{ allCourses: CourseProps[]; isAllCoursesLoading: boolean }>()
);
export const requestAllCoursesFail: any = createAction(
  CoursesFeatureKey.RequestAllCoursesFail
);

// Get Single Course action
export const requestSingleCourse: any = createAction(
  CoursesFeatureKey.RequestSingleCourse,
  props<{ id: CourseProps }>()
);
export const requestSingleCourseSuccess: any = createAction(
  CoursesFeatureKey.RequestSingleCourseSuccess,
  props<{ course: CourseProps }>()
);
export const requestSingleCourseFail: any = createAction(
  CoursesFeatureKey.RequestSingleCourseFail
);

// Get Filtered Courses action
export const requestFilteredCourses: any = createAction(
  CoursesFeatureKey.RequestFilteredCourses
);
export const requestFilteredCoursesSuccess: any = createAction(
  CoursesFeatureKey.RequestFilteredCoursesSuccess,
  props<{ courses: CourseProps[] }>()
);

// Delete Course action
export const requestDeleteCourse: any = createAction(
  CoursesFeatureKey.RequestDeleteCourse,
  props<{ id: string }>()
);
export const requestDeleteCourseFail: any = createAction(
  CoursesFeatureKey.RequestDeleteCourseFail
);

// Edit Course action
export const requestEditCourse: any = createAction(
  CoursesFeatureKey.RequestEditCourse,
  props<{ course: CourseProps; id: string }>()
);
export const requestEditCourseSuccess: any = createAction(
  CoursesFeatureKey.RequestEditCourseSuccess,
  props<{ course: CourseProps }>()
);
export const requestEditCourseFail: any = createAction(
  CoursesFeatureKey.RequestEditCourseFail
);

// Create Course action
export const requestCreateCourse: any = createAction(
  CoursesFeatureKey.RequestCreateCourse,
  props<{ course: CourseProps }>()
);
export const requestCreateCourseSuccess: any = createAction(
  CoursesFeatureKey.RequestCreateCourseSuccess,
  props<{ course: CourseProps }>()
);
export const requestCreateCourseFail: any = createAction(
  CoursesFeatureKey.RequestCreateCourseFail
);

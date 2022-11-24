import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseProps } from '../shared/dtos/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  getAll(search?: string): Observable<CourseProps[]> {
    if (search && search.length > 0) {
      return this.httpClient.get<CourseProps[]>(
        'http://localhost:4000/courses/filter',
        { params: { title: search } }
      );
    } else {
      return this.httpClient.get<CourseProps[]>(
        'http://localhost:4000/courses/all'
      );
    }
  }

  createCourse(course: CourseProps) {
    this.httpClient.post('http://localhost:4000/courses/add', course).subscribe(
      ({ successful }: any) => {
        if (successful) {
          alert('Course created with success.');
        }
      },
      (err: HttpErrorResponse) => console.error(`Got error: ${err}`)
    );
  }

  editCourse(course: CourseProps) {
    this.httpClient
      .put(`http://localhost:4000/courses/${course.id}`, course)
      .subscribe(
        ({ successful }: any) => {
          if (successful) {
            alert('Course edited with success.');
          }
        },
        (err: HttpErrorResponse) => console.error(`Got error: ${err}`)
      );
  }

  getCourse(course: CourseProps) {
    return this.httpClient.get(`http://localhost:4000/courses/${course.id}`);
  }

  deleteCourse(courseId: string) {
    this.httpClient.delete(`/courses/${courseId}`).subscribe(
      ({ successful }: any) => {
        if (successful) {
          alert('Course removed with success.');
        }
      },
      (err: HttpErrorResponse) => console.error(`Got error: ${err}`)
    );
  }
}

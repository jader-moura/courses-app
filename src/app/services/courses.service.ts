import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../auth/services/session-storage.service';
import { CourseProps } from '../shared/dtos/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  httpHeaders: any = {};

  constructor(
    private httpClient: HttpClient,
    private sessionStorage: SessionStorageService
  ) {
    this.httpHeaders = new HttpHeaders().set(
      'Authorization',
      this.sessionStorage.getToken() || ''
    );
  }

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
    this.httpClient
      .post('http://localhost:4000/courses/add', course, {
        headers: this.httpHeaders,
      })
      .subscribe(
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
      .put(`http://localhost:4000/courses/${course.id}`, course, {
        headers: this.httpHeaders,
      })
      .subscribe(
        ({ successful }: any) => {
          if (successful) {
            alert('Course edited with success.');
          }
        },
        (err: HttpErrorResponse) => console.error(`Got error: ${err}`)
      );
  }

  getCourse(courseId: string) {
    return this.httpClient.get(`http://localhost:4000/courses/${courseId}`);
  }

  deleteCourse(courseId: string) {
    this.httpClient
      .delete(`http://localhost:4000/courses/${courseId}`, {
        headers: this.httpHeaders,
      })
      .subscribe(
        ({ successful }: any) => {
          if (successful) {
            alert('Course removed with success.');
          }
        },
        (err: HttpErrorResponse) => console.error(`Got error: ${err}`)
      );
  }
}

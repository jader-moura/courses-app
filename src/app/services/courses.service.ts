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
    return this.httpClient.post('http://localhost:4000/courses/add', course, {
      headers: this.httpHeaders,
    });
  }

  editCourse(course: CourseProps) {
    return this.httpClient.put(
      `http://localhost:4000/courses/${course.id}`,
      course,
      {
        headers: this.httpHeaders,
      }
    );
  }

  getCourse(courseId: string) {
    return this.httpClient.get(`http://localhost:4000/courses/${courseId}`);
  }

  deleteCourse(courseId: string) {
    return this.httpClient.delete(`http://localhost:4000/courses/${courseId}`, {
      headers: this.httpHeaders,
    });
  }
}

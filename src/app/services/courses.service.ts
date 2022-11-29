import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseProps } from '../shared/dtos/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private httpHeaders: any = {};

  constructor(
    private httpClient: HttpClient,
    private authStateFacade: AuthStateFacade
  ) {
    this.authStateFacade.getToken$.subscribe(
      (data) =>
        (this.httpHeaders = new HttpHeaders().set('Authorization', data || ''))
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

  editCourse(course: CourseProps, id: string) {
    return this.httpClient.put(`http://localhost:4000/courses/${id}`, course, {
      headers: this.httpHeaders,
    });
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

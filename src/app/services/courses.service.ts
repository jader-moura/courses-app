import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseProps } from '../shared/dtos/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<CourseProps[]> {
    return this.httpClient.get<CourseProps[]>(
      'http://localhost:4000/courses/all'
    );
  }

  createCourse(course: CourseProps) {
    this.httpClient.post('/courses/add', course);
  }

  editCourse(course: CourseProps) {
    this.httpClient.put(`/courses/${course.id}`, course);
  }

  getCourse(search: any) {
    const getOptions = {
      params: search,
    };
    return this.httpClient.get('/courses/filter', getOptions);
  }

  deleteCourse(course: CourseProps) {
    this.httpClient.delete(`/courses/${course.id}`);
  }
}

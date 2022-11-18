import { HttpClient } from '@angular/common/http';
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
    this.httpClient.post('http://localhost:4000/courses/add', course);
  }

  editCourse(course: CourseProps) {
    this.httpClient.put(`http://localhost:4000/courses/${course.id}`, course);
  }

  getCourse(course: CourseProps) {
    return this.httpClient.get(`http://localhost:4000/courses/${course.id}`);
  }

  deleteCourse(course: CourseProps) {
    this.httpClient.delete(`/courses/${course.id}`);
  }
}

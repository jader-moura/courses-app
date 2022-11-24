import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CourseProps } from '../shared/dtos/courses';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesStoreService {
  constructor(
    private isLoading$$: BehaviorSubject<boolean>,
    private courses$$: BehaviorSubject<CourseProps[]>,
    public isLoading$: Observable<boolean>,
    public courses$: Observable<CourseProps[]>,
    private courseservice: CoursesService
  ) {
    this.isLoading$$ = new BehaviorSubject<boolean>(false);
    this.courses$$ = new BehaviorSubject<CourseProps[]>([]);

    this.courseservice.getAll().subscribe((coursesList) => {
      isLoading$$.next(true);
      courses$$.next(coursesList);
      isLoading$$.next(false);
    });

    this.isLoading$ = this.isLoading$$.asObservable();
    this.courses$ = this.courses$$.asObservable();
  }
}

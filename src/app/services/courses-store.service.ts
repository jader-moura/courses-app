import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CourseProps } from '../shared/dtos/courses';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private courses$$ = new BehaviorSubject<CourseProps[]>([]);
  public isLoading$: Observable<boolean>;
  public courses$: Observable<CourseProps[]>;

  constructor(private courseservice: CoursesService) {
    this.courseservice.getAll().subscribe((coursesList: any) => {
      this.isLoading$$.next(true);
      this.courses$$.next(coursesList.result);
      this.isLoading$$.next(false);
    });

    this.isLoading$ = this.isLoading$$.asObservable();
    this.courses$ = this.courses$$.asObservable();
  }
}

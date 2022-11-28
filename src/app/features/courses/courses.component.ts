import { CoursesStateFacade } from './../../store/courses/courses.facade';
import { Component, OnInit } from '@angular/core';
// import { CoursesService } from 'src/app/services/courses.service';
import { CourseProps } from 'src/app/shared/dtos/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  coursesResult$ = this.coursesStateFacade.allCourses$;
  search: string = '';

  constructor(
    // private coursesService: CoursesService,
    private coursesStateFacade: CoursesStateFacade
  ) {}

  ngOnInit(): void {
    this.coursesStateFacade.getAllCourses();
  }

  onSearch({ search }: any) {
    this.search = search;
    // this.coursesService
    //   .getAll(search)
    //   .subscribe((courses: any) => (this.coursesResult$ = courses.result));
  }
}

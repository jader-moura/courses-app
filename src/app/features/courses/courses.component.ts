import { Component, OnInit } from '@angular/core';
import { mockedCourseList } from './mock';
import { CoursesService } from 'src/app/services/courses.service';
import { CourseProps } from 'src/app/shared/dtos/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  coursesResult$: CourseProps[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.coursesService
      .getAll()
      .subscribe((courses: any) => (this.coursesResult$ = courses.result));
  }

  onSearch(event: any) {
    console.log(event);
  }
}

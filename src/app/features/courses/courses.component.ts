import { Component, OnInit } from '@angular/core';
import { mockedCourseList } from './mock';
import { Course } from './courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  coursesResult$: Course[] = [];

  constructor() {}

  ngOnInit(): void {
    this.coursesResult$ = mockedCourseList;
  }

  getCourses() {
    fetch('./mock')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}

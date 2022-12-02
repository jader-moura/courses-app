import { Component, Input, OnInit } from '@angular/core';
import { CourseProps } from 'src/app/shared/dtos/courses';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  @Input() courses: CourseProps[] | null = [];
  @Input() editable: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

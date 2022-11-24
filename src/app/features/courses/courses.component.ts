import { CoursesStoreService } from './../../services/courses-store.service';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { CourseProps } from 'src/app/shared/dtos/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  coursesResult$: CourseProps[] = [];
  search: string = '';

  constructor(
    private coursesService: CoursesService,
    private coursesStoreService: CoursesStoreService
  ) {}

  ngOnInit(): void {
    this.coursesStoreService.courses$.subscribe((data) => {
      this.coursesResult$ = data;
      console.log(data);
    });
  }

  onSearch({ search }: any) {
    this.search = search;
    this.coursesService
      .getAll(search)
      .subscribe((courses: any) => (this.coursesResult$ = courses.result));
  }
}

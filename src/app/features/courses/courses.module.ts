import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesComponent } from './courses.component';
import { CourseListModule } from './course-list/course-list.module';
import { CourseCardModule } from './course-card/course-card.module';
import { SearchModule } from 'src/app/shared/components/search/search.module';

@NgModule({
  declarations: [CoursesComponent],
  bootstrap: [CoursesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CourseListModule,
    CourseCardModule,
    SearchModule,
  ],
})
export class CoursesModule {}

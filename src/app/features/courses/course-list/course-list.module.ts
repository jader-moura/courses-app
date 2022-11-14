import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseCardModule } from '../course-card/course-card.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CourseListComponent],
  exports: [CourseListComponent],
  bootstrap: [CourseListComponent],
  imports: [CommonModule, CourseCardModule, SharedModule],
})
export class CourseListModule {}

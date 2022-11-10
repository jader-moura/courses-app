import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Components } from './components';
import { CourseListComponent } from './components/course-list/course-list.component';

@NgModule({
  declarations: [Components, CourseListComponent],
  imports: [CommonModule],
  exports: [Components, CourseListComponent],
})
export class SharedModule {}

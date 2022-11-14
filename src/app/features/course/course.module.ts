import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormModule } from './course-form/course-form.module';
import { CourseComponent } from './course.component';

@NgModule({
  declarations: [CourseComponent],
  exports: [CourseComponent],
  bootstrap: [CourseComponent],
  imports: [CommonModule, CourseFormModule],
})
export class CourseModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormModule } from './course-form/course-form.module';
import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.module';

@NgModule({
  declarations: [CourseComponent],
  exports: [CourseComponent],
  bootstrap: [CourseComponent],
  imports: [CommonModule, CourseFormModule, CourseRoutingModule],
})
export class CourseModule {}

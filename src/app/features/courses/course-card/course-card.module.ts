import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CourseCardComponent],
  exports: [CourseCardComponent],
  bootstrap: [CourseCardComponent],
  imports: [CommonModule, SharedModule],
})
export class CourseCardModule {}

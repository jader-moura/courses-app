import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Components } from './components';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [Components, CourseFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FontAwesomeModule],
  exports: [Components],
})
export class SharedModule {}

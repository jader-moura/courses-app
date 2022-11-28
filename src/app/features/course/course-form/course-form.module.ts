import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './course-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  authorsReducer,
  initialState as AuthorsInitialState,
} from 'src/app/store/authors/authors.reducer';
import { AuthorsStateFacade } from 'src/app/store/authors/authors.facade';

@NgModule({
  declarations: [CourseFormComponent],
  exports: [CourseFormComponent],
  bootstrap: [CourseFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    StoreModule.forFeature('authors', authorsReducer, {
      initialState: AuthorsInitialState,
    }),
  ],
  providers: [AuthorsStateFacade],
})
export class CourseFormModule {}

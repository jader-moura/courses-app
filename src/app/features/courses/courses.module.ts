import {
  coursesReducer,
  initialState as CoursesInitialState,
} from './../../store/courses/courses.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesComponent } from './courses.component';
import { CourseListModule } from './course-list/course-list.module';
import { CourseCardModule } from './course-card/course-card.module';
import { SearchModule } from 'src/app/shared/components/search/search.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { StoreModule } from '@ngrx/store';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CourseListModule,
    CourseCardModule,
    SearchModule,
    CoursesRoutingModule,
    StoreModule.forFeature('courses', coursesReducer, {
      initialState: CoursesInitialState,
    }),
  ],
  providers: [CoursesStateFacade],
})
export class CoursesModule {}

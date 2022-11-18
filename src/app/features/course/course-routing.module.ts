import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/auth/guards/admin.guard';
import { CourseComponent } from './course.component';

const routes: Routes = [
  {
    path: 'add',
    component: CourseComponent,
    canActivate: [AdminGuard],
  },
  {
    path: ':id',
    component: CourseComponent,
  },
  {
    path: 'edit/:id',
    component: CourseComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}

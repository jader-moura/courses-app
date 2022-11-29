import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import {
  authReducer,
  initialState as CoursesInitialState,
} from 'src/app/auth/store/auth.reducer';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    SharedModule,
    StoreModule.forFeature('authState', authReducer, {
      initialState: CoursesInitialState,
    }),
  ],
  providers: [AuthStateFacade],
  bootstrap: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}

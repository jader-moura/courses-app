import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStateFacade } from './store/user.facade';
import { StoreModule } from '@ngrx/store';
import {
  initialState as UserInitialState,
  userReducer,
} from './store/user.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('user', userReducer, {
      initialState: UserInitialState,
    }),
  ],
  providers: [UserStateFacade],
})
export class UserModule {}

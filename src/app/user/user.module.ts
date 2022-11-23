import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { userInitialState, userReducer } from './store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effects';
import { UserStateFacade } from './store/user.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // StoreModule.forFeature('user', userReducer, {
    //   initialState: userInitialState,
    // }),
    // EffectsModule.forFeature([UserEffects]),
  ],
  providers: [UserStateFacade],
})
export class UserModule {}

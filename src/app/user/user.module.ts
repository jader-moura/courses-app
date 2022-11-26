import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStateFacade } from './store/user.facade';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [UserStateFacade],
})
export class UserModule {}

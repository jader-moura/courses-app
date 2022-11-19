import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  public isAdmin: boolean = true;

  constructor(private userService: UserService) {
    this.userService.isAdmin$?.subscribe((data) => (this.isAdmin = data));
  }
}

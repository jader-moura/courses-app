import { UserStoreService } from 'src/app/user/services/user-store.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  authorized: boolean = false;
  userName: string = '';

  constructor(
    private authService: AuthService,
    private userStoreService: UserStoreService
  ) {}

  ngOnInit(): void {
    this.authService.isAuthorized$.subscribe(
      (data) => (this.authorized = data)
    );
    this.userStoreService.name$.subscribe((data) => (this.userName = data));
  }

  logout() {
    this.authService.logout();
  }
}

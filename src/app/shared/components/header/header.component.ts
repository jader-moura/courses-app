import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserStateFacade } from 'src/app/user/store/user.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserStateFacade],
})
export class HeaderComponent implements OnInit {
  authorized: boolean = false;

  get userName() {
    return this.userFacade.name$;
  }

  constructor(
    private authService: AuthService,
    public userFacade: UserStateFacade
  ) {
    this.userFacade.getCurrentUser();
  }

  ngOnInit(): void {
    this.authService.isAuthorized.subscribe((data) => (this.authorized = data));
  }

  logout() {
    this.authService.logout();
  }
}

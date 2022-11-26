import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserStateFacade } from 'src/app/user/store/user.facade';
import { Router } from '@angular/router';
import { delay, delayWhen, map, pipe, timeInterval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserStateFacade],
})
export class HeaderComponent implements OnInit {
  authorized: boolean = false;
  userName$ = this.userFacade.name$;

  constructor(
    private router: Router,
    private authService: AuthService,
    public userFacade: UserStateFacade
  ) {}

  ngOnInit(): void {
    this.userFacade.getCurrentUser();
    this.authService.isAuthorized$.subscribe(
      (data) => (this.authorized = data)
    );
  }

  goBack() {
    this.router.navigate(['/courses']);
  }

  logout() {
    this.authService.logout();
  }
}

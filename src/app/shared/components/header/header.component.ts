import { Component, OnInit } from '@angular/core';
import { UserStateFacade } from 'src/app/user/store/user.facade';
import { Router } from '@angular/router';
import { AuthStateFacade } from 'src/app/auth/store/auth.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  authorized = this.authStateFacade.isAuthorized$;
  userName$ = this.userFacade.name$;

  constructor(
    private router: Router,
    private authStateFacade: AuthStateFacade,
    private userFacade: UserStateFacade
  ) {}

  ngOnInit(): void {
    this.userFacade.getCurrentUser();
  }

  goBack() {
    this.router.navigate(['/courses']);
  }

  logout() {
    this.authStateFacade.logout();
  }
}

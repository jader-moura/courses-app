import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanLoad {
  isAuthorized: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isAuthorized.subscribe(
      (data) => (this.isAuthorized = data)
    );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isAuthorized) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

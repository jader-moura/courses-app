import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NotAuthorizedGuard implements CanActivate {
  isAuthorized: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isAuthorized.subscribe(
      (data) => (this.isAuthorized = data)
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.isAuthorized) {
      return true;
    } else {
      this.router.navigate(['/courses']);
      return false;
    }
  }
}

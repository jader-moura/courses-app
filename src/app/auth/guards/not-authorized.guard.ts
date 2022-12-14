import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStateFacade } from '../store/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class NotAuthorizedGuard implements CanActivate {
  isAuthorized: boolean = false;

  constructor(
    private authStateFacade: AuthStateFacade,
    private router: Router
  ) {
    this.authStateFacade.isAuthorized$.subscribe((data) => {
      console.log(data, 'data');

      this.isAuthorized = data;
    });
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

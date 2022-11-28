import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserStateFacade } from 'src/app/user/store/user.facade';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  isAdmin: boolean = false;

  constructor(private userFacade: UserStateFacade, private router: Router) {
    this.userFacade.isAdmin$.subscribe((data) => (this.isAdmin = data));
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isAdmin) {
      return true;
    } else {
      this.router.navigate(['/courses']);
      return false;
    }
  }
}

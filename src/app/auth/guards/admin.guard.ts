import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from 'src/app/user/services/user-store.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  isAdmin: boolean = false;

  constructor(
    private userStoreService: UserStoreService,
    private router: Router
  ) {
    this.userStoreService.isAdmin$.subscribe((data) => (this.isAdmin = data));
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

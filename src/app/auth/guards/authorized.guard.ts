import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanLoad {
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

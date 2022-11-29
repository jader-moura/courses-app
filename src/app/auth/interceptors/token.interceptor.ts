import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: string = '';

  constructor(private authStateFacade: AuthStateFacade) {
    this.authStateFacade.getToken$.subscribe((data) => (this.token = data));
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.token) {
      request = request.clone({
        setHeaders: {
          Authorization: this.token,
        },
      });
    }

    return next.handle(request);
  }
}

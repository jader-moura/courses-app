import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private httpHeaders: any = {};

  constructor(
    private authStateFacade: AuthStateFacade,
    private httpClient: HttpClient
  ) {
    this.authStateFacade.getToken$.subscribe(
      (data) =>
        (this.httpHeaders = new HttpHeaders().set('Authorization', data || ''))
    );
    this.getUser();
  }

  getUser(): Observable<any> {
    return this.httpClient.get('http://localhost:4000/users/me', {
      headers: this.httpHeaders,
    });
  }
}

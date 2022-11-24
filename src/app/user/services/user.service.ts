import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionStorageService } from 'src/app/auth/services/session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private sessionStorage: SessionStorageService,
    private httpClient: HttpClient
  ) {
    this.getUser();
  }

  getUser(): Observable<any> {
    let httpHeaders = new HttpHeaders().set(
      'Authorization',
      this.sessionStorage.getToken() || ''
    );

    return this.httpClient.get('http://localhost:4000/users/me', {
      headers: httpHeaders,
    });
  }
}

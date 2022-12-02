import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import {
  LoginPayloadProps,
  RegisterPayloadProps,
} from 'src/app/shared/dtos/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthorized$$: BehaviorSubject<boolean>;
  public isAuthorized$: Observable<boolean>;
  authorization: string = '';

  constructor(
    private httpClient: HttpClient,
    private sessionStorage: SessionStorageService
  ) {
    this.isAuthorized$$ = new BehaviorSubject<boolean>(
      this.sessionStorage.getToken() !== null ? true : false
    );
    this.isAuthorized$ = this.isAuthorized$$.asObservable();
  }

  login(loginPayload: LoginPayloadProps) {
    return this.httpClient.post('http://localhost:4000/login', loginPayload);
  }

  logout() {
    let httpHeaders = new HttpHeaders().set(
      'Authorization',
      this.sessionStorage.getToken() || ''
    );

    return this.httpClient.delete('http://localhost:4000/logout', {
      headers: httpHeaders,
    });
  }

  register(registerPayload: RegisterPayloadProps) {
    return this.httpClient.post(
      'http://localhost:4000/register',
      registerPayload
    );
  }
}

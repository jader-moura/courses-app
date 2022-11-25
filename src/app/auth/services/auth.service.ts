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
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthorized$$: BehaviorSubject<boolean>;
  public isAuthorized$: Observable<boolean>;
  authorization: string = '';

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private sessionStorage: SessionStorageService
  ) {
    this.isAuthorized$$ = new BehaviorSubject<boolean>(
      this.sessionStorage.getToken() !== null ? true : false
    );
    this.isAuthorized$ = this.isAuthorized$$.asObservable();
  }

  login(loginPayload: LoginPayloadProps) {
    this.httpClient.post('http://localhost:4000/login', loginPayload).subscribe(
      ({ result }: any) => {
        this.sessionStorage.setToken(result);
        window.location.href = '/courses';
        // this.router.navigate(['/courses']);
      },
      (err: HttpErrorResponse) => console.error(`Got error: ${err}`)
    );
  }

  logout() {
    let httpHeaders = new HttpHeaders().set(
      'Authorization',
      this.sessionStorage.getToken() || ''
    );

    this.httpClient
      .delete('http://localhost:4000/logout', { headers: httpHeaders })
      .subscribe(
        () => {
          this.sessionStorage.deleteToken();
          window.location.href = '/login';
          // this.router.navigate(['/login']);
        },
        ({ status }: HttpErrorResponse) => {
          if (status === 401) {
            this.sessionStorage.deleteToken();
            window.location.href = '/login';
            // this.router.navigate(['/login']);
          }
        }
      );
  }

  register(registerPayload: RegisterPayloadProps) {
    this.httpClient
      .post('http://localhost:4000/register', registerPayload)
      .subscribe(
        ({ successful }: any) => {
          if (successful) {
            alert('Account created with success, please login');
          }
          window.location.href = '/login';

          // this.router.navigate(['/login']);
        },
        (err: HttpErrorResponse) => console.error(`Got error: ${err}`)
      );
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionStorageService } from 'src/app/auth/services/session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private name$$!: BehaviorSubject<string>;
  public name$!: Observable<string>;
  private isAdmin$$!: BehaviorSubject<boolean>;
  public isAdmin$!: Observable<boolean>;

  constructor(
    private sessionStorage: SessionStorageService,
    private httpClient: HttpClient
  ) {
    this.getUser();
  }

  getUser() {
    let httpHeaders = new HttpHeaders().set(
      'Authorization',
      this.sessionStorage.getToken() || ''
    );
    console.log('foi');
    this.httpClient
      .get('http://localhost:4000/users/me', { headers: httpHeaders })
      .subscribe(({ result }: any) => {
        this.name$$ = new BehaviorSubject<string>(result.name);
        this.name$ = this.name$$.asObservable();

        this.isAdmin$$ = new BehaviorSubject<boolean>(result.role === 'admin');
        this.isAdmin$ = this.isAdmin$$.asObservable();
      });
  }
}

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap } from 'rxjs';
import { SessionStorageService } from '../auth/services/session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private httpHeaders: any = {};

  constructor(
    private httpClient: HttpClient,
    private sessionStorage: SessionStorageService
  ) {
    this.httpHeaders = new HttpHeaders().set(
      'Authorization',
      this.sessionStorage.getToken() || ''
    );
  }

  getAll(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:4000/authors/all');
  }

  addAuthor(author: { name: string }): Observable<any> {
    return this.httpClient.post('http://localhost:4000/authors/add', author, {
      headers: this.httpHeaders,
    });
  }
}

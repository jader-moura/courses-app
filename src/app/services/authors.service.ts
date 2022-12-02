import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private httpHeaders: any = {};

  constructor(
    private httpClient: HttpClient,
    private authStateFacade: AuthStateFacade
  ) {
    this.authStateFacade.getToken$.subscribe(
      (data) =>
        (this.httpHeaders = new HttpHeaders().set('Authorization', data || ''))
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

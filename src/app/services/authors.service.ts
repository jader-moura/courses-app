import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:4000/authors/all');
  }

  addAuthor(author: { name: string }) {
    this.httpClient.post('http://localhost:4000/authors/add', author).subscribe(
      () => alert('Author created with success'),
      (err: HttpErrorResponse) => console.log(`Got error: ${err}`)
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private httpClient: HttpClient) {}
  getAll() {
    return this.httpClient.get('/authors/all');
  }

  addAuthor(author: { name: string }) {
    this.httpClient.post('/authors/add', author);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorsStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private authors$$ = new BehaviorSubject<any>([]);
  public isLoading$: Observable<boolean>;
  public authors$: Observable<any>;

  constructor(private authorService: AuthorsService) {
    this.authorService.getAll().subscribe((authorsList) => {
      this.isLoading$$.next(true);
      this.authors$$.next(authorsList);
      this.isLoading$$.next(false);
    });

    this.isLoading$ = this.isLoading$$.asObservable();
    this.authors$ = this.authors$$.asObservable();
  }
}

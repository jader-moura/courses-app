import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorsStoreService {
  constructor(
    private isLoading$$: BehaviorSubject<boolean>,
    private authors$$: BehaviorSubject<string[]>,
    public isLoading$: Observable<boolean>,
    public authors$: Observable<string[]>,
    private authorService: AuthorsService
  ) {
    this.isLoading$$ = new BehaviorSubject<boolean>(false);
    this.authors$$ = new BehaviorSubject<string[]>([]);

    this.authorService.getAll().subscribe((authorsList) => {
      isLoading$$.next(true);
      authors$$.next(authorsList);
      isLoading$$.next(false);
    });

    this.isLoading$ = this.isLoading$$.asObservable();
    this.authors$ = this.authors$$.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private isAdmin$$: BehaviorSubject<boolean>;
  private name$$: BehaviorSubject<string>;
  public name$: Observable<string>;
  public isAdmin$: Observable<boolean>;

  constructor(private userService: UserService) {
    this.isAdmin$$ = new BehaviorSubject(false);
    this.name$$ = new BehaviorSubject('');

    this.userService.getUser().subscribe(({ result }: any) => {
      this.name$$.next(result.name);

      this.isAdmin$$.next(result.role === 'admin');
    });

    this.name$ = this.name$$.asObservable();
    this.isAdmin$ = this.isAdmin$$.asObservable();
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/store/user.effects';
import { CoursesEffects } from './store/courses/courses.effects';
import { UserModule } from './user/user.module';
import { CoursesModule } from './features/courses/courses.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
    NgbModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    UserModule,
    CoursesModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    EffectsModule.forFeature([UserEffects, CoursesEffects]),
  ],
  exports: [
    BrowserModule,
    FontAwesomeModule,
    SharedModule,
    NgbModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: 'Window', useValue: window },
  ],
  bootstrap: [AppComponent, SharedModule],
})
export class AppModule {}

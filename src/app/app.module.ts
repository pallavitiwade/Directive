import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LowerCaseDirective } from './lower-case.directive';
import { cssHighLighterRendere } from './shared/component/directives/cssHighLighterRendere.directive';
import { CreditCardDirective } from './credit-card.directive';
import { cssHighLighterDirective } from './shared/component/directives/cssHighLighter.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneComponent } from './components/one/one.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MobileComponent } from './shared/component/directives/mobile/mobile.component';
import { MovieComponent } from './shared/component/directives/movie/movie.component';
import { MovieDashobardComponent } from './shared/component/directives/movie-dashobard/movie-dashobard.component';

@NgModule({
  declarations: [
     AppComponent,
     MovieComponent,
     MovieDashobardComponent,
    //  MobileComponent,
    //  MobileDashboardComponent,
    // PostDashboardComponent,
    // PostCardComponent,
    // OneComponent,

  //  cssHighLighterRendere,
  //   LowerCaseDirective,
  //   CreditCardDirective,
  //    cssHighLighterDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

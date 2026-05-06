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

import { PostDashboardComponent } from './shared/component/directives/postDashboard/post-dashboard/post-dashboard.component';
import { PostCardComponent } from './shared/component/directives/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDashboardComponent,
    PostCardComponent,
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

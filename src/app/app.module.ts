import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LowerCaseDirective } from './lower-case.directive';
import { cssHighLighterRendere } from './shared/component/directives/cssHighLighterRendere.directive';
import { CreditCardDirective } from './credit-card.directive';
import { cssHighLighterDirective } from './shared/component/directives/cssHighLighter.directive';

@NgModule({
  declarations: [
    AppComponent,
   cssHighLighterRendere,
    LowerCaseDirective,
    CreditCardDirective,
     cssHighLighterDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

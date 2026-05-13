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
import {MatIconModule} from '@angular/material/icon';


import { MobileComponent } from './shared/component/directives/mobile/mobile.component';
import { MovieComponent } from './shared/component/directives/movie/movie.component';
import { MovieDashobardComponent } from './shared/component/directives/movie-dashobard/movie-dashobard.component';
import { TodoDashboardComponent } from './shared/component/directives/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/component/directives/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/directives/todo-list/todo-list.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GetConfirmComponent } from './shared/get-confirm/get-confirm.component';
import{MatDialogModule} from "@angular/material/dialog";
import { StudentDashboardComponent } from './shared/component/directives/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/component/directives/student-form/student-form.component';
import { StudentListComponent } from './shared/component/directives/student-list/student-list.component';
import { SGetConfirmComponent } from './shared/component/directives/s-get-confirm/s-get-confirm.component'


@NgModule({
  declarations: [
     AppComponent,
     MovieComponent,
     MovieDashobardComponent,
     TodoDashboardComponent,
     TodoFormComponent,
     TodoListComponent,
     GetConfirmComponent,
     StudentDashboardComponent,
     StudentFormComponent,
     StudentListComponent,
     SGetConfirmComponent,
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
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

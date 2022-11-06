import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimalsMainComponent } from './animals-main/animals-main.component';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent,
    AnimalsMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [AnimalsMainComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

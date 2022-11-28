import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimalManagerComponent } from './animal-manager/animal-manager.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AccountManagerComponent } from './account-manager/account-manager.component';
import { BookingManagerComponent } from './booking-manager/booking-manager.component';
import { BookingCreatorComponent } from './booking-creator/booking-creator.component';
import { AccountCreatorComponent } from './account-creator/account-creator.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    AnimalManagerComponent,
    PageNotFoundComponent,
    AccountManagerComponent,
    BookingManagerComponent,
    BookingCreatorComponent,
    AccountCreatorComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

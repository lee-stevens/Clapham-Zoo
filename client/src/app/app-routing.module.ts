import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AnimalManagerComponent } from './animal-manager/animal-manager.component'
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AccountManagerComponent } from './account-manager/account-manager.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AccountCreatorComponent } from './account-creator/account-creator.component';
import { BookingCreatorComponent } from './booking-creator/booking-creator.component';
import { BookingManagerComponent } from './booking-manager/booking-manager.component';

//Place more specific routes at the top
const routes: Routes = [
  { path: '',                         component: HomepageComponent },
  { path: 'dashboard-staff',          component: DashboardComponent },
  { path: 'account-creator',          component: AccountCreatorComponent },
  { path: 'account-manager',          component: AccountManagerComponent },
  { path: 'account-manager-admin',    component: DashboardComponent },
  { path: 'booking-creator',          component: BookingCreatorComponent },
  { path: 'booking-manager',          component: BookingManagerComponent },
  { path: 'animal-manager',           component: AnimalManagerComponent },
  { path: '**',                       component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

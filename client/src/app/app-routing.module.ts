import { NgModule                   } from '@angular/core';
import { RouterModule, Routes       } from '@angular/router';

import { HomepageComponent          } from './homepage/homepage.component';
import { DashboardComponent         } from './dashboard/dashboard.component'
import { AnimalManagerComponent     } from './animals/animal-manager/animal-manager.component'
import { PageNotFoundComponent      } from './pagenotfound/pagenotfound.component';
import { AccountManagerComponent    } from './accounts/account-manager/account-manager.component';
import { AccountCreatorComponent    } from './accounts/account-creator/account-creator.component';
import { BookingCreatorComponent    } from './bookings/booking-creator/booking-creator.component';
import { BookingManagerComponent    } from './bookings/booking-manager/booking-manager.component';
import { ExperimentsComponent       } from './experiments/experiments.component';

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
  { path: 'experimental',             component: ExperimentsComponent },
  { path: '**',                       component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

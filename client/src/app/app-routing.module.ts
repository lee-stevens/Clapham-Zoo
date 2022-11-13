import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AnimalManagerComponent } from './animal-manager/animal-manager.component'
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AccountManagerComponent } from './account-manager/account-manager.component';
//Place more specific routes at the top
const routes: Routes = [
  { path: '',                   component: DashboardComponent },
  { path: 'dashboard',          component: DashboardComponent },
  { path: 'animal-manager',     component: AnimalManagerComponent},
  { path: 'manage-account',     component: AccountManagerComponent},
  { path: '**',                 component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

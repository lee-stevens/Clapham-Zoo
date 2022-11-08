import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AnimalManagerComponent } from './animal-manager/animal-manager.component'
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
//Place more specific routes at the top
const routes: Routes = [
  { path: 'dashboard',          component: DashboardComponent },
  { path: 'animal-manager',     component: AnimalManagerComponent},
  { path: '**',                 component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

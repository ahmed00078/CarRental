import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashLocationsPage } from './dash-locations.page';

const routes: Routes = [
  {
    path: '',
    component: DashLocationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashLocationsPageRoutingModule {}

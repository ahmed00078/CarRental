import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashIncidentsPage } from './dash-incidents.page';

const routes: Routes = [
  {
    path: '',
    component: DashIncidentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashIncidentsPageRoutingModule {}

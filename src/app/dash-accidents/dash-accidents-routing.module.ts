import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashAccidentsPage } from './dash-accidents.page';

const routes: Routes = [
  {
    path: '',
    component: DashAccidentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashAccidentsPageRoutingModule {}

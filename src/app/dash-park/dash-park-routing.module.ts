import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashParkPage } from './dash-park.page';

const routes: Routes = [
  {
    path: '',
    component: DashParkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashParkPageRoutingModule {}

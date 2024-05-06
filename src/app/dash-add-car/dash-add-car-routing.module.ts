import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashAddCarPage } from './dash-add-car.page';

const routes: Routes = [
  {
    path: '',
    component: DashAddCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashAddCarPageRoutingModule {}

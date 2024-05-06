import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashAdminPage } from './dash-admin.page';

const routes: Routes = [
  {
    path: '',
    component: DashAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashAdminPageRoutingModule {}

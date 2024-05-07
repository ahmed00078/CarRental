import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomehPage } from './welcomeh.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomehPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomehPageRoutingModule {}

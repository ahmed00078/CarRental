import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePage } from './welcome.page'; // Assurez-vous que le chemin est correct

const routes: Routes = [
  {
    path: '',
    component: WelcomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomePageRoutingModule {}

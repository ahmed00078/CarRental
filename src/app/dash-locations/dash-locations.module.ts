import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashLocationsPageRoutingModule } from './dash-locations-routing.module';

import { DashLocationsPage } from './dash-locations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashLocationsPageRoutingModule
  ],
  declarations: [DashLocationsPage]
})
export class DashLocationsPageModule {}

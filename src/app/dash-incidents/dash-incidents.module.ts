import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashIncidentsPageRoutingModule } from './dash-incidents-routing.module';

import { DashIncidentsPage } from './dash-incidents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashIncidentsPageRoutingModule
  ],
  declarations: [DashIncidentsPage]
})
export class DashIncidentsPageModule {}

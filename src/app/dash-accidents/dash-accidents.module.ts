import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashAccidentsPageRoutingModule } from './dash-accidents-routing.module';

import { DashAccidentsPage } from './dash-accidents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAccidentsPageRoutingModule
  ],
  declarations: [DashAccidentsPage]
})
export class DashAccidentsPageModule {}

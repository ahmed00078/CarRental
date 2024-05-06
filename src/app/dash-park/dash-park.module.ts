import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashParkPageRoutingModule } from './dash-park-routing.module';

import { DashParkPage } from './dash-park.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashParkPageRoutingModule
  ],
  declarations: [DashParkPage]
})
export class DashParkPageModule {}

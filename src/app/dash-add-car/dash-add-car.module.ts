import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashAddCarPageRoutingModule } from './dash-add-car-routing.module';

import { DashAddCarPage } from './dash-add-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAddCarPageRoutingModule
  ],
  declarations: [DashAddCarPage]
})
export class DashAddCarPageModule {}

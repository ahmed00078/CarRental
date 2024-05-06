import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashAdminPageRoutingModule } from './dash-admin-routing.module';

import { DashAdminPage } from './dash-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAdminPageRoutingModule
  ],
  declarations: [DashAdminPage]
})
export class DashAdminPageModule {}

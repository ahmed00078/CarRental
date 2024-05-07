import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomehPageRoutingModule } from './welcomeh-routing.module';

import { WelcomehPage } from './welcomeh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomehPageRoutingModule
  ],
  declarations: [WelcomehPage]
})
export class WelcomehPageModule {}

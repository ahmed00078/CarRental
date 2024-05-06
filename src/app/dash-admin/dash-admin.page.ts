import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DashParkPage } from '../dash-park/dash-park.page';
import { DashLocationsPage } from '../dash-locations/dash-locations.page';
import { DashAccidentsPage } from '../dash-accidents/dash-accidents.page';
import { DashIncidentsPage } from '../dash-incidents/dash-incidents.page';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.page.html',
  styleUrls: ['./dash-admin.page.scss'],
})
export class DashAdminPage {

  constructor(public navCtrl: NavController) {}

  goToPark(){
    this.navCtrl.navigateForward('/dash-park');
  }

  goToRentals(){
    this.navCtrl.navigateForward('/dash-locations');
  }

  goToAccidents(){
    this.navCtrl.navigateForward('/dash-accidents');
  }

  goToIncidents(){
    this.navCtrl.navigateForward('/dash-incidents');
  }

  goToLogin(){
    this.navCtrl.navigateRoot('/login');
  }
}

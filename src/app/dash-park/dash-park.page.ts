import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DashAddCarPage } from '../dash-add-car/dash-add-car.page';

@Component({
  selector: 'app-dash-park',
  templateUrl: './dash-park.page.html',
  styleUrls: ['./dash-park.page.scss'],
})
export class DashParkPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidEnter() {
    console.log('ionViewDidEnter DashParkPage');
  }

  addCar() {
    this.navCtrl.navigateForward('/dash-add-car');
  }

  manageCars() {
    // Ajouter la logique pour gérer les voitures
  }

  removeCar() {
    // Ajouter la logique pour supprimer une voiture
  }

  checkAvailability() {
    // Ajouter la logique pour vérifier la disponibilité des voitures
  }

  checkMaintenance() {
    // Ajouter la logique pour vérifier l'état de maintenance des voitures
  }
}

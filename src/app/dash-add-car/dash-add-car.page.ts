import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
// import { Car } from '../../models/car.model';

interface Car {
  type: string,
  brand: string,
  model: string,
  image: string,
  price: number,
  speed: number,
  gear: string,
  energy: string,
  places: number
}

@Component({
  selector: 'app-dash-add-car',
  templateUrl: './dash-add-car.page.html',
  styleUrls: ['./dash-add-car.page.scss'],
})
export class DashAddCarPage {

  car: Car = {
    type: '',
    brand: '',
    model: '',
    price: 0,
    gear: '',
    places: 0,
    image: '',
    speed: 0,
    energy: ''
  };

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  async addCar() {
    console.log(this.car);
    this.navCtrl.back();
    const alert = this.alertCtrl.create({
      header: 'Ajout voiture',
      message: `Une nouvelle voiture ${this.car.brand} est ajoutée avec succès`,
      buttons: ['OK'],
      cssClass: 'custom-alert',
    });
    (await alert).present();
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
// import { Car } from '../../models/car.model';

interface Car {
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
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage {

  car: Car;

  constructor() {
    this.car = {
      brand: 'Audi',
      model: 'A4',
      image: 'https://www.audi.fr/content/dam/nemo/models/a4/a4-sedan/my-2020/1920x1080-inline-media-gallery/1920x1080-gal-1.jpg',
      price: 50,
      speed: 220,
      gear: 'Automatique',
      energy: 'Essence',
      places: 5
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarDetailsPage');
    console.log(this.car);
  }
}

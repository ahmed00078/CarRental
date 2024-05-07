import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { LoginPage } from '../login/login';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  user = {
    lastName: 'Bahloul',
    firstName: 'Fedi',
    email: 'fedibahloul@ieee.org',
    address: 'Manar 1 residense Hnnibal',
    phone: '26490181',
    rentedCars: ['Kia, Seltos (14 jours restants)', 'Toyota, Supra MK4 (37 jours restants)']
  };

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {
    // You can access parameters passed through the URL like this
    this.route.queryParams.subscribe(params => {
      // If there are parameters passed, you can access them here
      console.log(params);
    });
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter ProfilePage');
  }

  goToLogin() {
    // Reload the application to simulate logout
    window.location.reload();
  }

  saveChanges() {
    // Perform user information update operations here
    console.log('Saved Changes:', this.user);
  }
}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { SignupPage } from '../signup/signup';
// import { TabsPage } from '../tabs/tabs';
// import { DashAdminPage } from '../dash-admin/dash-admin';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  username: string | undefined;
  password: string | undefined;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  async login() {
    if (this.username === 'user' && this.password === 'user') {
      this.navCtrl.navigateRoot('/tabs');
    } else if (this.username === 'admin' && this.password === 'admin') {
      this.navCtrl.navigateRoot('/dash-admin');
    } else {
      const alert = this.alertCtrl.create({
        header: 'Erreur de connexion',
        subHeader: `Désolé, votre identifiant ou mot de passe est invalide`,
        buttons: ['OK'],
        cssClass: 'login-alert',
      });
      (await alert).present();
    }
  }

  goToSignup() {
    this.navCtrl.navigateForward('/signup');
  }
}

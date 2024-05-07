import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  email: string | undefined;
  password: string | undefined;

  constructor(public navCtrl: NavController, private authService: AuthService) {}

  async login() {
    this.authService.login({ email: this.email!, password: this.password! }).subscribe(
      (response) => {
          console.log('Connexion réussie');
          console.log('Réponse du service d\'authentification :', response);
          if (response.role === 'Regular') {
            this.navCtrl.navigateRoot('/profile');
          } else if (response.role === 'Admin') {
            this.navCtrl.navigateRoot('/dash-admin');
          }
      },
      (error) => {
        console.error('Erreur de connexion', error);
      }
    );
  }

  goToSignup() {
    this.navCtrl.navigateForward('/signup');
  }
}

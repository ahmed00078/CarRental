import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  signup() {
    if (this.signupForm.valid) {
      const { firstName, lastName, email, password, confirmPassword } = this.signupForm.value;
      const userData = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      };

      this.authService.signup(userData).subscribe(
        (response) => {
          if (response) {
            this.navCtrl.navigateRoot('/profile');
            console.log('Inscription réussie', response);
          } else {
            console.log('Erreur lors de l\'inscription');
          }
        },
        (error) => {
          console.error('Erreur lors de l\'inscription', error);
        }
      );
    }
  }

  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }
}
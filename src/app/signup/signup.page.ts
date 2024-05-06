import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { LoginPage } from '../login/login';

interface SignUpData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.page.html',
  styleUrls: ['signup.page.scss']
})
export class SignupPage {

  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(public navCtrl: NavController) {}

  data: SignUpData = {
    username: this.fullName,
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword,
  }

  verifySignUpData(data: SignUpData): boolean {
    const { username, email, password, confirmPassword } = data;
    let isValid = true; // use a flag variable
    
    // Check if username is not empty
    if (!username) {
      console.error("Username is required.");
      isValid = false;
    }
  
    // Check if email is not empty and has a valid format
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      console.error("Email is required and must be in a valid format.");
      isValid = false;
    }
  
    // Check if password is not empty and has at least 6 characters
    if (!password || password.length < 6) {
      console.error("Password is required and must be at least 6 characters long.");
      isValid = false;
    }
  
    // Check if confirmPassword matches password
    if (password !== confirmPassword) {
      console.error("Confirm password does not match.");
      isValid = false;
    }
  
    if (isValid) {
      alert('Success');
      return true;
    } else {
      alert('Error');
      return false;
    }
  }

  signup() {
    this.verifySignUpData(this.data);
  }

  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }
}
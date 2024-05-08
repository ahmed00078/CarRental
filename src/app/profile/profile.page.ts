import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  user: any;
  rentedCars: any[] = []; // Tableau pour stocker les voitures louées par l'utilisateur

  constructor(private profileService: ProfileService, private navCtrl: NavController) {}

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    console.log('Fetching user profile...');
    this.profileService.getUserProfile().subscribe(
      (response) => {
        console.log('User profile:', response);
        this.user = response.userProfile;
        console.log('User:', this.user.FirstName, this.user.LastName);
        // Après avoir récupéré le profil de l'utilisateur, récupérez les voitures louées par cet utilisateur
        // this.getRentedCars(this.user.UserID);
      },
      (error) => {
        console.log('Error fetching user profile:', error);
        console.error('Error fetching user profile:', error);
      }
    );
  }

  // getRentedCars(userId: number) {
  //   console.log('Fetching rented cars for user:', userId);
  //   this.profileService.getRentedCars(userId).subscribe(
  //     (response) => {
  //       console.log('Rented cars:', response);
  //       this.rentedCars = response.rentedCars;
  //     },
  //     (error) => {
  //       console.log('Error fetching rented cars:', error);
  //     }
  //   );
  // }

  saveChanges() {
    // Perform user information update operations here
    console.log('Saved Changes:', this.user);
  }
}

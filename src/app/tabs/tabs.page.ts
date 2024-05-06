import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarsPage } from '../cars/cars.page';
import { FilterPage } from '../filter/filter.page';
// import { WelcomePage } from '../welcome/welcome.page';
import { ContractsPage } from '../contracts/contracts.page';
import { ProfilePage } from '../profile/profile.page';
import { LoginPage } from '../login/login.page';
import { AdvancedSearchPage } from '../advanced-search/advanced-search.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
})
export class TabsPage {

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
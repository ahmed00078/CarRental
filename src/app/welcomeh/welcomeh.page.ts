import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Car {
  brand: string;
  model: string;
  image: string;
  price: number;
  speed: number;
  gear: string;
  energy: string;
  places: number;
}
@Component({
  selector: 'app-welcomeh',
  templateUrl: './welcomeh.page.html',
  styleUrls: ['./welcomeh.page.scss'],
})


export class WelcomehPage implements OnInit {

  searchQuery: string = '';
  cars: Car[] = [
    {
      brand: 'Kia',
      model: 'Seltos',
      image: 'assets/cars/kia-seltos.png',
      price: 200,
      speed: 260,
      gear: 'Automatique',
      energy: 'Essence',
      places: 4
    },
    {
      brand: 'Kia',
      model: 'Seltos',
      image: 'assets/cars/kia-seltos.png',
      price: 200,
      speed: 260,
      gear: 'Automatique',
      energy: 'Essence',
      places: 4
    },
    {
      brand: 'Kia',
      model: 'Seltos',
      image: 'assets/cars/kia-seltos.png',
      price: 200,
      speed: 260,
      gear: 'Automatique',
      energy: 'Essence',
      places: 4
    },
    {
      brand: 'Kia',
      model: 'Seltos',
      image: 'assets/cars/kia-seltos.png',
      price: 200,
      speed: 260,
      gear: 'Automatique',
      energy: 'Essence',
      places: 4
    },
    // Add other car objects here
  ];

  filteredItems: Car[] = this.cars;

  searchData = {
    category: '',
    brand: '',
    model: '',
    priceRange: 0
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter WelcomePage');
    const searchData = history.state.searchData;
    if (searchData) {
      this.searchData = searchData;
      this.filterCars();
    }
  }

  onSearchInput(event: any) {
    const searchQuery = event.target.value.toLowerCase();
    this.filteredItems = this.cars.filter(item =>
      item.brand.toLowerCase().includes(searchQuery) || item.model.toLowerCase().includes(searchQuery)
    );
    this.filterCars();
  }

  onClearSearch() {
    this.searchQuery = '';
    this.filteredItems = this.cars;
    this.filterCars();
  }

  onCardClick(car: Car) {
    this.router.navigate(['/car-details'], { state: { car: car } });
  }

  goToAdvancedSearch() {
    this.router.navigate(['/advanced-search'], { state: { searchData: this.searchData } });
  }

  filterCars() {
    this.filteredItems = this.cars.filter(item =>
      (this.searchData.brand ? item.brand === this.searchData.brand : true) &&
      (this.searchData.model ? item.model === this.searchData.model : true) &&
      (this.searchData.priceRange ? item.price < this.searchData.priceRange : true)
    );
  }

  printMessage(message: string) {
    console.log('WelcomePage says:', message);
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.page.html',
  styleUrls: ['./advanced-search.page.scss'],
})
export class AdvancedSearchPage {
  searchForm: FormGroup;
  categories: string[] = ['Tourisme', 'Luxe', 'Utilitaire'];
  brands: string[] = ['Toyota', 'Honda', 'Nissan', 'Kia', 'Hyundai'];
  models: string[] = ['Camry', 'Accord', 'Altima', 'Soul', 'Elantra'];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder
  ) {
    let searchData = navParams.get('searchData');
    console.log(searchData);
    this.searchForm = this.formBuilder.group({
      category: [searchData?.category || ''],
      brand: [searchData?.brand || ''],
      model: [searchData?.model || ''],
      priceRange: [searchData?.priceRange || 0],
    });
  }

  onSubmit() {
    this.navCtrl.navigateRoot('/welcome', { state: { searchData: this.searchForm.value } });
  }

  dismiss() {
    this.navCtrl.navigateRoot('/welcome');
  }
}

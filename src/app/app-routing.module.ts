import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { WelcomePageModule } from './welcome/welcome.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'welcome',
  //   loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule) // Utilisation directe du module WelcomePageModule
  // },
  // Add routes for other pages
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'car-details',
    loadChildren: () => import('./car-details/car-details.module').then( m => m.CarDetailsPageModule)
  },
  {
    path: 'advanced-search',
    loadChildren: () => import('./advanced-search/advanced-search.module').then( m => m.AdvancedSearchPageModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then( m => m.CarsPageModule)
  },
  {
    path: 'contracts',
    loadChildren: () => import('./contracts/contracts.module').then( m => m.ContractsPageModule)
  },
  {
    path: 'dash-admin',
    loadChildren: () => import('./dash-admin/dash-admin.module').then( m => m.DashAdminPageModule)
  },
  {
    path: 'dash-incidents',
    loadChildren: () => import('./dash-incidents/dash-incidents.module').then( m => m.DashIncidentsPageModule)
  },
  {
    path: 'dash-accidents',
    loadChildren: () => import('./dash-accidents/dash-accidents.module').then( m => m.DashAccidentsPageModule)
  },
  {
    path: 'dash-locations',
    loadChildren: () => import('./dash-locations/dash-locations.module').then( m => m.DashLocationsPageModule)
  },
  {
    path: 'dash-add-car',
    loadChildren: () => import('./dash-add-car/dash-add-car.module').then( m => m.DashAddCarPageModule)
  },
  {
    path: 'dash-park',
    loadChildren: () => import('./dash-park/dash-park.module').then( m => m.DashParkPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },  {
    path: 'welcomeh',
    loadChildren: () => import('./welcomeh/welcomeh.module').then( m => m.WelcomehPageModule)
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

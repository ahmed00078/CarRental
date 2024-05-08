import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.page.html',
  styleUrls: ['./contracts.page.scss'],
})
export class ContractsPage implements OnInit {
  startDate: string = '';
  endDate: string = '';
  country: string = '';
  city: string = '';
  phone: string = '';

  constructor() { }

  ngOnInit() {
  }

  reserve() {
    // Access the form input values here
    console.log('Start Date:', this.startDate);
    console.log('End Date:', this.endDate);
    console.log('Country:', this.country);
    console.log('City:', this.city);
    console.log('Phone:', this.phone);

    // Add further logic here, such as sending the form data to a server
  }
}

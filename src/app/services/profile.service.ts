import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:3000/profile/getprofile';

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<any> {
    console.log('Fetching user profile...service');
    return this.http.get(this.apiUrl);
  }

  getRentedCars(userId: number): Observable<any> {
    console.log('Fetching rented cars...CCCCC', );
    return this.http.get(`${this.apiUrl}/profile/getrentedcars/${userId}`);
  }
}

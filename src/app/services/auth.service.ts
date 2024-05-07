import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    const loginUrl = 'http://localhost:3000/authentification/login';
    console.log("credentials  ", credentials);
    return this.http.post(loginUrl, credentials).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  signup(userData: SignUpData): Observable<any> {
    const signupUrl = 'http://localhost:3000/authentification/signup';
    console.log("userData  ", userData);
    return this.http.post(signupUrl, userData).pipe(
      map((response: any) => {
        console.log("response signup", response);
        if (response.success) {
          // Rediriger vers la page de connexion après une inscription réussie
          this.router.navigate(['/login']);
        }
        return response;
      })
    );
  }
}
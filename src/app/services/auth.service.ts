import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token'; // Clé pour stocker le token dans le stockage local

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    const loginUrl = 'http://localhost:3000/authentification/login';
    return this.http.post(loginUrl, credentials).pipe(
      map((response: any) => {
        if (response.token) {
          // Enregistrer le token dans le stockage local
          localStorage.setItem(this.tokenKey, response.token);
        }
        return response;
      })
    );
  }

  getToken(): string | null {
    // Récupérer le token depuis le stockage local
    return localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    // Supprimer le token du stockage local lors de la déconnexion
    localStorage.removeItem(this.tokenKey);
    // Rediriger vers la page de connexion
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    // Vérifier si le token est présent dans le stockage local
    return !!localStorage.getItem(this.tokenKey);
  }

  signup(userData: SignUpData): Observable<any> {
    const signupUrl = 'http://localhost:3000/authentification/signup';
    return this.http.post(signupUrl, userData);
  }

  // Autres méthodes pour gérer le token (vérification, suppression, etc.) si nécessaire
}

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

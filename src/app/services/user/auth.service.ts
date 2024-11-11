import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token_Explore'; // clé du token dans le localStorage

  constructor(private router: Router) {
  }

  // TODO : UTILISER CAPACITOR SECURE STORAGE pour gérer le token

  // Vérifie si l'utilisateur est authentifié
  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return !!token; // Si un token est présent, l'utilisateur est considéré comme authentifié
  }

  // Connexion de l'utilisateur et stockage du token
  login(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Déconnexion de l'utilisateur (supprime le token)
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/']); // Redirige vers la page de login après déconnexion
  }

  // Récupère le token actuel (si disponible)
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Optionnel : peut-être une méthode pour vérifier la validité du token via une API
  // checkTokenValidity(): Observable<boolean> {
  //   return this.httpClient.get<boolean>('/api/check-token', { headers: { Authorization: `Bearer ${this.getToken()}` } });
  // }
}

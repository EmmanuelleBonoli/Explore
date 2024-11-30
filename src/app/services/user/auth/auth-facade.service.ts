import {Injectable, inject} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {
  router: Router = inject(Router)
  private readonly _TOKEN_KEY = 'auth_token_Explore';

  // TODO : UTILISER CAPACITOR SECURE STORAGE pour gérer le token
  // TODO: Mettre en place la séparation auth-facade et auth-api

  saveToken(token: string): boolean {
    if (!token) {
      return false;
    } else {
      localStorage.setItem(this._TOKEN_KEY, token);
      return true;
    }
  }

  // Vérifie si l'utilisateur est authentifié
  isLoggedIn(): boolean {
    const token = localStorage.getItem(this._TOKEN_KEY);
    return !!token; // Si un token est présent, l'utilisateur est considéré comme authentifié
  }

  // Déconnexion de l'utilisateur (supprime le token)
  logout(): void {
    localStorage.removeItem(this._TOKEN_KEY);
    this.router.navigate(['/']); // Redirige vers la page de login après déconnexion
  }

  // Récupère le token actuel (si disponible)
  getToken(): string | null {
    return localStorage.getItem(this._TOKEN_KEY);
  }

  // Vérifier la validité du token via une API
  // checkTokenValidity(): Observable<boolean> {
  //   return this.httpClient.get<boolean>('/api/check-token', { headers: { Authorization: `Bearer ${this.getToken()}` } });
  // }
}

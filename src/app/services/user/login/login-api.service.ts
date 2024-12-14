import {Injectable, inject} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, catchError} from 'rxjs';
import {LoginResult} from "../../../models/login/login-result.type";
import {errorApiService} from "../../utils/utils";
import {UserLogIn} from "../../../models/login/user-log-in.type";

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  private _http: HttpClient = inject(HttpClient);

  private readonly _BASE_API_URL: string = "http://localhost:3000/";

  verifyEmail(email: string): Observable<boolean> {
    const endpoint = '/api/login/verify-email';

    return this._http.get<boolean>(`${this._BASE_API_URL}${endpoint}/${email}`).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "verifyEmail")
      })
    );
  }

  verifyPseudo(pseudo: string): Observable<boolean> {
    const endpoint = '/api/login/verify-pseudo';

    return this._http.get<boolean>(`${this._BASE_API_URL}${endpoint}/${pseudo}`).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "verifyPseudo")
      })
    );
  }

  // todo: le back devra générer et sauvegarder un code à 5chiffres aléatoire
  saveCodeToResetPassword(email: string): Observable<boolean> {
    const endpoint = '/api/password/save-code';

    return this._http.get<boolean>(`${this._BASE_API_URL}${endpoint}`).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "saveCodeToResetPassword")
      })
    );
  }

  // todo: message à implémenter dans le back si type === "success": "" sinon "Impossible d'envoyer le code"
  checkCodeToResetPassword(code: number): Observable<LoginResult> {
    const endpoint = '/api/password/check-code';

    return this._http.get<LoginResult>(`${this._BASE_API_URL}${endpoint}/${code}`).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "checkCodeToResetPassword")
      })
    );
  }

  // todo: message à implémenter dans le back si type === "success": "Mot de passe modifié !" sinon "Impossible de modifier le mot de passe, veuillez réessayer."
  resetPasswordUser(password: string): Observable<LoginResult> {
    const endpoint = '/api/password/reset-password';
    const body = {password};

    return this._http.post<LoginResult>(`${this._BASE_API_URL}${endpoint}`, body).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "resetPassword")
      })
    );
  }

  // todo: message à implémenter dans le back si type === "success": "" sinon "L'email ou le mot de passe renseigné est erronné."
  logIn(userLogIn: UserLogIn): Observable<LoginResult> {
    const endpoint = '/api/login';
    const body = {userLogIn};

    return this._http.post<LoginResult>(`${this._BASE_API_URL}${endpoint}`, body).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "logIn")
      })
    );
  }

  // todo: message à implémenter dans le back si type === "success": "Compte utilisateur créé ! Bienvenue !" sinon "Le compte n'a pu être créé, veuillez réessayer."
  signUp(userLogIn: UserLogIn): Observable<LoginResult> {
    const endpoint = '/api/signup';
    const body = {userLogIn};

    return this._http.post<LoginResult>(`${this._BASE_API_URL}${endpoint}`, body).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "signUp")
      })
    );
  }
}

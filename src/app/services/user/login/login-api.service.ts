import {Injectable, inject} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, catchError} from 'rxjs';
import {LoginResult} from "../../../models/login/login-result.type";
import {errorApiService} from "../../utils/utils";
import {UserLogIn} from "../../../models/login/user-log-in.type";
import {API_ENDPOINTS_LOGIN} from "../../../routes/api-routes";

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  private _http: HttpClient = inject(HttpClient);

  verifyEmail(email: string): Observable<boolean> {
    return this._http.get<boolean>(`${API_ENDPOINTS_LOGIN.verifyEmail}/${email}`).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "verifyEmail")
      })
    );
  }

  verifyPseudo(pseudo: string): Observable<boolean> {
    return this._http.get<boolean>(`${API_ENDPOINTS_LOGIN.verifyPseudo}/${pseudo}`).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "verifyPseudo")
      })
    );
  }

  // todo: le back devra générer et sauvegarder un code à 5chiffres aléatoire
  saveCodeToResetPassword(email: string): Observable<boolean> {
    return this._http.get<boolean>(`${API_ENDPOINTS_LOGIN.saveCodeToResetPassword}/${email}`).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "saveCodeToResetPassword")
      })
    );
  }

  // todo: message à implémenter dans le back si type === "success": "" sinon "Impossible d'envoyer le code"
  checkCodeToResetPassword(code: number): Observable<LoginResult> {
    return this._http.get<LoginResult>(`${API_ENDPOINTS_LOGIN.checkCodeToResetPassword}/${code}`).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "checkCodeToResetPassword")
      })
    );
  }

  // todo: message à implémenter dans le back si type === "success": "Mot de passe modifié !" sinon "Impossible de modifier le mot de passe, veuillez réessayer."
  resetPasswordUser(password: string): Observable<LoginResult> {
    return this._http.post<LoginResult>(`${API_ENDPOINTS_LOGIN.resetPasswordUser}`, {password}).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "resetPassword")
      })
    );
  }

  // todo: message à implémenter dans le back si type === "success": "" sinon "L'email ou le mot de passe renseigné est erronné."
  logIn(userLogIn: UserLogIn): Observable<LoginResult> {
    return this._http.post<LoginResult>(`${API_ENDPOINTS_LOGIN.logIn}`, {userLogIn}).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "logIn")
      })
    );
  }

  // todo: message à implémenter dans le back si type === "success": "Compte utilisateur créé ! Bienvenue !" sinon "Le compte n'a pu être créé, veuillez réessayer."
  signUp(userLogIn: UserLogIn): Observable<LoginResult> {
    return this._http.post<LoginResult>(`${API_ENDPOINTS_LOGIN.signUp}`, {userLogIn}).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "signUp")
      })
    );
  }
}

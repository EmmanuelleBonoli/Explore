import {inject, Injectable} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {LoginResult} from "../../models/login/login-result.type";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {errorApiService} from "../utils/utils";
import {API_ENDPOINTS_EMAIL} from "../../routes/api-routes";

@Injectable({
  providedIn: 'root'
})
export class EmailApiService {
  private _http: HttpClient = inject(HttpClient);

  // todo: message à implémenter dans le back si type === "success": "Email envoyé !" sinon "Impossible d'envoyer l'email"
  sendCodeToResetPassword(email: string): Observable<LoginResult> {
    return this._http.get<LoginResult>(`${API_ENDPOINTS_EMAIL.sendCodeToResetPassword}/${email}`).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "sendCodeToResetPassword")
      })
    );
  }

}

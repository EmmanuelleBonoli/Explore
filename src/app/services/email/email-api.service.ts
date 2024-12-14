import {inject, Injectable} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {LoginResult} from "../../models/login/login-result.type";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {errorApiService} from "../utils/utils";

@Injectable({
  providedIn: 'root'
})
export class EmailApiService {
  private _http: HttpClient = inject(HttpClient);

  private readonly _BASE_API_URL: string = "http://localhost:3000/";

  // todo: message à implémenter dans le back si type === "success": "Email envoyé !" sinon "Impossible d'envoyer l'email"
  sendCodeToResetPassword(email: string): Observable<LoginResult> {
    const endpoint = '/api/email/send-code-reset-password';

    return this._http.get<LoginResult>(`${this._BASE_API_URL}${endpoint}/${email}`).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "sendCodeToResetPassword")
      })
    );
  }

}

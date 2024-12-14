import {Injectable, inject} from '@angular/core';
import {Observable, tap, catchError, throwError, switchMap} from "rxjs";
import {LoginApiService} from "./login-api.service";
import {LoginResult} from "../../../models/login/login-result.type";
import {UserSignUp} from "../../../models/login/user-sign-up.type";
import {UserLogIn} from "../../../models/login/user-log-in.type";
import {AuthFacadeService} from "../auth/auth-facade.service";
import {EmailFacadeService} from "../../email/email-facade.service";
import {errorApiService} from "../../utils/utils";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginFacadeService {
  loginApiService: LoginApiService = inject(LoginApiService);
  authFacadeService: AuthFacadeService = inject(AuthFacadeService);
  emailFacadeService: EmailFacadeService = inject(EmailFacadeService);

  /* ***************************************************
  * Inscriptions
  * ****************************************************/

  verifyEmail(email: string): Observable<boolean> {
    return this.loginApiService.verifyEmail(email);
  }

  verifyPseudo(pseudo: string): Observable<boolean> {
    return this.loginApiService.verifyPseudo(pseudo);
  }

  verifyEqualityPassword(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  }

  /* ***************************************************
  * Réinitialiser le mot de passe
  * ****************************************************/

  sendCodeToResetPassword(email: string): Observable<LoginResult> {
    return this.loginApiService.verifyEmail(email).pipe(
      switchMap((isEmailUser: boolean) => {
        if (!isEmailUser) {
          return throwError(() => new Error('Email non enregistré dans le système.'));
        }
        return this.loginApiService.saveCodeToResetPassword(email);
      }),
      switchMap((isCodeSaved: boolean) => {
        if (!isCodeSaved) {
          return throwError(() => new Error('Erreur lors de la sauvegarde du code.'));
        }
        return this.emailFacadeService.sendCodeToResetPassword(email);
      }),
      catchError((error: HttpErrorResponse): Observable<never> => {
        return errorApiService(error, "sendCodeToResetPassword")
      })
    );
  }

  checkCodeToResetPassword(code: number): Observable<LoginResult> {
    return this.loginApiService.checkCodeToResetPassword(code);
  }

  resetPasswordUser(password: string): Observable<LoginResult> {
    return this.loginApiService.resetPasswordUser(password);
  }

  /* ***************************************************
  * S'inscrire et se connecter
  * ****************************************************/

  // todo: remplacer le retour par une validation par mail de l'adresse mail renseigné avant de pouvoir se connecter ?
  signUp(userSignUp: UserSignUp): Observable<LoginResult> {
    return this.loginApiService.signUp(userSignUp).pipe(
      tap((isSignUp: LoginResult) => {
        if (isSignUp.type === "success" && isSignUp.token) {
          const isTokenSaved = this.authFacadeService.saveToken(isSignUp.token);
          if (!isTokenSaved) {
            throw new Error("Erreur lors de l'enregistrement du token.");
          }
        }
      }),
      catchError((error) => {
        return throwError(() => new Error(`Erreur lors de l'inscription ou de l'enregistrement du token: ${error.message}`));
      })
    );
  }

  logIn(userLogIn: UserLogIn): Observable<LoginResult> {
    return this.loginApiService.logIn(userLogIn).pipe(
      tap((isLogIn: LoginResult) => {
        if (isLogIn.type === "success" && isLogIn.token) {
          const isTokenSaved = this.authFacadeService.saveToken(isLogIn.token);
          if (!isTokenSaved) {
            throw new Error("Erreur lors de l'enregistrement du token.");
          }
        }
      }),
      catchError((error) => {
        return throwError(() => new Error(`Erreur lors du login ou de l'enregistrement du token: ${error.message}`));
      })
    );
  }

}

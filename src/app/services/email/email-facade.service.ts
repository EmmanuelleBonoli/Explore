import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {LoginResult} from "../../models/login/login-result.type";
import {EmailApiService} from "./email-api.service";

@Injectable({
  providedIn: 'root'
})
export class EmailFacadeService {
  emailApiService: EmailApiService = inject(EmailApiService);

  sendCodeToResetPassword(email: string): Observable<LoginResult> {
    return this.emailApiService.sendCodeToResetPassword(email)
  }
}

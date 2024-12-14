import {Component, inject} from '@angular/core';
import {Button} from "primeng/button";
import {InputOtpModule} from 'primeng/inputotp';
import {InputTextComponent} from "../../shared/input-text/input-text.component";
import {InputValueControls} from "../../../models/shared/input-value-controls";
import {ConnectionUserClass} from "../../../models/login/connection-user.class";
import {FormsModule} from "@angular/forms";
import {showToast, checkFormValidity} from "../../../services/utils/utils";
import {ToastModule} from 'primeng/toast';
import {SubscriptionNewUser} from "../../../models/login/subscription-new-user.class";
import {Router} from "@angular/router";
import {LoginFacadeService} from "../../../services/user/login/login-facade.service";
import {LoginResult} from "../../../models/login/login-result.type";
import {HttpErrorResponse} from "@angular/common/http";
import {UserRoutes} from "../../../routes/user-routes";

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [
    Button,
    InputTextComponent,
    InputOtpModule,
    FormsModule,
    ToastModule
  ],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  router: Router = inject(Router);
  loginFacadeService: LoginFacadeService = inject(LoginFacadeService);
  // statusResetPassword: string = "start";
  email: InputValueControls = new ConnectionUserClass().email;
  code!: number
  passwords: InputValueControls[] = new SubscriptionNewUser().fieldsResetPassword;

  statusResetPassword = {
    isStart: true,
    isEmailSend: false,
    isCodeSend: false,
    isPasswordChanged: false
  }

  onSubmitEmail(): void {
    if (!this.email.isValid) {
      return;
    }

    this.loginFacadeService.sendCodeToResetPassword(this.email.value).subscribe({
      next: (result: LoginResult): void => {
        showToast("", `${result.message}`, `${result.type}`)
        if (result.type === "success") {
          this.resetStatus();
          this.statusResetPassword.isEmailSend = true
        }
      },
      error: (err: HttpErrorResponse): void => {
        console.error("Erreur réseau :", err);
        showToast("Erreur Réseau", "Veuillez vérifier votre connexion et réessayer.", "error");
      }
    });
  }

  onResendCode() {
    this.onSubmitEmail();
  }

  onSubmitCode(): void {
    if (/^\d{5}$/.test(String(this.code))) {
      this.loginFacadeService.checkCodeToResetPassword(this.code).subscribe({
        next: (result: LoginResult): void => {
          if (result.message) {
            showToast("", `${result.message}`, `${result.type}`)
          }

          if (result.type === "success") {
            this.resetStatus();
            this.statusResetPassword.isCodeSend = true;
          }
        },
        error: (err: HttpErrorResponse): void => {
          console.error("Erreur réseau :", err);
          showToast("Erreur Réseau", "Veuillez vérifier votre connexion et réessayer.", "error");
        }
      });
    }
  }

  checkFormValidity(): boolean {
    return checkFormValidity(this.passwords);
  }

  onSubmitNewPassword(): void {
    this.loginFacadeService.resetPasswordUser(this.passwords[0].value).subscribe({
      next: (result: LoginResult) => {
        showToast("", `${result.message}`, `${result.type}`)
        if (result.type === "success") {
          this.resetStatus();
          this.statusResetPassword.isPasswordChanged = true;
          setTimeout(() => this.router.navigate([UserRoutes.Login]), 800)
        }
      },
      error: (err: HttpErrorResponse): void => {
        console.error("Erreur réseau :", err);
        showToast("Erreur Réseau", "Veuillez vérifier votre connexion et réessayer.", "error");
      }
    })
  }

  private resetStatus(): void {
    this.statusResetPassword = {
      isStart: false,
      isEmailSend: false,
      isCodeSend: false,
      isPasswordChanged: false
    };
  }
}

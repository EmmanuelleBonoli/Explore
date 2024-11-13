import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {InputOtpModule} from 'primeng/inputotp';
import {InputTextComponent} from "../../shared/input-text/input-text.component";
import {InputValueControls} from "../../../models/shared/input-value-controls";
import {EmailUserClass} from "../../../models/login/email-user.class";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [
    Button,
    InputTextComponent,
    InputOtpModule,
    FormsModule
  ],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  statusResetPassword: string = "start";
  email: InputValueControls = new EmailUserClass().email;
  code: any

  async onSubmitEmail(): Promise<void> {
    if (!this.email.isValid) {
      return;
    } else {
      this.statusResetPassword = "emailSend";
      // TODO: ajouter l'envoi et la gestion backend de mail pour réinitialiser le password
      console.log('email send', this.email);
    }
  }

  async onSubmitCode(): Promise<void> {
    console.log("this.code", this.code)
    // TODO: valider le code envoyé avec le back end,
    // TODO: si code valide passer au changement de mot de passe,
    // TODO: sinon message d'erreur à l'utilisateur
  }
}

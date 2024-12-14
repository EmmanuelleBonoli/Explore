import {Component, ViewChild, inject} from '@angular/core';
import {Router} from '@angular/router';
import {Button} from "primeng/button";
import {FormsModule, NgForm} from "@angular/forms";
import {InputTextComponent} from "../../shared/input-text/input-text.component";
import {ConnectionUserClass} from "../../../models/login/connection-user.class";
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from "primeng/inputtext";
import {checkFormValidity, showToast} from "../../../services/utils/utils";
import {InputValueControls} from "../../../models/shared/input-value-controls";
import {LoginFacadeService} from "../../../services/user/login/login-facade.service";
import {LoginResult} from "../../../models/login/login-result.type";
import {UserRoutes} from "../../../routes/user-routes";

@Component({
  selector: 'app-form-sign-in',
  standalone: true,
  imports: [
    Button,
    FormsModule,
    InputTextComponent,
    PasswordModule,
    InputTextModule
  ],
  templateUrl: './form-sign-in.component.html',
  styleUrl: './form-sign-in.component.scss'
})
export class FormSignInComponent {
  @ViewChild('signInForm') signInForm!: NgForm;
  router: Router = inject(Router);
  loginFacadeService: LoginFacadeService = inject(LoginFacadeService);

  newLogin: InputValueControls[] = new ConnectionUserClass().fieldsForm;

  checkFormValidity(): boolean {
    return checkFormValidity(this.newLogin);
  }

  onSubmit(): void {
    console.log("signInForm", this.signInForm);
    const formIsValid = this.checkFormValidity();
    if (!formIsValid) {
      return;
    } else {
      const userLogInValue = {email: this.newLogin[0].value, password: this.newLogin[1].value};

      this.loginFacadeService.logIn(userLogInValue).subscribe({
        next: (isLogIn: LoginResult): void => {
          if (isLogIn.type === "success") {
            this.router.navigate([UserRoutes.Home])
          } else {
            showToast("", `${isLogIn.message}`, `${isLogIn.type}`)
          }
        },
        error: (err) => {
          console.error("Erreur réseau :", err);
          showToast("Erreur Réseau", "Veuillez vérifier votre connexion et réessayer.", "error");
        }
      });
    }
  }
}

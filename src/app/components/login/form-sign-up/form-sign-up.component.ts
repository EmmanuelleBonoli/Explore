import {Component, ViewChild, inject} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {InputTextComponent} from '../../shared/input-text/input-text.component';
import {FormsModule} from '@angular/forms';
import {SubscriptionNewUser} from '../../../models/login/subscription-new-user.class';
import {ButtonModule} from 'primeng/button';
import {InputValueControls} from "../../../models/shared/input-value-controls";
import {UtilsService} from "../../../services/utils/utils.service";
import {UserSignUp} from "../../../models/login/user-sign-up.type";
import {LoginFacadeService} from "../../../services/user/login/login-facade.service";
import {LoginResult} from "../../../models/login/login-result.type";

@Component({
  selector: 'app-form-sign-up',
  standalone: true,
  imports: [
    InputTextComponent, FormsModule, ButtonModule
  ],
  templateUrl: './form-sign-up.component.html',
  styleUrl: './form-sign-up.component.scss'
})
export class FormSignUpComponent {
  @ViewChild('signupForm') signupForm!: NgForm;
  router: Router = inject(Router);
  loginFacadeService: LoginFacadeService = inject(LoginFacadeService);
  utilsService: UtilsService = inject(UtilsService);
  newInscription: InputValueControls[] = new SubscriptionNewUser().fieldsForm;

  checkFormValidity(): boolean {
    return this.utilsService.checkFormValidity(this.newInscription);
  }

  onSubmit(): void {
    console.log("signInForm", this.signupForm);
    console.log('new user to save in database', this.newInscription);
    const formIsValid = this.checkFormValidity();
    if (!formIsValid) {
      return;
    } else {
      const userSignUp: UserSignUp = {
        pseudo: this.newInscription[0].value,
        email: this.newInscription[1].value,
        password: this.newInscription[2].value
      };

      this.loginFacadeService.signUp(userSignUp).subscribe({
        next: (isSignUp: LoginResult): void => {
          this.utilsService.showToast("", `${isSignUp.message}`, `${isSignUp.type}`)
          if (isSignUp.type === "success") {
            this.router.navigate([''])
          }
        },
        error: (err) => {
          console.error("Erreur réseau :", err);
          this.utilsService.showToast("Erreur Réseau", "Veuillez vérifier votre connexion et réessayer.", "error");
        }
      });
    }
  }
}

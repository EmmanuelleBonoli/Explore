import { Component } from '@angular/core';
import { InputTextComponent } from '../../../shared/input-text/input-text.component';
import { InputValueStatus } from '../../../models/input-value-status';
import { InputErrorComponent } from '../../../shared/input-error/input-error.component';
import { FormsModule } from '@angular/forms';
import { SubscriptionNewUser } from '../../../models/subscription-new-user';

@Component({
  selector: 'app-form-sign-in',
  standalone: true,
  imports: [InputTextComponent, InputErrorComponent, FormsModule],
  templateUrl: './form-sign-in.component.html',
  styleUrl: './form-sign-in.component.scss',
})
export class FormSignInComponent {
  labelEmail: string = 'Email';
  placeholderEmail: string = 'exemple@gmail.com';

  labelPseudo: string = 'Pseudo';
  placeholderPseudo: string = 'exemple : Major Manu';

  labelPassword: string = 'Password';
  placeholderPassword: string = '';
  helperTextPassword: string =
    'Le mot de password doit contenir au moins 8 caractères, un caractère spécial et une majuscule';

  labelConfirmPassword: string = 'Confirmation Password';
  placeholderConfirmPassword: string = '';

  newInscription!: SubscriptionNewUser;

  changeInForm(inputChange: InputValueStatus): void {
    switch (inputChange.label) {
      case 'Pseudo':
        this.newInscription.pseudo = inputChange;
        break;
      case 'Email':
        this.newInscription.email = inputChange;
        break;
      case 'Password':
        this.newInscription.password = inputChange;
        break;
      case 'Confirmation Password':
        this.newInscription.confirmPassword = inputChange;
        break;
    }
    console.log('inputChange', inputChange);
  }
  onSubmit(): void {
    console.log('formulaire validé');
  }
}

import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InputTextComponent } from '../../../shared/input-text/input-text.component';
import { InputValueStatus } from '../../../models/input-value-status';
import { InputErrorComponent } from '../../../shared/input-error/input-error.component';
import { FormsModule } from '@angular/forms';
import { SubscriptionNewUser } from '../../../models/subscription-new-user.class';

@Component({
  selector: 'app-form-sign-in',
  standalone: true,
  imports: [InputTextComponent, InputErrorComponent, FormsModule],
  templateUrl: './form-sign-in.component.html',
  styleUrl: './form-sign-in.component.scss',
})
export class FormSignInComponent {
  @ViewChild('contactForm') contactForm!: NgForm;

  newInscription = new SubscriptionNewUser();

  // changeInForm(inputChange: InputValueStatus): void {
  //   console.log('inputChange', inputChange);
  //   switch (inputChange.label) {
  //     case 'Pseudo':
  //       this.newInscription.pseudo.value = inputChange.value;
  //       this.newInscription.pseudo.isValid = inputChange.isValid;
  //       break;
  //     case 'Email':
  //       this.newInscription.email.value = inputChange.value;
  //       this.newInscription.email.isValid = inputChange.isValid;
  //       break;
  //     case 'Mot de passe':
  //       console.log('inputChange password: ' + inputChange.value);
  //       this.newInscription.password.value = inputChange.value;
  //       this.newInscription.password.isValid = inputChange.isValid;
  //       break;
  //     case 'Confirmation du mot de passe':
  //       this.newInscription.confirmPassword.value = inputChange.value;
  //       this.newInscription.confirmPassword.isValid = inputChange.isValid;
  //       break;
  //   }
  //   console.log('newInscription', this.newInscription);
  //   console.log('contactForm', this.contactForm);
  // }
  onSubmit(): void {
    console.log('formulaire validé');
    console.log('newInscription', this.newInscription);
  }
}

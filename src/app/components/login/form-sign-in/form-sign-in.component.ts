import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InputTextComponent } from '../../../shared/input-text/input-text.component';
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

  checkFormValidity(): boolean {
    return (
      this.newInscription.email.isValid &&
      this.newInscription.pseudo.isValid &&
      this.newInscription.password.isValid &&
      this.newInscription.confirmPassword.isValid
    );
  }

  onSubmit(): void {
    const formIsValid = this.checkFormValidity();
    if (!formIsValid) {
      return;
    }

    console.log('form valid');
    console.log('new user to save in database', this.newInscription);
  }
}

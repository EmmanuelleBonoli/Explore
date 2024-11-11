import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InputTextComponent } from '../../../shared/input-text/input-text.component';
import { FormsModule } from '@angular/forms';
import { SubscriptionNewUser } from '../../../models/login/subscription-new-user.class';
import { ButtonModule } from 'primeng/button';


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
  @ViewChild('contactForm') signupForm!: NgForm;

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

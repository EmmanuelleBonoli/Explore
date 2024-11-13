import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {InputTextComponent} from '../../shared/input-text/input-text.component';
import {FormsModule} from '@angular/forms';
import {SubscriptionNewUser} from '../../../models/login/subscription-new-user.class';
import {ButtonModule} from 'primeng/button';
import {InputValueControls} from "../../../models/shared/input-value-controls";


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

  newInscription: InputValueControls[] = new SubscriptionNewUser().fieldsForm;

  // newInscription: InputValueControls[] = []
  //
  // ngOnInit() {
  //   this.newInscription = new SubscriptionNewUser().fieldsForm;
  // }

  checkFormValidity(): boolean {
    return this.newInscription.every(control => control.isValid);
  }

  async onSubmit(): Promise<void> {
    console.log("signInForm", this.signupForm);
    const formIsValid = this.checkFormValidity();
    if (!formIsValid) {
      return;
    }
    console.log('new user to save in database', this.newInscription);
  }
}

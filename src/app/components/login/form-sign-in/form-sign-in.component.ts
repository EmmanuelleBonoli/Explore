import {Component, ViewChild} from '@angular/core';
import {Button} from "primeng/button";
import {FormsModule, NgForm} from "@angular/forms";
import {InputTextComponent} from "../../shared/input-text/input-text.component";
import {ConnectionUserClass} from "../../../models/login/connection-user.class";
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from "primeng/inputtext";
import {InputValueControls} from "../../../models/shared/input-value-controls";

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

  newLogin: InputValueControls[] = new ConnectionUserClass().fieldsForm;

  // newLogin: InputValueControls[] = []
  //
  // ngOnInit() {
  //   const connectionUser = new ConnectionUserClass();
  //   this.newLogin = connectionUser.fieldsForm;
  // }

  checkFormValidity(): boolean {
    return this.newLogin.every(control => control.isValid);
  }

  onSubmit(): void {
    console.log("signInForm", this.signInForm);
    const formIsValid = this.checkFormValidity();
    if (!formIsValid) {
      return;
    } else {
      console.log('user is connected', this.newLogin);
    }
  }
}

import {Component, ViewChild} from '@angular/core';
import {Button} from "primeng/button";
import {FormsModule, NgForm} from "@angular/forms";
import {InputTextComponent} from "../../../shared/input-text/input-text.component";
import {ConnectionUserClass} from "../../../models/login/connection-user.class";
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from "primeng/inputtext";

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

    newLogin: ConnectionUserClass = new ConnectionUserClass();

    checkFormValidity(): boolean {
        return (
            this.newLogin.email.isValid &&
            this.newLogin.password.isValid
        );
    }

    onSubmit(): void {
        const formIsValid = this.checkFormValidity();
        if (!formIsValid) {
            return;
        } else {

        }
        console.log('form valid');
        console.log('user is connected', this.newLogin);
    }

}

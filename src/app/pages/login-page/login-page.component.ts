import {Component} from '@angular/core';
import {FormSignInComponent} from "../../components/login/form-sign-in/form-sign-in.component";
import {FormSignUpComponent} from "../../components/login/form-sign-up/form-sign-up.component";
import {TabsModule} from "primeng/tabs";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormSignInComponent,
    FormSignUpComponent,
    TabsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}

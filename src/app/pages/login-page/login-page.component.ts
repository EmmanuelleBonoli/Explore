import {Component} from '@angular/core';
import {FormSignInComponent} from "../../components/login/form-sign-in/form-sign-in.component";
import {FormSignUpComponent} from "../../components/login/form-sign-up/form-sign-up.component";
import {TabViewModule} from "primeng/tabview";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormSignInComponent,
    FormSignUpComponent,
    TabViewModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}

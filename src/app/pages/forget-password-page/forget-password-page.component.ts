import {Component} from '@angular/core';
import {ForgetPasswordComponent} from "../../components/login/forget-password/forget-password.component";

@Component({
  selector: 'app-forget-password-page',
  standalone: true,
  imports: [ForgetPasswordComponent],
  templateUrl: './forget-password-page.component.html',
  styleUrl: './forget-password-page.component.scss'
})
export class ForgetPasswordPageComponent {

}

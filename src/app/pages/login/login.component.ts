import { Component } from '@angular/core';
import { FormSignInComponent } from '../../components/login/form-sign-in/form-sign-in.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormSignInComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}

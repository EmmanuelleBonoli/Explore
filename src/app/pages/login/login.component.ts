import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { FormSignInComponent } from '../../components/login/form-sign-in/form-sign-in.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormSignInComponent, TabViewModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}

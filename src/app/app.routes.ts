import {Routes} from '@angular/router';
import {DisplayActivitiesPageComponent} from './pages/display-activities-page/display-activities-page.component';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ForgetPasswordPageComponent} from "./pages/forget-password-page/forget-password-page.component";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

export enum AppRoutes {
  Home = '',
  Login = 'login',
  ForgetPassword = 'forgetPassword'
}

export const routes: Routes = [
  {
    path: AppRoutes.Home,
    component: MainLayoutComponent,
    children: [
      {
        path: AppRoutes.Home,
        component: DisplayActivitiesPageComponent
        // canActivate: [authGuard],
      },
      {
        path: AppRoutes.Login,
        component: LoginPageComponent,
      },
      {
        path: AppRoutes.ForgetPassword,
        component: ForgetPasswordPageComponent,
      }
    ]
  },

];

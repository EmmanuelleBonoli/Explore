import {Routes} from '@angular/router';
import {DisplayActivitiesPageComponent} from './pages/display-activities-page/display-activities-page.component';
import {LoginPageComponent} from "./pages/login-page/login-page.component";

export const routes: Routes = [

  {
    path: '',
    component: DisplayActivitiesPageComponent,
    // canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];
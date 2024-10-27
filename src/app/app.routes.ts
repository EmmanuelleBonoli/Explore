import { Routes } from '@angular/router';
import { DisplayActivitiesPageComponent } from './pages/display-activities-page/display-activities-page.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'activities',
    component: DisplayActivitiesPageComponent,
  },
];

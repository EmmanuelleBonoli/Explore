import {Routes} from '@angular/router';
import {DisplayActivitiesPageComponent} from './pages/display-activities-page/display-activities-page.component';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ForgetPasswordPageComponent} from "./pages/forget-password-page/forget-password-page.component";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {UserRoutes} from "./routes/user-routes";
import {DetailsActivityPageComponent} from "./pages/details-activity-page/details-activity-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {CreateActivityPageComponent} from "./pages/create-activity-page/create-activity-page.component";

export const routes: Routes = [
  {
    path: UserRoutes.Home,
    component: MainLayoutComponent,
    children: [
      {
        path: UserRoutes.Home,
        component: DisplayActivitiesPageComponent
        // canActivate: [authGuard],
      },
      {
        path: UserRoutes.Activity,
        component: DetailsActivityPageComponent
      },
      {
        path: UserRoutes.Login,
        component: LoginPageComponent,
      },
      {
        path: UserRoutes.ForgetPassword,
        component: ForgetPasswordPageComponent,
      },
      {
        path: UserRoutes.Profile,
        component: ProfilePageComponent,
      },
      {
        path: UserRoutes.CreateActivity,
        component: CreateActivityPageComponent,
      }
    ]
  },

];

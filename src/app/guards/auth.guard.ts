import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthFacadeService} from "../services/user/auth/auth-facade.service";
import {AppRoutes} from "../app.routes";

export const authGuard: CanActivateFn = () => {
  const authService: AuthFacadeService = inject(AuthFacadeService);
  const router: Router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate([AppRoutes.Login]);
    return false;
  }
};

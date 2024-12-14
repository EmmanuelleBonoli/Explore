import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthFacadeService} from "../services/user/auth/auth-facade.service";
import {UserRoutes} from "../routes/user-routes";

export const authGuard: CanActivateFn = () => {
  const authService: AuthFacadeService = inject(AuthFacadeService);
  const router: Router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate([UserRoutes.Login]);
    return false;
  }
};

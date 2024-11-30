import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthFacadeService} from "../services/user/auth/auth-facade.service";

export const authGuard: CanActivateFn = () => {
  const authService: AuthFacadeService = inject(AuthFacadeService);
  const router: Router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

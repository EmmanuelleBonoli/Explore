import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  verifyEmail = async function (): Promise<boolean> {
    // TODO: remplacer par une vraie requête backend
    const isEmailNotUsed = await new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
    return isEmailNotUsed;
  }

  verifyPseudo = async function (): Promise<boolean> {
    // TODO: remplacer par une vraie requête backend
    const isPseudoNotUsed = await new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
    return isPseudoNotUsed;
  }
}

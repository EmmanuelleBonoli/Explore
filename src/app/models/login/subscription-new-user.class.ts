import {inject} from "@angular/core";
import {Observable} from "rxjs";
import {InputValueControls} from '../shared/input-value-controls';
import {LoginFacadeService} from "../../services/user/login/login-facade.service";

export class SubscriptionNewUser {
  loginFacadeService: LoginFacadeService = inject(LoginFacadeService);

  pseudo: InputValueControls;
  email: InputValueControls;
  password: InputValueControls;
  confirmPassword: InputValueControls;
  fieldsForm: InputValueControls[];
  fieldsResetPassword: InputValueControls[];

  constructor(
    email: InputValueControls = {
      label: 'Email',
      placeholder: 'exemple@gmail.com',
      type: 'email',
      value: '',
      isValid: false,
      helperText: '',
      controls: {
        required: true,
        minLength: 5,
        maxLength: null,
        pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
        check: (): Observable<boolean> => this.loginFacadeService.verifyEmail(this.email.value),
        isCheckReturn: false,
        checkHelperText: 'Cet email est déjà utilisé.'
      },
    },
    pseudo: InputValueControls = {
      label: 'Pseudo',
      placeholder: 'exemple : MajorManu',
      type: 'text',
      value: '',
      isValid: false,
      helperText: '',
      controls: {
        required: true,
        minLength: 4,
        maxLength: 12,
        check: (): Observable<boolean> => this.loginFacadeService.verifyPseudo(this.pseudo.value),
        isCheckReturn: false,
        checkHelperText: 'Ce pseudo est déjà utilisé.'
      },
    },
    password: InputValueControls = {
      label: 'Mot de passe',
      placeholder: '',
      type: 'password',
      value: '',
      isValid: false,
      helperText:
        'Le mot de passe doit contenir au moins 8 caractères, un caractère spécial et une majuscule',
      controls: {
        required: true,
        minLength: 8,
        maxLength: 16,
        pattern: `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.* ).{8,16}$`,
      },
    },
    confirmPassword: InputValueControls = {
      label: 'Confirmation du mot de passe',
      placeholder: '',
      value: '',
      type: 'password',
      isValid: false,
      helperText: '',
      controls: {
        required: true,
        minLength: 8,
        maxLength: 16,
        pattern: `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.* ).{8,16}$`,
        check: (): boolean => this.verifyEqualityPassword(),
        isCheckReturn: false,
        checkHelperText: "Les 2 mots de passe doivent être égaux."
      },
    }
  ) {
    this.pseudo = pseudo;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.fieldsForm = [this.pseudo, this.email, this.password, this.confirmPassword];
    this.fieldsResetPassword = [this.password, this.confirmPassword];
  }

  verifyEqualityPassword(): boolean {
    const password = this.password.value;
    const confirmPassword = this.confirmPassword.value;
    return this.loginFacadeService.verifyEqualityPassword(password, confirmPassword)

  }

}

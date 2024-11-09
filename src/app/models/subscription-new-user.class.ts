import { InputValueControls } from './input-value-controls';

export class SubscriptionNewUser {
  pseudo: InputValueControls;
  email: InputValueControls;
  password: InputValueControls;
  confirmPassword: InputValueControls;

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
        check: this.verifyEmail(),
      },
    },
    pseudo: InputValueControls = {
      label: 'Pseudo',
      placeholder: 'exemple : MajorManu',
      value: '',
      isValid: false,
      helperText: '',
      controls: {
        required: true,
        minLength: 4,
        maxLength: 12,
        check: this.verifyPseudo(),
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
        check: this.verifyEqualityPassword(),
      },
    }
  ) {
    this.pseudo = pseudo;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }

  verifyEmail(): () => Promise<boolean> {
    return async () => {
      //TODO: changer pour appel au backend
      const isEmailUsed = await new Promise<boolean>((resolve) => {
        setTimeout(() => {
          resolve(false);
        }, 1000);
      });
      return isEmailUsed; // Retourne true si l'email est déjà utilisé, sinon false
    };
  }

  verifyPseudo(): () => Promise<boolean> {
    return async () => {
      //TODO: changer pour appel au backend
      const isPseudoUsed = await new Promise<boolean>((resolve) => {
        setTimeout(() => {
          resolve(false);
        }, 1000);
      });

      return isPseudoUsed; // Retourne true si le pseudo est déjà utilisé, sinon false
    };
  }

  verifyEqualityPassword(): () => boolean {
    return () => {
      const password = this.password.value;
      const confirmPassword = this.confirmPassword.value;
      return password === confirmPassword;
    };
  }
}

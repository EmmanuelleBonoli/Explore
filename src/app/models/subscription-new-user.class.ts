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
      value: '',
      isValid: false,
      helperText: '',
      controls: {
        required: true,
        minLength: 5,
        maxLength: null,
        custom: (): void =>
          // TODO: MAKE function to verifyEmail
          console.log('make function to verify if email is already used'),
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
        custom: (): void =>
          // TODO: MAKE function to verifyPseudo
          console.log('make function to verify if pseudo is already used'),
      },
    },
    password: InputValueControls = {
      label: 'Mot de passe',
      placeholder: '',
      value: '',
      isValid: false,
      helperText:
        'Le mot de passe doit contenir au moins 8 caractères, un caractère spécial et une majuscule',
      controls: {
        required: true,
        minLength: 8,
        maxLength: null,
        custom: () => {
          console.log(
            'regex for control password : if true helpertext greeen else red'
          );
        },
      },
    },
    confirmPassword: InputValueControls = {
      label: 'Confirmation du mot de passe',
      placeholder: '',
      value: '',
      isValid: false,
      helperText: '',
      controls: {
        required: true,
        minLength: 8,
        maxLength: null,
        //TODO: function to verify egality of passwords.
        custom: () => {
          console.log('verify egality of passwords');
          console.log(
            'if false : return : Les 2 mots de passe doivent être égaux.'
          );
        },
      },
    }
  ) {
    this.pseudo = pseudo;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}

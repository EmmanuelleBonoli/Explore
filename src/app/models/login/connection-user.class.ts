import {InputValueControls} from '../shared/input-value-controls';

export class ConnectionUserClass {
  email: InputValueControls;
  password: InputValueControls;
  fieldsForm: InputValueControls[];

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
      },
    },
    password: InputValueControls = {
      label: 'Mot de passe',
      placeholder: '',
      type: 'password',
      value: '',
      isValid: false,
      helperText: '',
      controls: {
        required: true,
        minLength: 8,
        maxLength: 16,
        pattern: `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.* ).{8,16}$`,
      },
    },
  ) {
    this.email = email;
    this.password = password;
    this.fieldsForm = [this.email, this.password]
  }
}

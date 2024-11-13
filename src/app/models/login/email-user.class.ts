import {InputValueControls} from '../shared/input-value-controls';

export class EmailUserClass {
  email: InputValueControls;

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
  ) {
    this.email = email;
  }
}

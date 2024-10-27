import { InputValueStatus } from './input-value-status';

export interface SubscriptionNewUser {
  pseudo: InputValueStatus;
  email: InputValueStatus;
  password: InputValueStatus;
  confirmPassword: InputValueStatus;
}

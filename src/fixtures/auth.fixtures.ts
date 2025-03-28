import { LoginCredentials } from '../types/auth.types';

export const TEST_CREDENTIALS = {
  valid: {
    standard: {
      username: 'standard_user',
      password: 'secret_sauce'
    } as LoginCredentials
  },
  invalid: {
    nonexistent: {
      username: 'invalid_user',
      password: 'wrong_password'
    } as LoginCredentials
  }
};
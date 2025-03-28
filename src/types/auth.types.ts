/**
 * Interface for login credentials
 */
export interface LoginCredentials {
  username: string;
  password: string;
}

/**
 * Interface for login page selectors
 */
export interface LoginPageSelectors {
  readonly username: string;
  readonly password: string;
  readonly loginButton: string;
  readonly errorMessage: string;
}

/**
 * Interface for login page assertions
 */
export interface LoginPageAssertions {
  readonly inventoryContainer: string;
  readonly errorMessageText: string;
}
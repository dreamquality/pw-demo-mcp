import { Page } from '@playwright/test';
import { LoginCredentials, LoginPageSelectors, LoginPageAssertions } from '../types/auth.types';

export class LoginPage {
  private readonly selectors: LoginPageSelectors = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]'
  };

  private readonly assertions: LoginPageAssertions = {
    inventoryContainer: '[data-test="inventory-container"]',
    errorMessageText: 'Epic sadface: Username and password do not match'
  };

  constructor(private readonly page: Page) {}

  /**
   * Navigate to login page
   */
  async navigate(): Promise<void> {
    await this.page.goto('/');
  }

  /**
   * Login with provided credentials
   * @param credentials - Login credentials
   */
  async login(credentials: LoginCredentials): Promise<void> {
    await this.page.fill(this.selectors.username, credentials.username);
    await this.page.fill(this.selectors.password, credentials.password);
    await this.page.click(this.selectors.loginButton);
  }

  /**
   * Get error message text
   * @returns Promise resolving to error message text or null
   */
  async getErrorMessage(): Promise<string | null> {
    return this.page.locator(this.selectors.errorMessage).textContent();
  }

  /**
   * Check if inventory container is visible (successful login)
   * @returns Promise resolving to boolean
   */
  async isInventoryVisible(): Promise<boolean> {
    return this.page.locator(this.assertions.inventoryContainer).isVisible();
  }

  /**
   * Get selectors for assertions
   */
  getSelectors(): LoginPageSelectors {
    return this.selectors;
  }

  /**
   * Get assertion texts
   */
  getAssertions(): LoginPageAssertions {
    return this.assertions;
  }
}
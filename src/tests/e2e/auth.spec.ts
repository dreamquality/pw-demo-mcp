import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { TEST_CREDENTIALS } from '../../fixtures/auth.fixtures';

test.describe('Authentication', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test.describe('Login Functionality', () => {
    test('should login successfully with valid credentials', async ({ page }) => {
      // When: User logs in with valid credentials
      await loginPage.login(TEST_CREDENTIALS.valid.standard);

      // Then: User should be redirected to inventory page
      await expect(page).toHaveURL(/.*inventory.html/);
      await expect(await loginPage.isInventoryVisible()).toBeTruthy();
    });

    test('should display error for invalid credentials', async () => {
      // When: User attempts to login with invalid credentials
      await loginPage.login(TEST_CREDENTIALS.invalid.nonexistent);

      // Then: Error message should be displayed
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain(loginPage.getAssertions().errorMessageText);
    });
  });
});
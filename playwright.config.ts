import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';

/**
 * Configuration for Playwright Test Runner
 * @see https://playwright.dev/docs/test-configuration
 */
const config: PlaywrightTestConfig = {
  /* Directory containing the test files */
  testDir: './src/tests',

  /* Test match pattern */
  testMatch: ['**/*.spec.ts'],

  /* Run tests in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use */
  reporter: [
    ['html'],
    ['list']
  ],

  /* Shared settings for all the projects below */
  use: {
    /* Base URL to use in navigation */
    baseURL: 'https://www.saucedemo.com',

    /* Collect trace when retrying the failed test */
    trace: 'on-first-retry',

    /* Capture screenshot only when test fails */
    screenshot: 'only-on-failure',

    /* Viewport size */
    viewport: { width: 1280, height: 720 },

    /* Automatically wait for elements */
    actionTimeout: 10000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};

export default config;
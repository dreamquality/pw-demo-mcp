# SauceDemo Automated Tests

This project contains automated tests for the SauceDemo website using Playwright.

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

Run all tests in headless mode:
```bash
npm test
```

Run tests with browser visible:
```bash
npm run test:headed
```

Run tests with Playwright UI mode:
```bash
npm run test:ui
```

View the last test report:
```bash
npm run report
```

## Project Structure

- `src/pages/` - Page Object Models
- `src/tests/` - Test files
  - `e2e/` - End-to-end tests
  - `integration/` - Integration tests
  - `api/` - API tests
- `src/fixtures/` - Test data
- `src/types/` - TypeScript interfaces
- `src/utils/` - Utility functions
- `playwright.config.ts` - Playwright configuration
- `package.json` - Project dependencies and scripts

## Features

- Page Object Model implementation
- Cross-browser testing (Chrome, Firefox, Safari)
- HTML report generation
- Parallel test execution
- Automatic retries in CI
- Screenshot on test failure
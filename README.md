# Systima

This project uses Playwright for web application automation testing [Systima](https://app.staging.systima.no/) .

## Installation

1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests by Tag

```bash
npx playwright test --grep @tagName
```

### Run a Specific Test

```bash
npx playwright test tests/example.spec.ts
```

## Project Structure

```
├── tests            # Folder containing test files
├── helpers            # Helper functions and utilities
├── fixtures         # Test fixtures
├── UI               # UI structure
│   ├── pages        # Page objects
│   └── components   # Reusable UI components
├── playwright.config.ts # Playwright configuration file
├── package.json
├── tsconfig.json    # TypeScript configuration
└── README.md
```

## Configuration
Configuration can be adjusted in the `playwright.config.ts` file. Key settings include:

- **`timeout`** — Test timeout duration
- **`use`** — Global browser settings
- **`projects`** — Parameters for running tests in different browsers

## Useful Commands

- **Run in UI Mode for Easy Navigation**
```bash
npx playwright test --ui
```

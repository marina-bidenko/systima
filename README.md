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
npm run start
```

### Run Tests by Tag

```bash
npm run start -- --grep @tagName
```

### Run a Specific Test

```bash
npm run start -- tests/example.spec.ts
```

## Project Structure

```
├── src               # Main folder containing source code
│   ├── data          # Static data, e.g., JSON files or test data
│   ├── typedefs      # TypeScript types and interfaces
│   ├── tests         # Folder containing test files
│   ├── helpers       # Helper functions and utilities
│   ├── fixtures      # Playwright fixtures for setup and teardown
│   ├── UI            # UI structure
│   │   ├── pages     # Page Object Model (POM)
│       └── components # Reusable UI components
├── playwright.config.ts # Playwright configuration file
├── package.json
├── tsconfig.json     # TypeScript configuration
└── README.md
```

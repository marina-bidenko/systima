import { defineConfig, devices } from '@playwright/test';
require("dotenv").config();


export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["html"]
  ],
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ["setup"]
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      dependencies: ["setup"]
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      dependencies: ["setup"]

    },
  ],
});

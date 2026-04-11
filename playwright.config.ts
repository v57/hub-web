import { defineConfig } from 'playwright/test';

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:4173';

export default defineConfig({
  testDir: './tests',
  testMatch: ['**/*.e2e.ts'],
  use: {
    baseURL
  }
});

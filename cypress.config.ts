import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1366,
  viewportHeight: 900,
  e2e: {
    testIsolation: false,
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

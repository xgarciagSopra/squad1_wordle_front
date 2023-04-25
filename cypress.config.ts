import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920, 
  e2e: {
    baseUrl: 'http://localhost:4200/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

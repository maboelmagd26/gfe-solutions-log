import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// One test setup for the whole repository:
// `npm test` runs every *.test.* file in ui-coding/, js-functions/ and testing/.
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
});

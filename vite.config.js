import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    reporters: ["json", "junit"],
    outputFile: {
      json: "reports/report.json",
      junit: "reports/report.xml"
    }
  }
});

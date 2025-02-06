import { defineConfig } from "astro/config";

export default defineConfig({
  output: "server", // <-- This must be set for API routes to work
});

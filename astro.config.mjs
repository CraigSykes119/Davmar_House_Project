import { defineConfig } from "astro/config";

import node from "@astrojs/node";

export default defineConfig({
  // <-- This must be set for API routes to work
  output: "server",

  adapter: node({
    mode: "standalone"
  })
});
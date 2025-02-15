import { defineConfig } from "astro/config";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export default defineConfig({
  site: "https://CraigSykes119.github.io/Davmar_House_Project",
  base: "/Davmar_House_Project/",
  output: "static",
  vite: {
    define: {
      "import.meta.env.PUBLIC_WEATHER_API_KEY": JSON.stringify(process.env.PUBLIC_WEATHER_API_KEY),
    },
  },
});

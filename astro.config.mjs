import { defineConfig } from "astro/config";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  site: "https://CraigSykes119.github.io/Davmar_House_Project",
  base: "/Davmar_House_Project/",
  output: "static",
  vite: {
    define: {
      "import.meta.env.PUBLIC_WEATHER_API_KEY": JSON.stringify(process.env.PUBLIC_WEATHER_API_KEY),
      "import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY": JSON.stringify(process.env.PUBLIC_GOOGLE_MAPS_API_KEY),
    },
  },
});

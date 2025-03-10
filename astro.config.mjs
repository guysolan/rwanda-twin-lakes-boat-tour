import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  site: "https://guysolan.github.io",
  base: "/rwanda-twin-lakes-boat-tour",
  outDir: "./dist",
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Sharp-specific options
        avif: { quality: 80 },
        webp: { quality: 80 },
        jpeg: { quality: 80, progressive: true },
        png: { quality: 80, progressive: true },
        // Cache processed images for better performance
        cacheDir: './.cache/image'
      }
    },
  },
});
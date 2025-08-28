import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

const isProd = process.env.GITHUB_PAGES === "true";

export default defineConfig({
	integrations: [tailwind()],
	output: "static",
	site: isProd ? "https://guysolan.github.io" : "http://localhost:4321",
	base: isProd ? "/rwanda-twin-lakes-boat-tour" : "/",
	outDir: "./dist",
	image: { service: passthroughImageService() },
});

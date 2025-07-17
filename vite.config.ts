import legacy from "@vitejs/plugin-legacy"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"
import svgr from "vite-plugin-svgr"
import manifest from "./manifest"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		VitePWA({
			includeAssets: [
				"*.avif",
				"*.webp",
				"*.svg",
				"*.png",
				"*.ico",
				"*.jpg",
				"*.ttf",
				"*.woff2",
				"posts/*.md"
			],
			includeManifestIcons: true,
			registerType: "autoUpdate",
			strategies: "generateSW",
			manifest,
			workbox: {
				navigateFallback: "/index.html",
				navigateFallbackDenylist: [
					/^\/download\/.*$/,
					/^\/\.well-known\/.*$/,
					/^\/sitemap\.xml$/,
					/^\/robots\.txt$/,
					/^\/manifest\.webmanifest$/,
					/^\/posts\/.*\.md$/,
					/^\/[^/]*\.(?:svg|avif|webp|png|jpg|jpeg|ico)$/i
				],
				cleanupOutdatedCaches: true,
				globPatterns: [
					"**/*.{js,css,html,ico,png,jpg,jpeg,svg,avif,webp,ttf,woff2,md}"
				]
			}
		}),
		legacy({
			targets: [ "defaults", "not IE 11" ]
		})
	],
	build: {
		chunkSizeWarningLimit: 4096
	}
})

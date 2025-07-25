import { ManifestOptions } from "vite-plugin-pwa"


const manifest: Partial<ManifestOptions> = {
	id: "tesla-stammtisch-regensburg",
	name: "Tesla Stammtisch Regensburg",
	short_name: "Tesla Stammtisch Regensburg",
	description: "Der Regensburger Tesla Stammtisch",
	categories: [ "organisation", "people", "cars" ],
	theme_color: "#272727",
	background_color: "#121212",
	dir: "ltr",
	orientation: "any",
	scope: "/",
	scope_extensions: [
		{
			origin: "tesla-stammtisch-regensburg.de"
		}
	],
	handle_links: "preferred",
	start_url: "/",
	launch_handler: {
		client_mode: "navigate-existing"
	},
	display: "standalone",
	display_override: [ "fullscreen", "minimal-ui", "window-controls-overlay" ],
	icons: [
		{
			src: "pwa-64x64.png",
			sizes: "64x64",
			type: "image/png"
		},
		{
			src: "pwa-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "pwa-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any"
		},
		{
			src: "maskable-icon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "maskable"
		}
	],
	"shortcuts": [
		{
			name: "Termine",
			url: "/termine"
		}
	],
	screenshots: []
}

export default manifest

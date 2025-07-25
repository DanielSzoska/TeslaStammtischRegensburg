import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Helmet, HelmetProvider } from "react-helmet-async"
// @ts-ignore
import { registerSW } from "virtual:pwa-register"
import Router from "./router"
import SEO from "./seo"


// Service Worker Registration
// https://vite-pwa-org.netlify.app/guide/auto-update.html
registerSW({
	immediate: true,
	onRegisteredSW: (_: string, registration: ServiceWorkerRegistration) => {
		if (registration) {
			setInterval(() => registration.update(), 60 * 60 * 1000)
		}
	}
})

const container = document.getElementById("root")!
const root = createRoot(container)

root.render(
	<StrictMode>
		<HelmetProvider>
			<Helmet
				titleTemplate="%s | Tesla Stammtisch Regensburg"
				htmlAttributes={{ lang: "de" }}
				titleAttributes={{ lang: "de" }}
			/>

			<SEO />

			<Router />
		</HelmetProvider>
	</StrictMode>
)

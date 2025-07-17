import Box from "@mui/material/Box"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Helmet } from "react-helmet"
import { BrowserRouter } from "react-router-dom"
// @ts-ignore
import { registerSW } from "virtual:pwa-register"
import { ViewFooter } from "./footer"
import { ViewHeader } from "./header"
import Router from "./router"
import SEO from "./seo"
import ThemeProvider from "./theme"

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
		<Helmet
			titleTemplate="%s | Tesla Stammtisch Regensburg"
			htmlAttributes={{ lang: "de" }}
			titleAttributes={{ lang: "de" }}
		/>

		<SEO />

		<ThemeProvider>
			<BrowserRouter>
				<Box id="header">
					<ViewHeader />
				</Box>

				<Box id="content">
					<Router />
				</Box>

				<Box id="footer">
					<ViewFooter />
				</Box>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
)

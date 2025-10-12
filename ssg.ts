import { spawn } from "child_process"
import fs from "fs"
import path from "path"
import { BrowserContext, BrowserContextOptions, chromium, devices } from "playwright"
import prettier from "prettier"
import treeKill from "tree-kill"


const OUTPUT_DIR = path.join("dist", "static")
const VITE_PREVIEW_PORT = 4173

const STATIC_ROUTES = [ "/", "/termine" ]

const BROWSER_DEVICE = devices["iPhone 16 Pro"] ?? devices["iPhone 14 Pro"]

const BROWSER_CONTEXT: BrowserContextOptions = {
	...BROWSER_DEVICE,
	locale: "de-DE",
	timezoneId: "Europe/Berlin",
	colorScheme: "light"
}

async function startServer(port: number): Promise<number> {
	console.log("Starting Vite Preview Server...")

	// start vite's preview server and use it as webserver
	const process = spawn("vite", [ "preview", "--port", port.toString() ], {
		stdio: "inherit",
		shell: true
	})

	// block some time for the server to start
	await new Promise(r => setTimeout(r, 2000))

	return process.pid!
}

async function stopServer(pid: number) {
	treeKill(pid, "SIGTERM")
}

async function render(url: string, browser: BrowserContext, format = true) {
	console.log("\n⌛  Rendering", url)

	const page = await browser.newPage()

	await page.goto(url, { waitUntil: "networkidle" })
	const html = await page.content()

	await page.close()

	if (format) {
		return await prettier.format(html, { parser: "html" })
	} else {
		return html
	}
}

async function save(html: string, file: string) {
	console.log("✅  Saving File", file)

	fs.mkdirSync(path.dirname(file), { recursive: true })
	fs.writeFileSync(file, html, "utf-8")
}

(async function () {
	let pid = -1

	try {
		pid = await startServer(VITE_PREVIEW_PORT)

		const browser = await chromium.launch()
		const context = await browser.newContext(BROWSER_CONTEXT)

		// Static Routes
		for (const route of STATIC_ROUTES) {
			const url = `http://localhost:${VITE_PREVIEW_PORT}${route}`

			const html = await render(url, context, true)
			const outPath = path.join(OUTPUT_DIR, route === "/" ? "" : route, "index.html")

			await save(html, outPath)
		}

		// Dynamic Routes (Blog Posts)
		const postIndex = path.resolve(path.join("public", "posts", "index.json"))
		const posts: {
			file: string
			title: string
			description?: string
			slug: string
			author: string
			created: string
			updated?: string
		}[] = JSON.parse(fs.readFileSync(postIndex, "utf-8"))

		for (const post of posts) {
			const [ year, month ] = post.created.split("T")[0].split("-")
			const encodedSlug = encodeURIComponent(post.slug)
			const url = `http://localhost:${VITE_PREVIEW_PORT}/beitraege/${year}/${month}/${encodedSlug}`

			const html = await render(url, context, true)
			const outPath = path.join(OUTPUT_DIR, "beitraege", `${year}`, `${month}`, `${encodedSlug}`, "index.html")

			await save(html, outPath)
		}

		await browser.close()
	} finally {
		if (pid !== -1) {
			await stopServer(pid)
		}
	}
})().catch(err => {
	console.error(err)
	process.exit(1)
})

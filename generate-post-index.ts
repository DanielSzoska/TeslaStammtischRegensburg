import fs from "fs"
import matter from "gray-matter"
import path from "path"


// TODO: sitemap generation  /public/sitemaps/posts.xml
// TODO: RSS feed generation /public/rss.xml

type PostMetadata = {
	file: string
	title: string
	description?: string
	slug: string
	author: string
	created: string
	updated?: string
}

/*
*
* Post Index Generation
*
* */

function validateDate(value: string, file: string) {
	let error = false

	if (typeof value !== "string") {
		error = true
	} else {
		error = !/^\d{4}-\d{2}-\d{2}$/.test(value)
	}

	if (error) {
		throw new Error(`❌  Invalid date '${value}' in '${file}'`)
	}
}

const directory = path.join(process.cwd(), "public", "posts")
const files = fs.readdirSync(directory).filter((file) => file.endsWith(".md"))

const posts: Array<PostMetadata> = []

for (const file of files) {
	const raw = fs.readFileSync(path.join(directory, file), "utf-8")

	const { data } = matter(raw)
	const { title, description, slug, author, created, updated } = data

	// Basic Validation
	if (!title || !slug || !author || !created) {
		throw new Error(`❌  Missing Metadata in '${file}'`)
	}

	// Validate creation & update dates
	validateDate(created, file)

	if (updated) {
		validateDate(updated, file)
	}

	const post: PostMetadata = {
		file,
		title,
		description,
		slug: encodeURIComponent(slug),
		author,
		created,
		updated
	}

	posts.push(post)
	console.log(`✅  Loaded Post Metadata from '${file}': ${JSON.stringify(post)}`)
}

// Sort by created (desc)
posts.sort((a, b) => {
	const aDate = new Date(a.created)
	const bDate = new Date(b.created)
	return bDate.getTime() - aDate.getTime()
})

// Write Index File
fs.writeFileSync(path.join(process.cwd(), "public", "posts", "index.json"), JSON.stringify(posts, null, 2))
console.log(`✅  Wrote Post Index with ${posts.length} entries`)


/*
*
* Sitemap Generation
*
* */

function generateSitemapEntry(post: PostMetadata): string {
	const date = new Date(post.created)
	const year = date.getUTCFullYear()
	const month = String(date.getUTCMonth() + 1).padStart(2, "0")

	return `  <url>
    <loc>https://tesla-stammtisch-regensburg.de/beitrag/${year}/${month}/${post.slug}</loc>
    <lastmod>${post.updated ?? post.created}</lastmod>
  </url>`
}

const entries: Array<string> = posts.map(generateSitemapEntry)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries.join("\n")}
</urlset>
`

// Write Sitemap
fs.writeFileSync(path.join(process.cwd(), "public", "sitemaps", "posts.xml"), sitemap)
console.log(`✅  Wrote Sitemap with ${entries.length} entries`)

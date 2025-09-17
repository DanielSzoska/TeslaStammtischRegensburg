import { Helmet } from "react-helmet-async"
import { PostMetadata } from "../types"


type Props = {
	metadata: PostMetadata
}

function formatPostURL(post: PostMetadata) {
	const [ year, month ] = post.created.split("T")[0].split("-")
	const encodedSlug = encodeURIComponent(post.slug)

	return `https://tesla-stammtisch-regensburg.de/beitraege/${year}/${month}/${encodedSlug}`
}

function formatStructuredDataBlog(post: PostMetadata) {
	const url = formatPostURL(post)

	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		url,
		headline: post.title,
		datePublished: post.created,
		dateModified: post.updated ?? post.created,
		author: {
			"@type": "Person",
			name: post.author
		},
		publisher: {
			"@type": "Organization",
			"name": "Tesla Stammtisch Regensburg",
			"url": "https://tesla-stammtisch-regensburg.de"
		}
	}
}

function formatStructuredDataBreadcrumbs(post: PostMetadata) {
	const [ year, month ] = post.created.split("T")[0].split("-")
	const monthName = new Date(Number(year), Number(month) - 1).toLocaleString("de-DE", { month: "long" })
	const encodedSlug = encodeURIComponent(post.slug)

	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Beiträge",
				"item": "https://tesla-stammtisch-regensburg.de/beitraege"
			},
			{
				"@type": "ListItem",
				"position": 2,
				"name": `Beiträge ${year}`,
				"item": `https://tesla-stammtisch-regensburg.de/beitraege/${year}`
			},
			{
				"@type": "ListItem",
				"position": 3,
				"name": `Beiträge ${monthName} ${year}`,
				"item": `https://tesla-stammtisch-regensburg.de/beitraege/${year}/${month}`
			},
			{
				"@type": "ListItem",
				"position": 4,
				"name": post.title,
				"item": `https://tesla-stammtisch-regensburg.de/beitraege/${year}/${month}/${encodedSlug}`
			}
		]
	}
}

export default function ({ metadata }: Props) {
	return (
		<Helmet>
			<title>{metadata.title}</title>

			<link rel="canonical" href={formatPostURL(metadata)} />

			{metadata.description && (
				<meta name="description" content={metadata.description} />
			)}

			<script type="application/ld+json">
				{JSON.stringify(formatStructuredDataBreadcrumbs(metadata), null, 2)}
			</script>

			<script type="application/ld+json">
				{JSON.stringify(formatStructuredDataBlog(metadata), null, 2)}
			</script>
		</Helmet>
	)
}

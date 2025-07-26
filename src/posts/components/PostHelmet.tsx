import { Helmet } from "react-helmet-async"
import { PostMetadata } from "../types"


type Props = {
	metadata: PostMetadata
}

function formatStructuredData(post: PostMetadata) {
	const datePublished = post.created.split("T")[0]
	const dateModified = (post.updated ?? post.created).split("T")[0]

	const [ year, month ] = post.created.split("T")[0].split("-")
	const encodedSlug = encodeURIComponent(post.slug)

	const url = `https://tesla-stammtisch-regensburg.de/beitraege/${year}/${month}/${encodedSlug}`

	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		url,
		headline: post.title,
		datePublished,
		dateModified,
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

export default function ({ metadata }: Props) {
	return (
		<Helmet>
			<title>{metadata.title}</title>

			{metadata.description && (
				<meta name="description" content={metadata.description} />
			)}

			<script type="application/ld+json">
				{JSON.stringify(formatStructuredData(metadata), null, 2)}
			</script>
		</Helmet>
	)
}

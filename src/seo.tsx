import { Helmet } from "react-helmet"


export default function () {
	return (
		<Helmet>
			<script type="application/ld+json">
				{ JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					"itemListElement": [
						{
							"@type": "ListItem",
							"position": 1,
							"name": "Tesla Stammtisch",
							"item": "https://tesla-stammtisch-regensburg.de/",
						},
						{
							"@type": "ListItem",
							"position": 2,
							"name": "Termine",
							"item": "https://tesla-stammtisch-regensburg.de/termine",
						}
					],
				}) }
			</script>
		</Helmet>
	)
}

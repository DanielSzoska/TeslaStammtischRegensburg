import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import { useMemo } from "react"
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router"
import { ViewNotFound } from "../../404"
import { isValidMonth, isValidYear } from "../../util"
import { PostList } from "../components"
import { usePostIndex } from "../hooks"


export default function () {
	const { year, month } = useParams()
	const index = usePostIndex()

	const posts = useMemo(() => {
		if (isValidYear(year) && isValidMonth(month)) {
			return index?.filter(post => {
				const date = new Date(post.created)

				if (date.getUTCFullYear() !== Number(year)) {
					return false
				}

				if (date.getUTCMonth() !== Number(month) - 1) {
					return false
				}

				return true
			})
		}
	}, [ index, year, month ])

	if (!isValidYear(year) || !isValidMonth(month)) {
		return (
			<ViewNotFound />
		)
	}

	if (!index || !posts) {
		return null
	}

	if (posts.length === 0) {
		return (
			<ViewNotFound />
		)
	}

	const monthName = new Date(Number(year), Number(month) - 1).toLocaleString("de-DE", { month: "long" })

	return (
		<>
			<Helmet>
				<title>Beiträge {monthName} {year}</title>
				<link rel="canonical" href={`https://tesla-stammtisch-regensburg.de/beitraege/${year}/${month}}`} />
			</Helmet>

			<Container maxWidth="lg">
				<Box component={Paper} padding="2rem">
					<PostList posts={posts} />
				</Box>
			</Container>
		</>
	)
}

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import { useMemo } from "react"
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router"
import { ViewNotFound } from "../../404"
import { isValidYear } from "../../util"
import { PostList } from "../components"
import { usePostIndex } from "../hooks"


export default function () {
	const { year } = useParams()
	const index = usePostIndex()

	const posts = useMemo(() => {
		if (isValidYear(year)) {
			return index?.filter(post => {
				const date = new Date(post.created)

				if (date.getUTCFullYear() !== Number(year)) {
					return false
				}

				return true
			})
		}
	}, [ index, year ])

	if (!isValidYear(year)) {
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

	return (
		<Container maxWidth="lg">
			<Helmet>
				<title>Beiträge {year}</title>
			</Helmet>

			<Box component={Paper} padding="2rem">
				<PostList posts={posts} />
			</Box>
		</Container>
	)
}

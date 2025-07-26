import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import { useMemo } from "react"
import { Helmet } from "react-helmet-async"
import { PostList, usePostIndex } from "../../posts"


export default function () {
	const index = usePostIndex()
	const posts = useMemo(() => index?.slice(0, 3) ?? [], [ index ])

	return (
		<Container maxWidth="lg">
			<Helmet>
				<title>Neueste Beiträge</title>
			</Helmet>

			<Box component={Paper} padding="2rem">
				<PostList posts={posts} />
			</Box>
		</Container>
	)
}

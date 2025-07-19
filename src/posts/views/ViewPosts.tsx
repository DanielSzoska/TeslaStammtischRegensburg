import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import { Helmet } from "react-helmet-async"
import { PostList } from "../../posts"


export default function () {
	return (
		<Container maxWidth="lg">
			<Helmet>
				<title>Beiträge</title>
			</Helmet>

			<Box component={Paper} padding="2rem">
				<PostList maxPosts={3} />
			</Box>
		</Container>
	)
}

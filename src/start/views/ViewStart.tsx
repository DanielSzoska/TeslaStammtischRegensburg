import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import { Post } from "../components"


export default function () {
	return (
		<Container maxWidth="lg">
			<Paper>
				<Post file="/posts/test.md" />
			</Paper>
		</Container>
	)
}

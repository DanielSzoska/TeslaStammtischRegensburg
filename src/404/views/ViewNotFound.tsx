import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router"


export default function () {
	return (
		<>
			<Helmet>
				<title>404</title>
				<meta name="description" content="Seite nicht gefunden" />
				<meta name="robots" content="noindex" />
			</Helmet>

			<Container maxWidth="sm">
				<Paper elevation={4} sx={{ padding: "1.5rem" }}>
					<Stack direction="column" spacing={2} sx={{ alignItems: "center" }} component="span" data-nosnippet>
						<Typography variant="h3">
							<b>Seite nicht gefunden</b>
						</Typography>

						<Button variant="contained" component={Link} to="/">Zur Startseite</Button>
					</Stack>
				</Paper>
			</Container>
		</>
	)
}

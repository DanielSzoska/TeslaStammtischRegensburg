import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"


export default function () {
	return (
		<Container maxWidth="sm">
			<Paper elevation={4} style={{ padding: "1.5rem" }}>
				<Stack direction="column" spacing={2} alignItems="center">
					<Typography variant="h3">
						<b>Seite nicht gefunden</b>
					</Typography>

					<Button variant="contained" component={Link} to="/">Zur Startseite</Button>
				</Stack>
			</Paper>
		</Container>
	)
}

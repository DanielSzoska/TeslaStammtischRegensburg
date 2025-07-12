import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"


// TODO: Parse ICS and generate Event Information
// TODO: Structured Data for Google to show upcoming Events in Search Results: https://developers.google.com/search/docs/appearance/structured-data/event?hl=de

export default function () {
	return (
		<Container maxWidth="md">
			<Paper>
				<Typography>
					Nächste Termine
					<br />
					Soon™
				</Typography>
			</Paper>
		</Container>
	)
}

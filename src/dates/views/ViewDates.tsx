import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { CalendarSubscribeButton } from "../components"


// TODO: Parse ICS and generate Event Information
// TODO: Structured Data for Google to show upcoming Events in Search Results: https://developers.google.com/search/docs/appearance/structured-data/event?hl=de

export default function () {
	return (
		<Container maxWidth="md">
			<Paper>
				<Stack>
					<Typography>
						Nächste Termine
						<br />
						Soon™
					</Typography>

					<span>
						<CalendarSubscribeButton />
					</span>
				</Stack>
			</Paper>
		</Container>
	)
}

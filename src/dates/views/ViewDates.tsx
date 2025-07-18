import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { EventList } from "../components"


export default function () {
	return (
		<Container maxWidth="md">
			<Paper>
				<Stack spacing={4}>
					<Typography variant="h3" fontWeight="bold" textAlign="center" component="span" data-nosnippet>
						Nächste Termine
					</Typography>

					<EventList file="/download/termine.ics" />
				</Stack>
			</Paper>
		</Container>
	)
}

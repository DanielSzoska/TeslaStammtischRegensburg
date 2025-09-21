import RssFeedIcon from "@mui/icons-material/RssFeed"
import Button, { ButtonProps } from "@mui/material/Button"
import { Link } from "react-router-dom"


type Props = Partial<ButtonProps>

export default function ({ ...props }: Props) {
	return (
		<Button
			variant="contained"
			color="primary"
			component={Link}
			to="/download/termine.ics"
			target="_blank"
			startIcon={<RssFeedIcon />}
			{...props}
		>
			Kalender abonnieren
		</Button>
	)
}

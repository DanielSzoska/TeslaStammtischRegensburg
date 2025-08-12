import RssFeedIcon from "@mui/icons-material/RssFeed"
import Button, { ButtonProps } from "@mui/material/Button"
import { useMemo } from "react"
import { Link } from "react-router-dom"


type Props = Partial<ButtonProps>

export default function ({ ...props }: Props) {
	const absoluteUrl = useMemo(() => new URL("/download/termine.ics", window.location.href), [ window.location.href ])
	const webCalUrl = useMemo(() => `https://${absoluteUrl.hostname}${absoluteUrl.pathname}`, [ absoluteUrl ])

	return (
		<Button
			variant="contained"
			color="primary"
			component={Link}
			to={webCalUrl}
			startIcon={<RssFeedIcon />}
			{...props}
		>
			Kalender abonnieren
		</Button>
	)
}

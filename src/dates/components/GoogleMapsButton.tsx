import MapIcon from "@mui/icons-material/Map"
import Button, { ButtonProps } from "@mui/material/Button"
import ICAL from "ical.js"
import { useMemo } from "react"
import { Link } from "react-router-dom"


type Props = {
	event: ICAL.Event
} & Partial<ButtonProps>

export default function ({ event, ...props }: Props) {

	const url = useMemo(() => {
		const geo = event.component.getFirstProperty("geo")?.getFirstValue()?.toString()
		const [ latitude, longitude ] = geo?.split(",") ?? []

		const location = event.location?.trim()

		if (location) {
			const encodedLocation = encodeURIComponent(location)
			return `https://www.google.com/maps?q=${encodedLocation}`
		}

		if (geo) {
			return `https://www.google.com/maps?q=${latitude},${longitude}`
		}

		return null
	}, [ event ])

	return (
		<Button
			variant="contained"
			color="primary"
			startIcon={<MapIcon />}
			disabled={!url}
			component={Link}
			to={url}
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		>
			Google Maps
		</Button>
	)
}

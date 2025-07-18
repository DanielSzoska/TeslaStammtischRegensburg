import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import RoomIcon from "@mui/icons-material/Room"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import ICAL from "ical.js"
import { useMemo } from "react"
import { useHandyViewport } from "../../util"
import GoogleMapsButton from "./GoogleMapsButton"
import { CalendarSubscribeButton } from "./index"


type Props = {
	event: ICAL.Event
}


function formatDate(date: Date) {
	return date.toLocaleString(undefined, {
		weekday: "short",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit"
	})
}

function formatStructuredData(event: ICAL.Event) {
	const data = {
		"@context": "https://schema.org",
		"@type": "Event",
		"eventStatus": "https://schema.org/EventScheduled",
		"organizer": {
			"@type": "Organization",
			"name": "Tesla Stammtisch Regensburg",
			"url": "https://tesla-stammtisch-regensburg.de"
		},
		"offers": {
			"@type": "Offer",
			"price": 0
		},
		startDate: event.startDate.toJSDate().toISOString(),
		endDate: event.endDate.toJSDate().toISOString(),
		name: event.summary,
		description: event.description?.replaceAll(/(\r\n|\r|\n)/g, ", ")
	}

	const geo = event.component.getFirstProperty("geo")?.getFirstValue()?.toString()
	const [ latitude, longitude ] = geo?.split(",") ?? []

	const location = event.location?.trim()?.split("\n")?.join(", ")

	if (location) {
		data["location"] = {
			"@type": "Place",
			name: location
		}

		if (geo && latitude && longitude) {
			data["location"]["geo"] = {
				"@type": "GeoCoordinates",
				latitude: parseFloat(latitude),
				longitude: parseFloat(longitude)
			}
		}
	}

	return data
}

export default function ({ event }: Props) {
	const handy = useHandyViewport()

	const start = event.startDate.toJSDate()
	const end = event.endDate.toJSDate()

	const structuredData = useMemo(() => formatStructuredData(event), [ event ])

	return (
		<>
			{structuredData && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData)
					}} />
			)}

			<Card variant="outlined">
				<CardHeader
					title={event.summary}
					subheader={(
						<Stack spacing={1}>
							<Box display="flex" alignItems="center" gap={1}>
								<CalendarMonthIcon fontSize="small" />

								<Typography variant="body2">
									{formatDate(start)} – {formatDate(end)}
								</Typography>
							</Box>

							{event.location && (
								<Box display="flex" alignItems={handy ? "start" : "center"} gap={1}>
									<RoomIcon fontSize="small" />

									<Typography variant="body2" whiteSpace={handy ? "pre-wrap" : "nowrap"}>
										{handy ? event.location : event.location.replaceAll(/(\r\n|\r|\n)/g, ", ")}
									</Typography>
								</Box>
							)}
						</Stack>
					)}
				/>

				<CardContent>
					{event.description && (
						<Typography variant="body2" sx={{ mb: 2 }} whiteSpace="pre-wrap">
							{event.description}
						</Typography>
					)}
				</CardContent>

				<CardActions>
					<Stack width="100%" direction={handy ? "column" : "row"} justifyContent="space-between">
						<CalendarSubscribeButton />
						<GoogleMapsButton event={event} />
					</Stack>
				</CardActions>
			</Card>
		</>
	)
}

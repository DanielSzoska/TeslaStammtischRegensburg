import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Stack from "@mui/material/Stack"
import ICAL from "ical.js"
import { useEffect, useMemo, useState } from "react"
import { Event } from "./"


type Props = {
	file: `/${string}.ics`
}

export default function ({ file }: Props) {
	const [ content, setContent ] = useState<string>()

	useEffect(() => {
		fetch(file)
			.then(response => response.text())
			.then(text => setContent(text))

		return () => setContent(undefined)
	}, [ file ])

	const events = useMemo(() => {
		if (!content) return undefined

		const ics = ICAL.parse(content)
		const root = new ICAL.Component(ics)

		return root.getAllSubcomponents("vevent")?.map(component => new ICAL.Event(component))
	}, [ content ])

	const futureEvents = useMemo(() => events?.filter(event => event.endDate.toJSDate().getTime() > Date.now()), [ events ])

	if (!content) {
		return (
			<Box sx={{ minHeight: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<CircularProgress size={65} />
			</Box>
		)
	}

	return (
		<Stack spacing={3}>
			{(futureEvents?.map(event => (
				<Event event={event} />
			)))}
		</Stack>
	)
}

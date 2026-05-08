import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import EditCalendarIcon from "@mui/icons-material/EditCalendar"
import PersonIcon from "@mui/icons-material/Person"
import Box from "@mui/material/Box"
import Card, { CardProps } from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import CircularProgress from "@mui/material/CircularProgress"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { formatDate, MarkdownRenderer, useHandyViewport } from "../../util"
import { usePostContent } from "../hooks"
import { PostMetadata } from "../types"


type Props = {
	metadata: PostMetadata
} & Partial<CardProps>

export default function ({ metadata, ...props }: Props) {
	const content = usePostContent(metadata)
	const handy = useHandyViewport()

	if (!content) {
		return (
			<Box sx={{ minHeight: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<CircularProgress size={65} />
			</Box>
		)
	}

	return (
		<Card variant="outlined" sx={{ padding: handy ? "0.25rem" : undefined }} {...props}>
			<CardHeader
				title={metadata.title}
				subheader={(
					<Stack spacing={3} component="span" data-nosnippet>
						<Stack spacing={1}>
							<Box sx={{ display: "flex", gap: 1, alignItems: handy ? "start" : "center" }}>
								<PersonIcon fontSize="small" />

								<Typography variant="body2" sx={{ whiteSpace: handy ? "pre-wrap" : "nowrap" }}>
									{metadata.author}
								</Typography>
							</Box>

							<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
								<CalendarMonthIcon fontSize="small" />

								<Typography variant="body2">
									{formatDate(new Date(metadata.created))}
								</Typography>
							</Box>

							{metadata.updated && metadata.updated !== metadata.created && (
								<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
									<EditCalendarIcon fontSize="small" />

									<Typography variant="body2">
										{formatDate(new Date(metadata.updated))}
									</Typography>
								</Box>
							)}
						</Stack>

						<Divider />
					</Stack>
				)}
			/>

			<CardContent>
				<MarkdownRenderer markdown={content} />
			</CardContent>
		</Card>
	)
}

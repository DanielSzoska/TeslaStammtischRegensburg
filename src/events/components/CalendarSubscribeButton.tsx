import AppleIcon from "@mui/icons-material/Apple"
import GoogleIcon from "@mui/icons-material/Google"
import InsertLinkIcon from "@mui/icons-material/InsertLink"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import MicrosoftIcon from "@mui/icons-material/Microsoft"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { MouseEvent, useState } from "react"
import { Link } from "react-router-dom"


const CALENDAR_URL = "webcal://tesla-stammtisch-regensburg.de/download/termine.ics"

export default function () {
	const [ anchor, setAnchor ] = useState<null | HTMLElement>(null)
	const open = Boolean(anchor)

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchor(event.currentTarget)
	}

	const handleClose = () => {
		setAnchor(null)
	}

	return (
		<Stack>
			<Button
				variant="contained"
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
			>
				Kalender abonnieren
			</Button>

			<Menu
				elevation={0}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right"
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right"
				}}
				anchorEl={anchor}
				open={open}
				onClose={handleClose}
			>
				<MenuItem
					component={Link}
					to={CALENDAR_URL}
					target="_blank"
					onClick={handleClose}
					disableRipple
				>
					<Stack direction="row" alignItems="center" spacing={2}>
						<InsertLinkIcon />

						<Typography>
							Direktlink (iCal)
						</Typography>
					</Stack>
				</MenuItem>

				<MenuItem
					component={Link}
					to={CALENDAR_URL}
					target="_blank"
					onClick={handleClose}
					disableRipple
				>
					<Stack direction="row" alignItems="center" spacing={2}>
						<AppleIcon />

						<Typography>
							Apple Calendar
						</Typography>
					</Stack>
				</MenuItem>

				<MenuItem
					component={Link}
					to={`https://calendar.google.com/calendar/r?cid=${CALENDAR_URL}`}
					target="_blank"
					onClick={handleClose}
					disableRipple
				>
					<Stack direction="row" alignItems="center" spacing={2}>
						<GoogleIcon />

						<Typography>
							Google Calendar
						</Typography>
					</Stack>
				</MenuItem>

				<MenuItem
					component={Link}
					to={`https://outlook.office.com/calendar/0/addfromweb?url=${CALENDAR_URL}&name=Tesla Stammtisch Regensburg`}
					target="_blank"
					onClick={handleClose}
					disableRipple
				>
					<Stack direction="row" alignItems="center" spacing={2}>
						<MicrosoftIcon />

						<Typography>
							Outlook 365
						</Typography>
					</Stack>
				</MenuItem>
			</Menu>
		</Stack>
	)
}

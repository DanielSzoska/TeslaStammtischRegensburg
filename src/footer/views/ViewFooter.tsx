import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import { Link, useLocation } from "react-router-dom"
import { useHandyViewport } from "../../util"


export default function () {
	const handy = useHandyViewport()
	const location = useLocation()

	return (
		<AppBar component="footer" color="primary">
			<Toolbar>
				<Stack component="span" data-nosnippet spacing={0} direction={handy ? "column" : "row"} width="100%" alignItems="center" justifyContent="space-between">
					<Stack direction="row" spacing={1}>
						<Button component={Link} to="/" variant="text" color="inherit">
							Start
						</Button>

						<Button component={Link} to="/termine" variant="text" color="inherit">
							Termine
						</Button>

						<Button component={Link} to="https://maps.app.goo.gl/mLrcUSX8CaNX6vYr8" target="_blank" variant="text" color="inherit">
							Treffpunkt
						</Button>
					</Stack>

					<Stack direction="row" spacing={1}>
						<Button disabled component={Link} to="/impressum" variant="text" color="inherit">
							Impressum
						</Button>
					</Stack>
				</Stack>
			</Toolbar>
		</AppBar>
	)
}

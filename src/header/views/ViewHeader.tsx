import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import { useHandyViewport, useTabletViewport } from "../../util"


export default function () {
	const tablet = useTabletViewport()
	const handy = useHandyViewport()

	return (
		<>
			<AppBar component="header" color="primary" elevation={0}>
				<Toolbar>
					<Stack component="span" data-nosnippet direction="row" width="100%" alignItems="center" justifyContent="center">
						<img
							draggable={false}
							src="/logo.svg"
							alt="Tesla Stammtisch Regensburg"
							style={{
								height: tablet ? "80px" : "100px"
							}}
						/>

						<Typography fontFamily="TESLA" textTransform="uppercase" fontSize={handy ? "1.5rem" : tablet ? "2rem" : "2.5rem"} sx={{ userSelect: "none" }}>
							Tesla Stammtisch Regensburg
						</Typography>
					</Stack>
				</Toolbar>
			</AppBar>

			<AppBar component="nav" color="primary" elevation={4} sx={{ position: "sticky", top: 0, zIndex: 100 }}>
				<Toolbar>
					<Stack component="span" data-nosnippet spacing={1} direction="row" width="100%" alignItems="center" justifyContent="center">
						<Button size="large" component={Link} to="/" variant="text" color="inherit">
							Start
						</Button>

						<Button size="large" component={Link} to="/termine" variant="text" color="inherit">
							Termine
						</Button>

						<Button size="large" component={Link} to="https://maps.app.goo.gl/mLrcUSX8CaNX6vYr8" target="_blank" variant="text" color="inherit">
							Treffpunkt
						</Button>
					</Stack>
				</Toolbar>
			</AppBar>
		</>
	)
}

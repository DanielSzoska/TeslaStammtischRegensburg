import AppBar from "@mui/material/AppBar"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { GithubRibbon, useHandyViewport, useTabletViewport } from "../../util"


export default function () {
	const tablet = useTabletViewport()
	const handy = useHandyViewport()

	return (
		<AppBar component="header" color="primary">
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

			<GithubRibbon />
		</AppBar>
	)
}

import Box from "@mui/material/Box"
import { Outlet } from "react-router"
import { ViewHeader } from "./header"
import ThemeProvider from "./theme"


export function DefaultLayout() {
	return (
		<ThemeProvider>
			<ViewHeader />

			<Box id="content">
				<Outlet />
			</Box>
		</ThemeProvider>
	)
}

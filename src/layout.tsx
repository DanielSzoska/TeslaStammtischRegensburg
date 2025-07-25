import Box from "@mui/material/Box"
import { Outlet } from "react-router-dom"
import { ViewHeader } from "./header"
import ThemeProvider from "./theme"


export function DefaultLayout() {
	return (
		<ThemeProvider>
			<Box id="header">
				<ViewHeader />
			</Box>

			<Box id="content">
				<Outlet />
			</Box>
		</ThemeProvider>
	)
}

import { Route, Routes } from "react-router"
import { ViewNotFound } from "./404"
import { ViewDates } from "./dates"
import { ViewStart } from "./start"


export default function () {
	return (
		<Routes>
			<Route path="/" element={<ViewStart />} />
			<Route path="/termine" element={<ViewDates />} />

			<Route path="*" element={<ViewNotFound />} />
		</Routes>
	)
}

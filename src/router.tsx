import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { ViewNotFound } from "./404"
import { ViewDates } from "./dates"
import { DefaultLayout } from "./layout"
import { ViewPost, ViewPosts } from "./posts"


export default function () {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path="/" element={<ViewPosts />} />
					<Route path="/termine" element={<ViewDates />} />
					<Route path="/beitrag/:year/:month/:slug" element={<ViewPost />} />

					<Route path="*" element={<ViewNotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

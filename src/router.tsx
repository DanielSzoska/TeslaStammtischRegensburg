import { Route, Routes } from "react-router"
import { ViewNotFound } from "./404"
import { ViewDates } from "./dates"
import { ViewPost, ViewPosts } from "./posts"


export default function () {
	return (
		<Routes>
			<Route path="/" element={<ViewPosts />} />
			<Route path="/termine" element={<ViewDates />} />
			<Route path="/beitrag/:year/:month/:slug" element={<ViewPost />} />

			<Route path="*" element={<ViewNotFound />} />
		</Routes>
	)
}

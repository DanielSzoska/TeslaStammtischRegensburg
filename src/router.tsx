import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { ViewNotFound } from "./404"
import { ViewEvents } from "./events"
import { DefaultLayout } from "./layout"
import { ViewLatestPosts, ViewPost, ViewPostsByMonth, ViewPostsByYear } from "./posts"


export default function () {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route index element={<ViewLatestPosts />} />
					<Route path="/termine" element={<ViewEvents />} />

					<Route path="/beitrag">
						<Route path=":year">
							<Route index element={<ViewPostsByYear />} />

							<Route path=":month">
								<Route index element={<ViewPostsByMonth />} />
								<Route path=":slug" element={<ViewPost />} />
							</Route>
						</Route>
					</Route>

					<Route path="*" element={<ViewNotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

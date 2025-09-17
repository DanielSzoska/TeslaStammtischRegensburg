import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import { useMemo, useState } from "react"
import { useParams } from "react-router"
import { ViewNotFound } from "../../404"
import { useHandyViewport } from "../../util"
import { Post, PostHelmet } from "../components"
import { usePostIndex } from "../hooks"


export default function () {
	const handy = useHandyViewport()

	const { year, month, slug } = useParams()
	const [ invalid, setInvalid ] = useState(false)

	const index = usePostIndex()
	const post = useMemo(() => {
		if (!index || index.length === 0) return undefined

		const match = index.find(metadata => {
			if (new Date(metadata.created).getUTCFullYear() !== Number(year)) return false
			if (String(new Date(metadata.created).getUTCMonth() + 1).padStart(2, "0") !== month) return false
			if (encodeURIComponent(metadata.slug) !== slug) return false

			return true
		})

		setInvalid(!match)
		return match
	}, [ index, year, month, slug ])

	if (invalid) {
		return (
			<ViewNotFound />
		)
	}

	if (!post) {
		return (
			<Container maxWidth="lg">
				<Box component={Paper} padding="2rem">
					<Box sx={{ minHeight: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
						<CircularProgress size={65} />
					</Box>
				</Box>
			</Container>
		)
	}

	return (
		<Container maxWidth="lg">
			<PostHelmet metadata={post} />

			<Box component={Paper} padding={handy ? "0.5rem" : "2rem"}>
				<Post metadata={post} />
			</Box>
		</Container>
	)
}

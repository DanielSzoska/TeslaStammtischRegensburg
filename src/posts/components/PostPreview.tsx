import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import { Link } from "react-router-dom"
import { PostMetadata } from "../types"
import Post from "./Post"


type Props = {
	metadata: PostMetadata
	maxHeight?: number
}

export default function ({ metadata, maxHeight = 500 }: Props) {
	const year = new Date(metadata.created).getUTCFullYear()
	const month = String(new Date(metadata.created).getUTCMonth() + 1).padStart(2, "0")
	const slug = encodeURIComponent(metadata.slug)
	const url = `/beitrag/${year}/${month}/${slug}`

	return (
		<Stack>
			<Box component="div" sx={{
				position: "relative",
				maxHeight: maxHeight,
				overflow: "hidden",
				mb: 2,
				"&::after": {
					content: "\"\"",
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					height: 50,
					background: "linear-gradient(to bottom, transparent, #272727)"
				}
			}}>
				<Post metadata={metadata} />
			</Box>

			<span data-nosnippet>
				<Button component={Link} to={url} color="primary">
					Weiterlesen: {metadata.title}
				</Button>
			</span>
		</Stack>
	)
}

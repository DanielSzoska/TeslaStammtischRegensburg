import Stack from "@mui/material/Stack"
import { useMemo } from "react"
import { usePostIndex } from "../hooks"
import { PostPreview } from "./"


type Props = {
	maxPosts: number
}

export default function ({ maxPosts }: Props) {
	const index = usePostIndex()
	const posts = useMemo(() => index?.slice(0, maxPosts), [ index, maxPosts ])

	return (
		<Stack spacing={3}>
			{(posts?.map(post => (
				<PostPreview metadata={post} />
			)))}
		</Stack>
	)
}

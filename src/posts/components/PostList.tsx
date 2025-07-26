import Stack from "@mui/material/Stack"
import { PostMetadata } from "../types"
import { PostPreview } from "./"


type Props = {
	posts: Array<PostMetadata>
}

export default function ({ posts }: Props) {
	return (
		<Stack spacing={3}>
			{(posts?.map(post => (
				<PostPreview key={post.file} metadata={post} />
			)))}
		</Stack>
	)
}

import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import { useEffect, useState } from "react"
import { MarkdownRenderer } from "../../util"


type Props = {
	file: `/posts/${string}.md`
}

export default function ({ file }: Props) {
	const [ content, setContent ] = useState<string>()

	useEffect(() => {
		fetch(file)
			.then(response => response.text())
			.then(text => setContent(text))

		return () => setContent(undefined)
	}, [ file ])

	if (!content) {
		return (
			<Box sx={{ minHeight: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<CircularProgress size={65} />
			</Box>
		)
	}

	return (
		<MarkdownRenderer markdown={content} />
	)
}

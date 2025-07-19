import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useMemo } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { stripFrontmatter } from "../format"


type Props = {
	markdown: string
}

export default function ({ markdown }: Props) {
	// Extract Content from Markdown, ignoring metadata (frontmatter)
	const content = useMemo(() => stripFrontmatter(markdown), [ markdown ])

	return (
		<Box
			sx={{
				"& h1": { fontSize: "2rem", fontWeight: "bold", mt: 4 },
				"& h2": { fontSize: "1.5rem", fontWeight: "bold", mt: 3 },
				"& p": { mt: 2 },
				"& pre": { bgcolor: "#f6f8fa", p: 2, borderRadius: 2, overflowX: "auto" },
				"& code": { fontFamily: "monospace", bgcolor: "#f0f0f0", px: 0.5 },
				"& li": { mt: 1 }
			}}
		>
			<ReactMarkdown
				children={content}
				remarkPlugins={[ remarkGfm ]}
				components={{
					h1: props => (
						<Typography variant="h4" {...props} />
					),
					h2: props => (
						<Typography variant="h5" {...props} />
					),
					p: props => (
						<Typography variant="body1" {...props} />
					),
					li: props => (
						<li>
							<Typography component="span" {...props} />
						</li>
					),
					img: props => (
						<Box
							component="img"
							loading="lazy"
							decoding="async"
							{...props}
							sx={{
								maxWidth: "100%",
								objectFit: "contain"
							}}
						/>
					)
				}}
			/>
		</Box>
	)
}

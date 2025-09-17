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
				"& h1": { fontSize: "2rem", fontWeight: "bold", mt: 3 },
				"& h2": { fontSize: "1.5rem", fontWeight: "bold", mt: 3 },
				"& h3": { fontSize: "1.3rem", fontWeight: "bold", mt: 2 },
				"& h4": { fontSize: "1.2rem", fontWeight: "bold", mt: 2 },
				"& h5": { fontSize: "1.1rem", fontWeight: "bold", mt: 2 },
				"& p": { mt: 1 },
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
						<Typography component="h1" {...props} />
					),
					h2: props => (
						<Typography component="h2" {...props} />
					),
					h3: props => (
						<Typography component="h3" {...props} />
					),
					h4: props => (
						<Typography component="h4" {...props} />
					),
					h5: props => (
						<Typography component="h5" {...props} />
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
								objectFit: "contain",
								borderRadius: "5px"
							}}
						/>
					)
				}}
			/>
		</Box>
	)
}

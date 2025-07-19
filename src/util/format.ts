export function formatDate(date: Date) {
	return date.toLocaleString(undefined, {
		weekday: "short",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit"
	})
}


export function stripFrontmatter(markdown: string): string {
	const match = markdown.match(/^---\s*[\s\S]*?\s*---\s*/)
	return match ? markdown.slice(match[0].length).trimStart() : markdown
}

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

export const isValidYear = (year?: string) => {
	if (!year) return false
	const num = Number(year)

	return (
		Number.isInteger(num) &&
		year.length === 4 &&
		num >= 2000
	)
}

export const isValidMonth = (month?: string) => {
	if (!month) return false
	const num = Number(month)

	return (
		Number.isInteger(num) &&
		month.length === 2 &&
		num >= 1 &&
		num <= 12
	)
}

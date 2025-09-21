export function formatDate(date: Date, time = false) {
	const options: Intl.DateTimeFormatOptions = {
		weekday: "long",
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		...(time && { hour: "2-digit", minute: "2-digit" })
	}

	return date.toLocaleString(undefined, options)
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

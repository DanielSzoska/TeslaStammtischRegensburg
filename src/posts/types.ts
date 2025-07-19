export type PostMetadata = {
	file: string
	title: string
	description?: string
	slug: string
	author: string
	created: string
	updated?: string
}

export type PostMetadataIndex = Array<PostMetadata>
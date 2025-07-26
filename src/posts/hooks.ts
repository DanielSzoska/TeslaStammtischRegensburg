import { useEffect, useState } from "react"
import { stripFrontmatter } from "../util"
import { PostMetadata, PostMetadataIndex } from "./types"


export const usePostIndex = () => {
	const [ index, setIndex ] = useState<PostMetadataIndex>()

	useEffect(() => {
		fetch("/posts/index.json")
			.then(response => response.json())
			.then(json => setIndex(json))

		return () => setIndex(undefined)
	}, [])

	return index
}

export const usePostContent = (metadata: PostMetadata) => {
	const [ content, setContent ] = useState<string>()

	useEffect(() => {
		fetch(`/posts/${metadata.file}`)
			.then(response => response.text())
			.then(text => stripFrontmatter(text))
			.then(text => setContent(text))

		return () => setContent(undefined)
	}, [])

	return content
}

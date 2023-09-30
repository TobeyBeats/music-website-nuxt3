export function extractRelativePath(url: string): string {
	return url.replace(/^[^:]+:\/\/[^/?#]+/, '')
}

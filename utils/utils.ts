export function extractRelativePath(url: string): string {
	return url.replace(/^[^:]+:\/\/[^/?#]+/, '')
}

export const newLineToHtml = (s: string) => s.replace(/(?:\r\n|\r|\n)/g, "<br>")

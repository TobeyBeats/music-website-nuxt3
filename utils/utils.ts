export function extractRelativePath(url: string): string {
	return url.replace(/^[^:]+:\/\/[^/?#]+/, '')
}

export const newLineToHtml = (s: string) => s.replace(/(?:\r\n|\r|\n)/g, "<br>")

export function setActiveColors(color1: string, color2: string) {
	const root = document.querySelector(":root")
	root?.animate({
		'--active-color-1': color1,
		'--active-color-2': color2,
	}, {
		fill: "forwards",
		duration: 0
})
}

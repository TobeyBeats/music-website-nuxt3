export function extractRelativePath(url: string): string {
	return url.replace(/^[^:]+:\/\/[^/?#]+/, '')
}

export const newLineToHtml = (s: string) => s.replace(/(?:\r\n|\r|\n)/g, "<br>")

function setActiveColors(color1: string, color2: string) {
	const root = document.querySelector(":root")
	root?.animate({
		'--active-color-1': color1,
		'--active-color-2': color2,
	}, {
		fill: "forwards",
		duration: 0
	})
}

const activeColorsStack: [string, string][] = []

export function useActiveColors() {
	return {
		setActiveColors: (color1: string, color2: string) => {
			activeColorsStack.push([color1, color2])
			setActiveColors(color1, color2)
		},
		resetActiveColors: () => {
			activeColorsStack.pop()
			const [color1, color2] = activeColorsStack[activeColorsStack.length - 1] || constants.colorsDefault
			setActiveColors(color1, color2)
		}
	}
}

export interface MusicLinks {
	spotify?: string,
	amazon?: string,
	apple?: string,
	youtube?: string,
	deezer?: string,
	soundcloud?: string
}

export interface Playlist {
	name: string,
	description: string,
	thumbnailUrl: string,
	brightColors: [string, string],
	links: {
		spotify: string,
		apple: string
	}
}

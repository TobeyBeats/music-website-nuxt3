export class Contributor {
	public name: string
	public links: {
		instagram?: string,
		spotify?: string,
		youtube?: string,
		website?: string
	}
	constructor(data: {
		name?: string,
		links?: {
			instagram?: string,
			spotify?: string,
			youtube?: string,
			website?: string
		}
	}) {
		this.name = data.name || ""
		this.links = data.links || {}
	}
}

export class Release {
	public name: string
	public primaryArtists: string
	public thumbnailUrl: string
	public releaseDate: Date
	public brightColors: string[]
	public tags: string[]
	public lyrics: string
	public released: boolean
	public lyricists: Contributor[]
	public links: {
		spotify?: string,
		youtube?: string,
		soundcloud?: string,
		apple?: string,
		deezer?: string,
		amazon?: string,
		website: string,
		presave?: string,
		youtubeEmbeds?: string[]
	}
	public participants: {
		displayName: string,
		roles: string,
		contributor: Contributor
	}[]

	constructor(data: {
		name: string,
		primaryArtists: string,
		thumbnailUrl: string,
		releaseDate: Date | string,
		brightColors?: string[],
		tags?: string[],
		lyrics?: string,
		links: {
			spotify?: string,
			youtube?: string,
			soundcloud?: string,
			apple?: string,
			deezer?: string,
			amazon?: string,
			website: string,
			presave?: string,
			youtubeEmbeds?: string[]
		},
		participants: {
			displayName: string,
			roles: string,
			contributor: Contributor
		}[]
	}) {
		this.name = data.name
		this.primaryArtists = data.primaryArtists
		this.thumbnailUrl = data.thumbnailUrl
		this.releaseDate = new Date(data.releaseDate)
		this.brightColors = data.brightColors?.map(c => "#" + c) || []
		this.tags = data.tags || []
		this.lyrics = data.lyrics || ""
		this.links = data.links
		this.participants = data.participants
		this.released = new Date() >= this.releaseDate
		this.lyricists = this.participants
			.filter(participant => participant.roles.toLowerCase().includes("lyricist"))
			.map(participant => participant.contributor)
	}
}


export function getFilteredReleases(releases: Release[], input: string, tags: string[]) {
	const inputArray = input.split(" ", -1);
	return releases.filter((release) => tags.every(tag => (release.tags).includes(tag)) && inputArray.every(element => release.name.toLowerCase().includes(element.toLowerCase()) || release.primaryArtists.toLowerCase().includes(element.toLowerCase())));
}


export default {Release, Contributor, getFilteredReleases}

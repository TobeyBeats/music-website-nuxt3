<template>
	<div>
		<h1>{{ release.name }}</h1>
		<div class="grid-default grid-2-1">
			<div>
				<p class="display-h2" style="margin-bottom: var(--space-unit);">{{ release.primaryArtists }}</p>
				<p style="margin-bottom: var(--space-unit);">{{ release.releaseDate.toLocaleDateString() }}</p>
				<p  style="margin-bottom: var(--space-unit);">
					<NuxtLink v-for="tagName in release.tags" :key="tagName"
						:to="`/releases?tags=${tagName}`"
						class="link"
					>
						<Tag :name="tagName" style="color: var(--text-color-highlight);" />
					</NuxtLink>
				</p>
				<div v-if="!release.released">
					<iframe v-if="release.links.presave" :src="release.links.presave" frameborder="0" class="presave rounded box-shadow-default" />
					<div v-else>
						<img :src="extractRelativePath(release.thumbnailUrl)" alt="Cover Art" class="rounded squared box-shadow-default release-page-cover-always" />
						<p>Presave coming soon.</p>
					</div>
				</div>
				<div v-else>
					<img :src="extractRelativePath(release.thumbnailUrl)" alt="Cover Art" class="rounded squared box-shadow-default release-page-cover" />
					<h2 style="display: none;">Links</h2>
					<div style="margin-bottom: calc(var(--space-unit) * 3);"></div>
					<LinkGroup :links="release.links" :colors="[release.brightColors[0], release.brightColors[1]]" />
					<div style="margin-bottom: calc(var(--space-unit) * 3);"></div>
					<h2 style="display: none;">Videos</h2>
					<div style="
						display: flex;
						flex-direction: column;
						gap: var(--space-unit);
					">
						<div v-for="embed in release.links.youtubeEmbeds" :key="embed" style="
							aspect-ratio: 16 / 9;
							max-width: 500px;
						" class="rounded box-shadow-default">
							<iframe width="100%" height="100%" :src="embed" frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</div>
			<div v-if="release.lyrics">
				<h2>Lyrics</h2>
				<p>Written by {{ release.lyricists.map(l => l.name).join(", ") }}</p>
				<div style="margin-bottom: var(--space-unit);"></div>
				<p class="lyrics" v-html="newLineToHtml(release.lyrics)"></p>
			</div>
			<div>
				<h2>Contributors</h2>
				<div style="
					display: flex;
					flex-direction: column;
					gap: var(--space-unit);
				">
					<div v-for="participant in release.participants" :key="participant.displayName">
						<div style="display: flex; flex-direction: row; gap: calc(var(--space-unit) / 2); margin-bottom: calc(var(--space-unit) / 2);">
							<h3>{{ participant.displayName }}</h3>
							<p>–</p>
							<p>{{ participant.roles }}</p>
						</div>
						<p>
							<span v-if="participant.contributor.links.instagram"><a class="link" :href="participant.contributor.links.instagram">Instagram&nbsp;↗&#xFE0E;</a> </span>&ZeroWidthSpace;
							<span v-if="participant.contributor.links.youtube"><a class="link" :href="participant.contributor.links.youtube">Youtube&nbsp;↗&#xFE0E;</a> </span>&ZeroWidthSpace;
							<span v-if="participant.contributor.links.spotify"><a class="link" :href="participant.contributor.links.spotify">Spotify&nbsp;↗&#xFE0E;</a> </span>&ZeroWidthSpace;
							<span v-if="participant.contributor.links.website"><a class="link" :href="participant.contributor.links.website">Website&nbsp;↗&#xFE0E;</a></span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { newLineToHtml } from "~/utils/utils"
import { extractRelativePath } from "~/utils/utils"

const config = useRuntimeConfig()
const route = useRoute()

// const release = new Release({
// 	name: "Test Release",
// 	primaryArtists: "Myself and everyone else",
// 	thumbnailUrl: "https://tobeybeats.com/images/covers/Under%20Water%20Cover.jpeg",
// 	releaseDate: "2025/01/01",
// 	tags: ["nice", "superb"],
// 	lyrics: "Es war einmal\neine Person",
// 	links: {
// 		website: "",
// 		presave: "https://ffm.to/tobeybeats-lizann-under-water"
// 	},
// 	participants: [
// 		{
// 			displayName: "Myselfff",
// 			roles: "Maker",
// 			contributor: {
// 				name: "Myself",
// 				links: {}
// 			}
// 		}
// 	]
// })

const { data, error } = await useFetch<ConstructorParameters<typeof Release>[0]>(`/releases/${route.params.id}`, {
	baseURL: config.public.baseUrlApi
})

if (!data.value) {
	if (error.value?.statusCode == 404) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Page Not Found'
		})
	}
	throw error
}
const release = new Release(data.value)


useHead({
	title: () => `${release.primaryArtists} – ${release.name}`
})
useSeoMeta({
	title: () => `${release.primaryArtists} – ${release.name}`,
	ogTitle: () => `${release.primaryArtists} – ${release.name}`,
	description: () => `Listen to "${release.name}" by ${release.primaryArtists} on your favorite platform!`,
	ogDescription: () => `Listen to "${release.name}" by ${release.primaryArtists} on your favorite platform!`,
	ogUrl: `${config.public.baseUrl}${extractRelativePath(release.links.website)}`,
	ogImage: `${config.public.baseUrl}${extractRelativePath(release.thumbnailUrl)}`,
	ogImageHeight: 2000,
	ogImageWidth: 2000,
	ogType: "music.album"
})
</script>

<style lang="scss">
.release-page-cover {
	width: 100%;
	aspect-ratio: 1 / 1;
	@media screen and (min-width: 500px) {
		display: none;
	}
}

.release-page-cover-always {
	width: min(100%, 20rem);
	aspect-ratio: 1 / 1;
}

.lyrics {
	font-style: italic;
}

iframe.presave {
	width: 100%;
	height: 50rem;
	@media screen and (max-width: 430px) {
		width: 120%;
		transform: scale(0.833);
		transform-origin: top left;
	}
}

.grid-2-1 {
	grid-template-columns: 1fr 1fr;
	grid-template-rows: min-content 1fr;
	grid-template-areas:
		"top right"
		"bottom right"
	;

	&>:nth-child(1) {
		grid-column: top;
		grid-row: top;
	}
	&>:nth-child(2) {
		grid-column: right;
		grid-row: right;
	}
	&>:nth-child(3) {
		grid-column: bottom;
		grid-row: bottom;
	}

	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr auto;
	}

	@media screen and (max-width: 880px) {
		grid-template-columns: 1fr;
		grid-template-areas: 
			"top"
			"right"
			"bottom"
		;
		grid-template-rows: auto;
	}
}
</style>

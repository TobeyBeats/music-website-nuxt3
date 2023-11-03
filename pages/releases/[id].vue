<template>
	<h1>{{ release.name }}</h1>

	<div class="grid-default grid-2-1">
		<div>
			<p class="display-h2" style="margin-bottom: var(--space-unit);">{{ release.primaryArtists }}</p>
			<p style="margin-bottom: var(--space-unit);">{{ release.releaseDate.toLocaleDateString() }}</p>
			<p>
				<NuxtLink v-for="tagName in release.tags" :key="tagName"
					:to="`/releases?tags=${tagName}`"
					class="link"
				>
					<Tag :name="tagName" style="color: var(--text-color-highlight);" />
				</NuxtLink>
			</p>
			<h2 style="display: none;">Links</h2>
			<div style="margin-bottom: calc(var(--space-unit) * 3);"></div>
			<div class="link-group">
				<ButtonSection :to="release.links.spotify" :colors="[release.brightColors[0], release.brightColors[1]]">
					<IconText :image-src="constants.assets.spotifyLogoWhite"><span class="link">Spotify ↗</span></IconText>
				</ButtonSection>
				<ButtonSection :to="release.links.amazon" :colors="[release.brightColors[0], release.brightColors[1]]">
					<IconText :image-src="constants.assets.amazonLogoWhite"><span class="link">Amazon Music ↗</span></IconText>
				</ButtonSection>
				<ButtonSection :to="release.links.apple" :colors="[release.brightColors[0], release.brightColors[1]]">
					<IconText :image-src="constants.assets.appleMusicLogoWhite"><span class="link">Apple Music ↗</span></IconText>
				</ButtonSection>
				<ButtonSection :to="release.links.youtube" :colors="[release.brightColors[0], release.brightColors[1]]">
					<IconText :image-src="constants.assets.youtubeLogoWhite"><span class="link">Youtube ↗</span></IconText>
				</ButtonSection>
				<ButtonSection :to="release.links.deezer" :colors="[release.brightColors[0], release.brightColors[1]]">
					<IconText :image-src="constants.assets.deezerLogoWhite"><span class="link">Deezer ↗</span></IconText>
				</ButtonSection>
				<ButtonSection :to="release.links.soundcloud" :colors="[release.brightColors[0], release.brightColors[1]]">
					<IconText :image-src="constants.assets.soundcloudLogoWhite"><span class="link">Soundcloud ↗</span></IconText>
				</ButtonSection>
			</div>

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

			<div style="margin-bottom: calc(var(--space-unit) * 3);"></div>

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
						<span v-if="participant.contributor.links.instagram"><a class="link" :href="participant.contributor.links.instagram">Instagram</a> </span>
						<span v-if="participant.contributor.links.youtube"><a class="link" :href="participant.contributor.links.youtube">Youtube</a> </span>
						<span v-if="participant.contributor.links.spotify"><a class="link" :href="participant.contributor.links.spotify">Spotify</a> </span>
						<span v-if="participant.contributor.links.website"><a class="link" :href="participant.contributor.links.website">Website</a></span>
					</p>
				</div>
			</div>
		</div>
		<div v-if="release.lyrics">
			<h2>Lyrics</h2>
			<p>Written by {{ release.lyricists.map(l => l.name).join(", ") }}</p>
			<div style="margin-bottom: var(--space-unit);"></div>
			<p class="lyrics" v-html="newLineToHtml(release.lyrics)"></p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { newLineToHtml, setActiveColors } from "~/utils/utils"

const config = useRuntimeConfig()
const route = useRoute()

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

</script>

<style lang="scss">
.lyrics {
	font-style: italic;
}

.grid-2-1 {
	grid-template-columns: 1fr 1fr;

	@media screen and (max-width: 1200px) {
		grid-template-columns: 2fr 1fr;
	}

	@media screen and (max-width: 880px) {
		grid-template-columns: 1fr;
	}
}
</style>

<template>
	<h1 style="display: none;">Home</h1>
	<div class="grid-default">
		<section>
			<h2 class="display-h1">
				Artist Links
			</h2>
			<div class="link-group">
				<ButtonSection :to="tobeybeatsLinks.spotify" :colors="colorsDefault" target="_blank">
					<IconText :image-src="constants.assets.spotifyLogoWhite"><span class="link">Spotify ↗</span></IconText>
				</ButtonSection>
				<ButtonSection :to="tobeybeatsLinks.amazon" :colors="colorsDefault" target="_blank">
					<IconText :image-src="constants.assets.amazonLogoWhite"><span class="link">Amazon Music ↗</span></IconText>
				</ButtonSection>
				<ButtonSection :to="tobeybeatsLinks.apple" :colors="colorsDefault" target="_blank">
					<IconText :image-src="constants.assets.appleMusicLogoWhite"><span class="link">Apple Music ↗</span></IconText>
				</ButtonSection>
				<ButtonSection :to="tobeybeatsLinks.youtube" :colors="colorsDefault" target="_blank">
					<IconText :image-src="constants.assets.youtubeLogoWhite"><span class="link">Youtube ↗</span></IconText>
				</ButtonSection>
				<ButtonSection :to="tobeybeatsLinks.deezer" :colors="colorsDefault" target="_blank">
					<IconText :image-src="constants.assets.deezerLogoWhite"><span class="link">Deezer ↗</span></IconText>
				</ButtonSection>
				<ButtonSection :to="tobeybeatsLinks.soundcloud" :colors="colorsDefault" target="_blank">
					<IconText :image-src="constants.assets.soundcloudLogoWhite"><span class="link">Soundcloud ↗</span></IconText>
				</ButtonSection>
			</div>
		</section>

		<section>
			<h2 class="display-h1">
				New Release
			</h2>
			<ReleaseItem :release="release" />
		</section>
	</div>
</template>

<script setup lang="ts">
import { Release } from "~/utils/releases"
const colorsDefault: [string, string] = [constants.colorsDefault[0], constants.colorsDefault[1]]

const config = useRuntimeConfig()

const { data: data1, error: error1 } = await useFetch<ConstructorParameters<typeof Release>[0]>("/releases/under-water", {
	baseURL: config.public.baseUrlApi
})

if (!data1.value) {
	throw error1
}
const release = new Release(data1.value)

const { data: data2, error: error2 } = await useFetch<{
	spotify: string,
	amazon: string,
	apple: string,
	youtube: string,
	deezer: string,
	soundcloud: string
}>("/tobeybeats-links", {
	baseURL: config.public.baseUrlApi
})

if (!data2.value) {
	throw error2
}

const tobeybeatsLinks = data2.value
</script>

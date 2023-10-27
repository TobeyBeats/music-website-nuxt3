<template>
	<h1 style="display: none;">Home</h1>
	<div class="home-grid">
		<section>
			<h2 class="display-h1">
				Artist Links
			</h2>
			<div class="link-group">
				<ButtonSection to="" :colors="colorsDefault">
					<IconText :image-src="constants.assets.spotifyLogoWhite"><span class="link">Spotify ↗</span></IconText>
				</ButtonSection>
				<ButtonSection to="" :colors="colorsDefault">
					<IconText :image-src="constants.assets.amazonLogoWhite"><span class="link">Amazon Music ↗</span></IconText>
				</ButtonSection>
				<ButtonSection to="" :colors="colorsDefault">
					<IconText :image-src="constants.assets.appleMusicLogoWhite"><span class="link">Apple Music ↗</span></IconText>
				</ButtonSection>
				<ButtonSection to="" :colors="colorsDefault">
					<IconText :image-src="constants.assets.youtubeLogoWhite"><span class="link">Youtube ↗</span></IconText>
				</ButtonSection>
				<ButtonSection to="" :colors="colorsDefault">
					<IconText :image-src="constants.assets.deezerLogoWhite"><span class="link">Deezer ↗</span></IconText>
				</ButtonSection>
				<ButtonSection to="" :colors="colorsDefault">
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

const { data } = await useFetch<ConstructorParameters<typeof Release>[0]>("/releases/under-water", {
	baseURL: process.env.BASE_URL_API
})
if (!data.value) {
	throw createError("Something went wrong fetching a release")
}
const release = new Release(data.value)
</script>

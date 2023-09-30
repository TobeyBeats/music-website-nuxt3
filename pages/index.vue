<template>
	<h1 style="display: none;">Home</h1>
	<div class="home-grid">
		<section>
			<h2 class="display-h1" style="margin-bottom: calc(2 * var(--space-unit));">
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
			<h2 class="display-h1" style="margin-bottom: calc(2 * var(--space-unit));">
				New Release
			</h2>
			<ReleaseItem :release="new Release({name: 'Lululul', links: {website: 'https://eee.com/releases/bla'}, participants: [], primaryArtists: 'Myself', releaseDate: new Date(), thumbnailUrl: 'https://foo.bla/images/covers/under%20water%20cover.jpg'})" />
		</section>
	</div>
</template>

<style>
.link-group {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: calc(2 * var(--space-unit));
	max-width: 400px;
}

.home-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: calc(4 * var(--space-unit));
}
</style>

<script setup lang="ts">
import { Release } from "~/utils/releases"
const colorsDefault: [string, string] = [constants.colorsDefault[0], constants.colorsDefault[1]]
</script>

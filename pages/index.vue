<template>
	<h1 style="display: none;">Home</h1>
	<div class="home-grid">
		<section>
			<h2 class="display-h1" style="margin-bottom: calc(2 * var(--space-unit));">
				Artist Links
			</h2>
			<div class="link-group">
				<ButtonSection to="#" :colors="colorsDefault">
					<IconText :image-src="constants.assets.spotifyLogoWhite" class="inner-link">Spotify ↗</IconText>
				</ButtonSection>
				<ButtonSection to="#" :colors="colorsDefault">
					<IconText :image-src="constants.assets.amazonLogoWhite" class="inner-link">Amazon Music ↗</IconText>
				</ButtonSection>
				<ButtonSection to="#" :colors="colorsDefault">
					<IconText :image-src="constants.assets.appleMusicLogoWhite" class="inner-link">Apple Music ↗</IconText>
				</ButtonSection>
				<ButtonSection to="#" :colors="colorsDefault">
					<IconText :image-src="constants.assets.youtubeLogoWhite" class="inner-link">Youtube ↗</IconText>
				</ButtonSection>
				<ButtonSection to="#" :colors="colorsDefault">
					<IconText :image-src="constants.assets.deezerLogoWhite" class="inner-link">Deezer ↗</IconText>
				</ButtonSection>
				<ButtonSection to="#" :colors="colorsDefault">
					<IconText :image-src="constants.assets.soundcloudLogoWhite" class="inner-link">Soundcloud ↗</IconText>
				</ButtonSection>
			</div>
		</section>

		<section>
			<h2 class="display-h1" style="margin-bottom: calc(2 * var(--space-unit));">
				New Release
			</h2>
			<ButtonSection to="/releases" :colors="['green', 'yellow']">
				<div style="
					display: flex;
					flex-direction: row;
					gap: var(--space-unit);
				">
					<img src="/images/covers/under%20water%20cover.jpg" alt="Cover Art" width="200" height="200" class="rounded box-shadow-default" />
					<div style="
						display: flex;
						flex-direction: column;
						gap: calc(var(--space-unit) / 2);
					">
						<p class="display-h2">Under Water</p>
						<p>TobeyBeats & LizAnn</p>
						<p class="faded">09.12.2022</p>
						<p style="margin-top: auto;" class="inner-link">Listen now →</p>
					</div>
				</div>
			</ButtonSection>
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
const colorsDefault: [string, string] = [constants.colorsDefault[0], constants.colorsDefault[1]]
</script>

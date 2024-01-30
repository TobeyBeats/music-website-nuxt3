<template>
	<div class="link-group">
		<ButtonSection :to="links.spotify" :colors="colors" target="_blank" v-if="!hideButtonIfInactive || links.spotify">
			<IconText :image-src="constants.assets.spotifyLogoWhite"><span class="link">Spotify&nbsp;↗&#xFE0E;</span></IconText>
		</ButtonSection>
		<ButtonSection :to="links.amazon" :colors="colors" target="_blank" v-if="!hideButtonIfInactive || links.amazon">
			<IconText :image-src="constants.assets.amazonLogoWhite"><span class="link">Amazon&nbsp;Music&nbsp;↗&#xFE0E;</span></IconText>
		</ButtonSection>
		<ButtonSection :to="links.apple" :colors="colors" target="_blank" v-if="!hideButtonIfInactive || links.apple">
			<IconText :image-src="constants.assets.appleMusicLogoWhite"><span class="link">Apple&nbsp;Music&nbsp;↗&#xFE0E;</span></IconText>
		</ButtonSection>
		<ButtonSection :to="links.youtube" :colors="colors" target="_blank" v-if="!hideButtonIfInactive || links.youtube">
			<IconText :image-src="constants.assets.youtubeLogoWhite"><span class="link">Youtube&nbsp;↗&#xFE0E;</span></IconText>
		</ButtonSection>
		<ButtonSection :to="links.deezer" :colors="colors" target="_blank" v-if="!hideButtonIfInactive || links.deezer">
			<IconText :image-src="constants.assets.deezerLogoWhite"><span class="link">Deezer&nbsp;↗&#xFE0E;</span></IconText>
		</ButtonSection>
		<ButtonSection :to="links.soundcloud" :colors="colors" target="_blank" v-if="!hideButtonIfInactive || links.soundcloud">
			<IconText :image-src="constants.assets.soundcloudLogoWhite"><span class="link">Soundcloud&nbsp;↗&#xFE0E;</span></IconText>
		</ButtonSection>
		<ButtonSection :to="links.instagram" :colors="colors" target="_blank" v-if="links.instagram">
			<IconText :image-src="constants.assets.instagramLogoWhite"><span class="link">Instagram&nbsp;↗&#xFE0E;</span></IconText>
		</ButtonSection>
	</div>
</template>

<script setup lang="ts">
import type { MusicLinks } from '~/utils/utils';

const { links, colors, hideButtonIfInactive = false } = defineProps<{
	links: MusicLinks & { instagram?: string },
	colors: [string, string],
	hideButtonIfInactive?: boolean
}>()
</script>

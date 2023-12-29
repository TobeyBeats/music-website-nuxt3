<!-- to be overridden -->

<template>
	<div>
		<h1 style="display: none;">Home</h1>
		<div class="grid-default">
			<section>
				<h2 class="display-h1">
					Artist Links
				</h2>
				<LinkGroup :links="{}" :colors="colorsDefault" />
			</section>
			<section>
				<h2 class="display-h1">
					New Release
				</h2>
				<ReleaseItem :release="new Release({
					name: 'Placeholder',
					primaryArtists: 'No One',
					releaseDate: new Date(6, 9, 1969),
					thumbnailUrl: '',
					tags: ['vocals', 'collaboration'],
					links: {website: 'about:blank'},
					participants: []
				})" />
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Release } from "~/utils/releases"
const colorsDefault: [string, string] = [constants.colorsDefault[0], constants.colorsDefault[1]]

const config = useRuntimeConfig()

useHead({
	title: `${config.public.ownerArtistName} – Home`
})
useSeoMeta({
	title: `${config.public.ownerArtistName} – Home`,
	ogTitle: `${config.public.ownerArtistName} – Home`,
	ogUrl: `${config.public.baseUrl}/`,
	ogType: "website"
})
</script>

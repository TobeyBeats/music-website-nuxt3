<!-- to be overridden -->

<template>
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
</template>

<script setup lang="ts">
import { Release } from "~/utils/releases"
const colorsDefault: [string, string] = [constants.colorsDefault[0], constants.colorsDefault[1]]
</script>

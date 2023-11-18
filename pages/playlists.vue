<template>
	<h1>Playlists</h1>
	<div class="grid-playlists">
		<PlaylistItem v-for="playlist in playlists" :key="playlist.name" :playlist="playlist" />
	</div>
</template>

<style lang="scss">
.grid-playlists {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: calc(4 * var(--space-unit));

	@media screen and (max-width: 1070px) {
		grid-template-columns: 1fr;
	}
}
</style>

<script setup lang="ts">
import { type Playlist } from '~/utils/playlists';

const config = useRuntimeConfig()

const { data, error } = config.public.baseUrlApi ? await useFetch<Playlist[]>("/playlists", {
	baseURL: config.public.baseUrlApi
}) : { data: null, error: null }

if (error?.value) {
	throw error
}

const playlists = data && data.value ? data.value : [
	{ name: 'Placeholder', description: 'Description', thumbnailUrl: '', brightColors: ['ffffff', 'ffffff'] as [string, string], links: { spotify: 'about:blank', apple: 'about:blank' } }
]
playlists.forEach(playlist => playlist.brightColors = playlist.brightColors.map(c => "#" + c) as [string, string])
</script>

<template>
	<div class="playlist-item">
		<img :src="extractRelativePath(playlist.thumbnailUrl)" width="250" height="250" alt="Cover Art" class="rounded squared box-shadow-default"
			style="min-width: 250px;"
		/>
		<div style="
			display: flex;
			flex-direction: column;
			gap: calc(var(--space-unit) / 2);
		">
			<h2 style="margin-bottom: calc(var(--space-unit) / 4);">{{ playlist.name }}</h2>
			<p style="margin-bottom: var(--space-unit);">{{ playlist.description }}</p>
			<LinkGroup :links="playlist.links" :colors="playlist.brightColors" :hide-button-if-inactive="true" class="playlist-item-links" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { type Playlist } from "~/utils/playlists"
import { extractRelativePath } from "~/utils/utils"
const props = defineProps<{
	playlist: Playlist
}>()
</script>

<style lang="scss">
$horizontal-breakpoint: 520px;

.playlist-item {
	display: flex;
	flex-direction: row;
	gap: var(--space-unit);

	.playlist-item-links {
		margin-top: auto;
		display: flex;
		flex-direction: row;
		gap: calc(var(--space-unit) * 2);
		margin-left: auto;
		flex-wrap: wrap;

		@media screen and (max-width: $horizontal-breakpoint) {
			margin-left: 0px;
		}
	}

	@media screen and (max-width: $horizontal-breakpoint) {
		flex-direction: column;

		& > img {
			width: 100%;
			height: auto;
		}
	}
}
</style>

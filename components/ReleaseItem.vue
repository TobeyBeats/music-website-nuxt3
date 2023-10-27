<template>
	<ButtonSection :to="extractRelativePath(release.links.website)" :colors="[release.brightColors[0], release.brightColors[1]]">
		<div style="
			display: flex;
			flex-direction: row;
			gap: var(--space-unit);
		">
			<img :src="extractRelativePath(release.thumbnailUrl)" alt="Cover Art" width="200" height="200" class="rounded box-shadow-default" />
			<div style="
				display: flex;
				flex-direction: column;
				gap: calc(var(--space-unit) / 2);
			">
				<p class="display-h2">{{ release.name }}</p>
				<p>{{ release.primaryArtists }}</p>
				<p class="faded">{{ release.releaseDate.toLocaleDateString() }}</p>
				<p style="margin-top: auto;"><span class="link">Listen now →</span></p>
			</div>
		</div>
	</ButtonSection>
</template>

<script setup lang="ts">
import { Release } from "~/utils/releases"
import { extractRelativePath } from "~/utils/utils"
const props = defineProps<{
	release: Release
}>()
</script>

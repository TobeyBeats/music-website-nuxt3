<template>
	<ButtonSection :to="extractRelativePath(release.links.website)" :colors="[release.brightColors[0], release.brightColors[1]]">
		<div class="release-item">
			<img :src="release.thumbnailUrl" width="200" height="200" alt="Cover Art" class="rounded squared box-shadow-default"
				style="min-width: 200px;"
			/>
			<div style="
				display: flex;
				flex-direction: column;
				gap: calc(var(--space-unit) / 2);
			">
				<h2 style="margin-bottom: calc(var(--space-unit) / 4);">{{ release.name }}</h2>
				<p style="margin-bottom: calc(var(--space-unit) / 4);">{{ release.primaryArtists }}</p>
				<p class="faded" style="margin-bottom: calc(var(--space-unit) / 4);">{{ release.releaseDate.toLocaleDateString() }}</p>
				<p style="margin-bottom: calc(var(--space-unit) / 4);">
					<Tag v-for="tagName in release.tags" :key="tagName" :name="tagName" />
				</p>
				<p style="margin-top: auto;">
					<NuxtLink class="link" :to="extractRelativePath(release.links.website)">
						{{ props.release.released ? "Listen now →&#xFE0E;" : "Presave now →&#xFE0E;" }}
					</NuxtLink>
				</p>
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

<style lang="scss">
.release-item {
	display: flex;
	flex-direction: row;
	gap: var(--space-unit);

	@media screen and (max-width: 490px) {
		flex-direction: column;

		& > img {
			width: 100%;
			height: auto;
		}
	}
}
</style>

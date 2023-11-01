<template>
	<div style="
		display: flex;
		flex-direction: row;
		align-items: end;
		margin-bottom: calc(3 * var(--space-unit));
		gap: var(--space-unit);
	">
		<h1 style="margin-bottom: 0px;">Releases</h1>
		<div style="
			margin-left: auto;
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: var(--space-unit);
		">
			<p class="tags-group">
				<TagButton v-for="tagName in getTagsQuery()" :key="tagName" :name="tagName" />
			</p>
			<Menu as="div" style="position: relative;">
				<MenuButton class="link">Tags ⏷</MenuButton>
				<MenuItems class="dropdown-box box-shadow-default" style="
					position: absolute;
					right: 0;
					top: calc(var(--space-unit) * 2);
					display: flex;
					flex-direction: column;
					gap: calc(var(--space-unit) / 2);
					align-items: start;
				">
					<MenuItem v-for="tagName in [...new Set(releases.map(r => r.tags || []).flat(1))]" :key="tagName">
						<TagButton :name="tagName" style="margin-right: 0px;" />
					</MenuItem>
				</MenuItems>
			</Menu>
		</div>
		<input type="text" placeholder="Search Releases" class="display-p" />
	</div>
	<div class="grid-default">
		<ReleaseItem :release="r" v-for="r in releases" :key="r.name" />
	</div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { Release } from "~/utils/releases"

const { currentRoute } = useRouter()

const config = useRuntimeConfig()

const { data, error } = await useFetch<ConstructorParameters<typeof Release>[0][]>("/releases", {
	baseURL: config.public.baseUrlApi
})
if (!data.value) {
	throw error
}
const releases: Release[] = data.value.map(rawItem => new Release(rawItem))

function getTagsQuery() {
	let q = currentRoute.value.query["tags"] || []
	if (!Array.isArray(q)) {
		q = [q]
	}
	return q.map(x => String(x))
}
</script>
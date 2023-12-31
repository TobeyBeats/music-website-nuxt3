<template>
	<div class="releases-top-row">
		<h1 style="margin-bottom: 0px;">Releases</h1>
		<div class="releases-top-row-search-results">
			<p v-if="getSearchInputQuery() || getTagsQuery()">
				Search results:
			</p>
			<p v-if="getSearchInputQuery()">
				"<span style="font-weight: 800;">{{ getSearchInputQuery() }}</span>"
			</p>
			<p>
				<TagButton v-for="tagName in getTagsQuery()" :key="tagName" :name="tagName" />
			</p>
		</div>
		<div style="
			display: flex;
			flex-direction: row;
			gap: var(--space-unit);
			align-items: center;
			margin-bottom: -5px;
		">
			<input type="text" placeholder="Search Releases" class="display-p"
				@change="pushSearchQuery"
				:value="getSearchInputQuery()"
			/>
			<Menu as="div" style="position: relative;">
				<MenuButton class="link">Tags ⏷</MenuButton>
				<Transition name="fade">
					<MenuItems class="dropdown-box box-shadow-default" style="
						position: absolute;
						right: 0;
						top: calc(var(--space-unit) * 2);
						display: flex;
						flex-direction: column;
						gap: calc(var(--space-unit) / 2);
						align-items: start;
					">
						<MenuItem v-for="tagName in [...new Set(releasesAll.map(r => r.tags || []).flat(1))]" :key="tagName">
							<TagButton :name="tagName" style="margin-right: 0px;" />
						</MenuItem>
					</MenuItems>
				</Transition>
			</Menu>
		</div>
	</div>
	<p class="display-h2" v-if="releasesFedders.length === 0" style="margin-block: 0px;">No search results in this section.</p>
	<div class="grid-default">
		<ReleaseItem :release="r" v-for="r in releasesFedders" :key="r.name" />
	</div>
	<p class="display-h2" style="margin-block: calc(var(--space-unit) * 4); font-size: 2rem;">
		Releases as
		<Popover>
			TobeyBeats&ZeroWidthSpace;<sup style="font-size: 1.5rem; opacity: 0.75;">ℹ</sup>
			<template #body>
				<p class="display-p" style="background-color: transparent;">TobeyBeats is Fedders' old alias, now used as side project.</p>
			</template>
		</Popover>
	</p>
	<p class="display-h2" v-if="releasesTobeyBeats.length === 0" style="margin-block: 0px;">No search results in this section.</p>
	<div class="grid-default">
		<ReleaseItem :release="r" v-for="r in releasesTobeyBeats" :key="r.name" />
	</div>
</template>

<style lang="scss">
.releases-top-row {
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	margin-bottom: calc(4 * var(--space-unit));
	gap: var(--space-unit);

	.releases-top-row-search-results {
		margin-left: auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--space-unit);
	}

	@media screen and (max-width: 1100px) {
		flex-direction: column;
		align-items: flex-start;

		.releases-top-row-search-results {
			margin-left: 0px;
		}
	}
}
</style>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const { currentRoute, push } = useRouter()

const config = useRuntimeConfig()

const { data: dataTobeyBeats } = config.public.baseUrlApi ? await useFetch<ConstructorParameters<typeof Release>[0][]>("/releases", {
	baseURL: config.public.baseUrlApi,
	query: {
		"primary_artist": "tobeybeats"
	}
}) : { data: null } // TODO: add check in app.vue that throws error if env variable is not defined, like in Medienprojekt!!!!! (in base music-website probably)

const { data: dataFedders } = config.public.baseUrlApi ? await useFetch<ConstructorParameters<typeof Release>[0][]>("/releases", {
	baseURL: config.public.baseUrlApi,
	query: {
		"primary_artist": "fedders"
	}
}) : { data: null }

const releasesTobeyBeats = computed(() => computeReleases(dataTobeyBeats))
const releasesFedders = computed(() => computeReleases(dataFedders))
const releasesAll = computed(() => [...releasesFedders.value, ...releasesTobeyBeats.value])


function computeReleases(data: Ref<ConstructorParameters<typeof Release>[0][] | null> | null) {
	if (!data || !data.value) {
		return [new Release({
			name: 'Placeholder',
			primaryArtists: 'No One',
			releaseDate: new Date(6, 9, 1969),
			thumbnailUrl: '',
			tags: ['vocals', 'collaboration'],
			links: {website: 'about:blank'},
			participants: []
		})]
	}
	return data.value.map(rawItem => new Release(rawItem)).filter(
		release => getTagsQuery().every(
			tag => release.tags.includes(tag)
		) && getSearchInputQueryArray().every(
			element => release.name.toLowerCase().includes(element.toLowerCase())
			|| release.primaryArtists.toLowerCase().includes(element.toLowerCase())
		)
	)
}

function getTagsQuery() {
	let q = currentRoute.value.query["tags"] || []
	if (!Array.isArray(q)) {
		q = [q]
	}
	return q.map(x => String(x))
}

function getSearchInputQuery() {
	let q = currentRoute.value.query["search"] || ""
	if (Array.isArray(q)) {
		q = q.join(" ")
	}
	return q
}

function getSearchInputQueryArray() {
	let q = currentRoute.value.query["search"] || ""
	if (!Array.isArray(q)) {
		q = q.split(" ")
	}
	return q.map(x => String(x))
}

function pushSearchQuery(event: Event) {
	push({
		query: {
			...currentRoute.value.query,
			"search": (event.target as HTMLInputElement).value || undefined
		}
	})
}


useHead({
	title: `${config.public.ownerArtistName} – Releases`
})
useSeoMeta({
	title: `${config.public.ownerArtistName} – Releases`,
	ogTitle: `${config.public.ownerArtistName} – Releases`,
	description: `Listen to ${config.public.ownerArtistName}'s music releases on your favorite platform!`,
	ogDescription: `Listen to ${config.public.ownerArtistName}'s music releases on your favorite platform!`,
	ogUrl: `${config.public.baseUrl}/releases`,
	ogType: "website"
})
</script>
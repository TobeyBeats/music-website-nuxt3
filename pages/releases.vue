<template>
	<h1>Releases</h1>
	<div class="home-grid">
		<ReleaseItem :release="r" v-for="r in releases" :key="r.name" />
	</div>
</template>

<script setup lang="ts">
import { Release } from "~/utils/releases"

const { data } = await useFetch<ConstructorParameters<typeof Release>[0][]>("/releases", {
	baseURL: process.env.BASE_URL_API
})
if (!data.value) {
	throw createError("Something went wrong fetching releases")
}
const releases: Release[] = data.value.map(rawItem => new Release(rawItem))
</script>
<template>
	<h1>Releases</h1>
	<div class="grid-default">
		<ReleaseItem :release="r" v-for="r in releases" :key="r.name" />
	</div>
</template>

<script setup lang="ts">
import { Release } from "~/utils/releases"

const config = useRuntimeConfig()

const { data, error } = await useFetch<ConstructorParameters<typeof Release>[0][]>("/releases", {
	baseURL: config.public.baseUrlApi
})
if (!data.value) {
	throw error
}
const releases: Release[] = data.value.map(rawItem => new Release(rawItem))
</script>
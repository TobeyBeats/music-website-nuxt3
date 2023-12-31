<template>
	<h1 style="display: none;">Home</h1>
	<div class="grid-default">
		<section>
			<h2 class="display-h1">
				Artist Links
			</h2>
			<LinkGroup :links="tobeybeatsLinks" :colors="colorsDefault" />
		</section>

		<section>
			<h2 class="display-h1">
				New Release
			</h2>
			<ReleaseItem :release="release" />
		</section>
	</div>
</template>

<script setup lang="ts">
const colorsDefault: [string, string] = [constants.colorsDefault[0], constants.colorsDefault[1]]

const config = useRuntimeConfig()

const { data: data1, error: error1 } = await useFetch<ConstructorParameters<typeof Release>[0]>("/releases/under-water", {
	baseURL: config.public.baseUrlApi
})

if (!data1.value) {
	throw error1
}
const release = new Release(data1.value)

const { data: data2, error: error2 } = await useFetch<MusicLinks>("/tobeybeats-links", {
	baseURL: config.public.baseUrlApi
})

if (!data2.value) {
	throw error2
}

const tobeybeatsLinks = data2.value


useHead({
	title: `${config.public.ownerArtistName}`
})
useSeoMeta({
	title: `${config.public.ownerArtistName}`,
	ogTitle: `${config.public.ownerArtistName}`,
	description: `${config.public.ownerArtistName} is an electronic music artist from Germany. Have a look!`,
	ogDescription: `${config.public.ownerArtistName} is an electronic music artist from Germany. Have a look!`,
	ogUrl: `${config.public.baseUrl}`,
	ogImage: `${config.public.baseUrl}/images/profile%20picture.jpg`,
	ogImageHeight: 2000,
	ogImageWidth: 2000,
	ogType: "website"
})
</script>

<template>
	<div>
		<h1>Contact</h1>
		<div style="
			display: flex;
			flex-direction: column;
			gap: var(--space-unit);
		">
			<p v-for="contact in (config.public.contact as {
				'type': string,
				'uri': string,
				'display': string
			}[])" :key="contact.uri">
				<b>{{ contact.type }}</b>: <a class="link" :href="contact.uri">{{ contact.display }}</a>
			</p>
		</div>
	</div>
</template>

<style lang="scss">
</style>

<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
	title: `${config.public.ownerArtistName} – Contact`
})
useSeoMeta({
	title: `${config.public.ownerArtistName} – Contact`,
	ogTitle: `${config.public.ownerArtistName} – Contact`,
	description: `Reach out to ${config.public.ownerArtistName}!`,
	ogDescription: `Reach out to ${config.public.ownerArtistName}!`,
	ogUrl: `${config.public.baseUrl}/contact`,
	ogType: "website"
})
</script>

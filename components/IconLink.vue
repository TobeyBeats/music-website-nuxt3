<template>
	<a :href="href" style="
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.33rem;
	">
		<img :src="imageSrc" alt="" style="width: 27px; height: auto; aspect-ratio: 1 / 1;" />
		<slot />
	</a>
</template>

<script setup lang="ts">
const props = defineProps<{
	href: string,
	imageSrc: string
}>();
</script>

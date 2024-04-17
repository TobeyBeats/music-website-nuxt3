<template>
	<span style="
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.33rem;
	">
		<img :src="imageSrc" alt="" style="width: 27px; height: auto; aspect-ratio: 1 / 1;" />
		<span v-if="$slots.default">
			<slot />
		</span>
	</span>
</template>

<script setup lang="ts">
const props = defineProps<{
	imageSrc: string
}>();
</script>

<template>
	<NuxtLink :to="to">
		<div class="button-section-wrapper">
			<div class="button-section-background-blur" :style="`
				background-image: linear-gradient(to bottom right, ${colors[0]}, ${colors[1]});
				`"></div>
			<div class="button-section-background"></div>
			<div style="position: relative; z-index: 1;">
				<slot />
			</div>
		</div>
	</NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
	to: string,
	colors: [string, string]
}>()
</script>

<style lang="scss">
.button-section-wrapper {
	--background-padding: 1rem;

	position: relative;
	padding: var(--background-padding);
	margin: calc(0px - var(--background-padding));

	&:hover, &:focus-visible {
		// text-decoration-color: transparent;

		.button-section-background-blur {
			opacity: 0.9;
		}
		.button-section-background {
			opacity: 0.75;
		}

		.link {
			text-decoration-color: currentColor;
		}
	}
}

.button-section-background {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	border-radius: var(--background-padding);
	background-color: var(--background-color);
	--blur-amount: 10px;
	backdrop-filter: blur(var(--blur-amount));
	--webkit-backdrop-filter: blur(var(--blur-amount));
	box-shadow: 0px 0px 25px rgba(0, 0, 0, 1);
	opacity: 0;
}

.button-section-background-blur {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	--blur-amount: 50px;
	filter: blur(var(--blur-amount));
	--webkit-filter: blur(var(--blur-amount));
	opacity: 0;
}
</style>

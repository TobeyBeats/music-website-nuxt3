<template>
	<NuxtLink :to="to" class="button-section">
		<div class="button-section-wrapper">
			<div class="button-section-background-blur" :style="`
				background-image: linear-gradient(to bottom right, ${colors[0]}, ${colors[1]});
			`"></div>
			<div class="button-section-background"></div>
			<div class="button-section-slot">
				<slot />
			</div>
		</div>
	</NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
	to: string,
	colors: [string, string]
}>();
</script>

<style lang="scss">
.button-section {

	.button-section-wrapper {
		position: relative;
		--background-padding: 1rem;
		&:hover, &:focus-visible {
			text-decoration-color: transparent;
		}

		.button-section-background-blur {
			position: absolute;
			top: calc(0px - var(--background-padding));
			right: calc(0px - var(--background-padding));
			bottom: calc(0px - var(--background-padding));
			left: calc(0px - var(--background-padding));
			// background-image: linear-gradient(to bottom right, red, blue);
			--blur-amount: 40px;
			filter: blur(var(--blur-amount));
			--webkit-filter: blur(var(--blur-amount));
			opacity: 0;
			z-index: 0;
		}

		.button-section-background {
			position: absolute;
			top: calc(0px - var(--background-padding));
			right: calc(0px - var(--background-padding));
			bottom: calc(0px - var(--background-padding));
			left: calc(0px - var(--background-padding));
			border-radius: 1rem;
			background-color: var(--background-color);
			--blur-amount: 10px;
			backdrop-filter: blur(var(--blur-amount));
			--webkit-backdrop-filter: blur(var(--blur-amount));
			box-shadow: var(--box-shadow-default);
			opacity: 0;
			z-index: 0;
		}
	}

	.button-section-slot {
		position: relative;
		z-index: 1;
	}

	&:hover, &:focus-visible {
		& > .button-section-wrapper {
			& > .button-section-background {
				opacity: 0.5;
			}
			& > .button-section-background-blur {
				opacity: 0.8;
			}
		}
	}
}
</style>

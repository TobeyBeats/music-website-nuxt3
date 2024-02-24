<template>
	<div v-follow-cursor id="cursor-follower" :style="`
		background-image: linear-gradient(to top left, var(--active-color-1), var(--active-color-2));
	`"></div>
</template>

<style lang="scss">
#cursor-follower {
	width: 16.5rem;
	height: 20rem;
	border-radius: 50%;
	position: fixed;
	transform: translate(-50%, -50%);
	z-index: -1;
	pointer-events: none;
	opacity: 0;
	transition: opacity 500ms ease;
	--blur-amount: 80px;
	filter: blur(var(--blur-amount));
	-webkit-filter: blur(var(--blur-amount));
	animation: rotation 4s infinite linear;
}

html:hover #cursor-follower {
	opacity: 0.6;
}

@keyframes rotation {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style>

<script setup lang="ts">
const colorsDefault: [string, string] = [constants.colorsDefault[0], constants.colorsDefault[1]]

const vFollowCursor = {
	mounted: (el: HTMLElement) => {
		if ((window.innerWidth || 0) < 500 || (window.innerHeight || 0) < 500) {
			el.animate({
				left: "150px",
				top: "150px",
				opacity: "0.6"
			}, {
				duration: 0,
				fill: "forwards"
			})
			return
		}
		window.addEventListener("mousemove", (event) => {
			el.animate({
				left: `${event.clientX}px`,
				top: `${event.clientY}px`
			}, {
				duration: 2000,
				fill: "forwards"
			})
		})
	}
}
</script>

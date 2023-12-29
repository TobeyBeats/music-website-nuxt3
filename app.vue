<template>
	<div>
		<NuxtLayout>
			<NuxtPage/>
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
import { setActiveColors } from './utils/utils';

onMounted(() => setActiveColors(constants.colorsDefault[0], constants.colorsDefault[1]))
</script>

<style lang="scss">
:root {
	--background-color: #232323;
	--background-color-50: #23232380;
	--background-color-25: #23232340;
	--text-color-default: #d0d0d0;
	--text-color-highlight: #ffffff;
	--text-color-faded: #d0d0d0a0;
	--box-shadow-default: 0px 0px 25px rgba(0, 0, 0, 0.5);
	--space-unit: 1rem;
	--border-radius-small: 0.3rem;

	--active-color-1: white;
	--active-color-2: white;
}

html {
	min-height: 100vh;
	position: relative;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	border: none;
	overflow: visible;
	transition: all 0.3s;
	text-decoration-color: transparent;
	text-decoration-thickness: 1.5px;
}

body, .display-p {
	font-family: 'Jost';
	font-weight: 500;
	font-size: 15px;
	color: var(--text-color-default);
	background-color: var(--background-color);
}

a {
	color: inherit;
}

p, h3, h4, h5, h6 {
	line-height: 130%;
	&::before {
		content: '';
		display: block;
		height: 0;
		width: 0;
		margin-bottom: -3.5px;
	}
	&::after {
		content: '';
		display: block;
		height: 0;
		width: 0;
		margin-top: -4.5px;
	}
}

h1, .display-h1 {
	font-size: 40px;
	font-weight: 800;
	color: var(--text-color-highlight);
	margin-bottom: calc(4 * var(--space-unit));

	@media screen and (max-width: 420px) {
		font-size: 34px;
	}

	&::after {
		content: '';
		display: block;
		height: 0;
		width: 0;
		margin-top: -15px;
	}
}

h2, .display-h2 {
	font-size: 20px;
	font-weight: 800;
	margin-bottom: var(--space-unit);
	&::before {
		content: '';
		display: block;
		height: 0;
		width: 0;
		margin-bottom: -5.5px;
	}
	&::after {
		content: '';
		display: block;
		height: 0;
		width: 0;
		margin-bottom: -7px;
	}
}

h3, h4, h5, h6 {
	font-size: inherit;
}

.link {
	color: var(--text-color-highlight);
	text-decoration: underline;
	text-decoration-color: transparent;

	&:visited {
		color: var(--text-color-highlight);
	}

	&:hover, &:focus-visible {
		text-decoration-color: currentColor;
	}
}

.router-link-active {
	font-weight: 800;
}

.faded {
	color: var(--text-color-faded);
}

.rounded {
	border-radius: var(--border-radius-small);
	overflow: hidden;
}

.squared {
	aspect-ratio: 1 / 1;
}

.box-shadow-default {
	box-shadow: var(--box-shadow-default);
}

.link-group {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: calc(2 * var(--space-unit));
	max-width: 400px;

	@media screen and (max-width: 430px) {
		grid-template-columns: 1fr;
	}
}

.grid-default {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: calc(4 * var(--space-unit));

	@media screen and (max-width: 980px) {
		grid-template-columns: 1fr;
	}
}

.dropdown-box {
	background-color: var(--background-color-50);
	--filter: blur(20px);
	backdrop-filter: var(--filter);
	-webkit-backdrop-filter: var(--filter);
	padding: var(--space-unit);
	z-index: 10;
	border-radius: var(--space-unit);
}

button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	overflow: inherit;
}

input[type="text"] {
	background-color: rgba(255, 255, 255, 0.1);
	color: inherit;
	border: solid transparent 1.5px;
	border-radius: var(--border-radius-small);
	padding-inline: 0.25rem;
	padding-top: 0.05rem;
	height: 1.48rem;

	&:hover, &:focus-visible {
		border-color: var(--text-color-highlight);
	}
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(0.5rem);
	-webkit-filter: blur(0.5rem);
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>

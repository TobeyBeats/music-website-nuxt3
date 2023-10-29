<template>
	<div>
		<NuxtLayout>
			<NuxtPage/>
		</NuxtLayout>
	</div>
</template>

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
	margin-bottom: calc(2 * var(--space-unit));

	// &::before {
	// 	content: '';
	// 	display: block;
	// 	height: 0;
	// 	width: 0;
	// 	margin-bottom: -24px;
	// }
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
}

.home-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: calc(4 * var(--space-unit));
}
</style>

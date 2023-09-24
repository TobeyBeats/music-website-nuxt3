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

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	border: none;
	overflow: visible;
	transition: all 0.2s;
	text-decoration-color: transparent;
}

body, .display-p {
	font-family: 'Jost';
	font-weight: 500;
	font-size: 15px;
	color: var(--text-color-default);
	background-color: var(--background-color);
}

p {
	&::before {
		content: '';
		display: block;
		height: 0;
		width: 0;
		margin-bottom: -4px;
	}
	&::after {
		content: '';
		display: block;
		height: 0;
		width: 0;
		margin-top: -5.5px;
	}
}

h1, .display-h1 {
	font-size: 40px;
	font-weight: 800;
	color: var(--text-color-highlight);

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

a {
	color: var(--text-color-highlight);
	text-decoration: underline;
	text-decoration-thickness: 1.5px;
	text-decoration-color: transparent;

	&:visited {
		color: var(--text-color-highlight);
	}

	&:hover, &:focus-visible {
		text-decoration-color: currentColor;
	}
}

.faded {
	color: var(--text-color-faded);
}

.rounded {
	border-radius: var(--border-radius-small);
}

.box-shadow-default {
	box-shadow: var(--box-shadow-default);
}
</style>

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
	--text-color-faded: #d0d0d080;
	--box-shadow-default: 0px 0px 25px rgba(0, 0, 0, 0.5);
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Jost';
	font-weight: 500;
	font-size: 15px;
	color: var(--text-color-default);
	background-color: var(--background-color);
}

a {
	color: var(--text-color-highlight);
	text-decoration: underline;
	text-decoration-thickness: 1.5px;
	text-decoration-color: #00000000;
	transition: text-decoration-color 0.2s;

	&:visited {
		color: var(--text-color-highlight);
	}

	&:hover, &:focus-visible {
		text-decoration-color: currentColor;
	}
}
</style>

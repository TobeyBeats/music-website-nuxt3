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
	--text-color-default: #d0d0d0;
	--text-color-highlight: #ffffff;
	--text-color-faded: #d0d0d080;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Jost';
	font-weight: 500;
	color: var(--text-color-default);
	background-color: var(--background-color);
}
</style>

<template>
	<div>
		<Navbar/>
		<main>
			<slot/>
		</main>
		<Footbar />
	</div>
</template>

<style>
:root {
	--max-content-width: 1420px;
	--space-sides: 50px;
	--navbar-height: 80px;
}
main {
	max-width: var(--max-content-width);
	padding-inline: var(--space-sides);
	margin-top: calc(var(--navbar-height) + var(--space-sides));
	margin-inline: auto;
	padding-bottom: calc(var(--navbar-height) + var(--space-sides));
}
</style>

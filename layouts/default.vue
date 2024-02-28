<template>
	<div>
		<CursorFollower />
		<Navbar/>
		<main>
			<slot/>
		</main>
		<Footbar />
	</div>
</template>

<style lang="scss">
:root {
	--max-content-width: 1420px;
	--space-sides: 50px;
	--navbar-height: 80px;

	@media screen and (max-width: 380px) {
		--space-sides: 35px;
	}

	@media screen and (max-width: 330px) {
		--space-sides: 30px;
	}
}
main {
	max-width: var(--max-content-width);
	padding-inline: var(--space-sides);
	margin-top: calc(var(--navbar-height) + var(--space-sides));
	margin-inline: auto;
	padding-bottom: calc(var(--navbar-height) + var(--space-sides));
}
</style>

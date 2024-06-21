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
	--footbar-height: 80px;

	@media screen and (max-width: 550px) {
		--footbar-height: 100px;
	}

	@media screen and (max-width: 440px) {
		--footbar-height: 120px;
	}

	@media screen and (max-width: 380px) {
		--space-sides: 35px;
		--footbar-height: 140px;
	}

	@media screen and (max-width: 330px) {
		--space-sides: 30px;
		--footbar-height: 140px;
	}
}
main {
	max-width: var(--max-content-width);
	padding-inline: var(--space-sides);
	margin-top: calc(var(--navbar-height) + var(--space-sides));
	margin-inline: auto;
	padding-bottom: calc(var(--footbar-height) + var(--space-sides));
}
</style>

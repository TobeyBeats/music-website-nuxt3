<template>
	<div>
		<Navbar/>
		<main>
			<slot/>
		</main>
		<Footbar />
	</div>
</template>

<style scoped>
main {
	max-width: 100%;
	padding-inline: 0px;
	margin-top: calc(var(--navbar-height) + var(--space-sides));
	margin-inline: 0px;
	padding-bottom: calc(var(--navbar-height) + var(--space-sides));
}
</style>

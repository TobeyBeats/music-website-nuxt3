<template>
	<div>
		<Navbar/>
		<main><slot/></main>
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
	margin-inline: var(--space-sides);
	margin-top: calc(var(--navbar-height) + var(--space-sides))
}
</style>

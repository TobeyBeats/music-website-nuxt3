<template>
	<div id="navbar">
		<div id="navbar-content">
			<p>TobeyBeats</p>
		</div>
	</div>
</template>

<style>
#navbar {
	height: var(--navbar-height);
	width: 100%;
	position: fixed;
	top: 0;
	background-color: var(--background-color-25);
	--blur-amount: 10px;
	backdrop-filter: blur(var(--blur-amount));
	--webkit-backdrop-filter: blur(var(--blur-amount));
	box-shadow: var(--box-shadow-default);
}

#navbar-content {
	max-width: var(--max-content-width);
	margin-inline: var(--space-sides);
	display: flex;
	flex-direction: row;
	align-items: center;
}
</style>

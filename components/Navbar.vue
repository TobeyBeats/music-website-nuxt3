<template>
	<nav id="navbar">
		<ul id="navbar-content">
			<li>
				<p>TobeyBeats</p>
			</li>
			<li>
				<p>—</p>
			</li>
			<li>
				<NuxtLink to="/">Home</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/releases">Releases</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/playlists">Playlists</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/about">About</NuxtLink>
			</li>
			<li>
				<a href="#" style="
					display: flex;
					flex-direction: row;
					align-items: center;
				">
					<img :src="constants.assets.discordLogoWhite" alt="" width="27px" height="27px" style="
						margin-right: 0.33rem;
					" />Discord Server ↗
				</a>
			</li>
			<li>
				<a href="#">
					<img :src="constants.assets.instagramLogoWhite" alt="Instagram" width="27px" height="27px" />
				</a>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss">
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
	padding-inline: var(--space-sides);
	margin-inline: auto;
	height: 100%;
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 3rem;

	& > li > a {
		padding-block: 1.5rem;
	}
}
</style>

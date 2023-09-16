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
			<li style="margin-left: auto;">
				<a href="#" style="
					display: flex;
					flex-direction: row;
					align-items: center;
				">
					<img :src="(constants.assets.discordLogoWhite)" alt="" width="27px" height="27px" style="
						margin-right: 0.33rem;
					" />
					Discord Server ↗
				</a>
			</li>
			<li>
				<a href="#" style="
					display: flex;
					flex-direction: row;
					align-items: center;
				">
					<img :src="(constants.assets.instagramLogoWhite)" alt="Instagram" width="27px" height="27px" />
				</a>
			</li>
		</ul>

		<div id="navbar-collapse">
			<Menu>
				TobeyBeats
				
				<MenuItems>
					<div>
						<p>TobeyBeats</p>
					</div>
					<div>
						<NuxtLink to="/">Home</NuxtLink>
					</div>
					<div>
						<NuxtLink to="/releases">Releases</NuxtLink>
					</div>
					<div>
						<NuxtLink to="/playlists">Playlists</NuxtLink>
					</div>
					<div>
						<NuxtLink to="/about">About</NuxtLink>
					</div>
				</MenuItems>
				<MenuButton class="menu-button">
					≡
				</MenuButton>
			</Menu>
		</div>
	</nav>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>

<style lang="scss">
$breakpoint: 880px;

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
	display: none;
	flex-direction: row;
	align-items: center;
	gap: 3rem;

	& > li > a {
		padding-block: 1.5rem;
	}

	@media screen and (min-width: $breakpoint) {
		display: flex;
	}
}

#navbar-collapse {
	display: flex;
	padding-inline: var(--space-sides);
	margin-inline: auto;
	height: 100%;
	flex-direction: row;
	align-items: center;

	@media screen and (min-width: $breakpoint) {
		display: none;
	}
}

.menu-button {
	margin-left: auto;
	background: none;
	border: none;
	color: currentColor;
	cursor: pointer;
	font-size: 20px;
	padding-bottom: 3px;
}
</style>

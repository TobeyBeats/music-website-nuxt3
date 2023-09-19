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
				<IconLink href="#" :image-src="constants.assets.discordLogoWhite">Discord Server ↗</IconLink>
			</li>
			<li>
				<IconLink href="#" :image-src="constants.assets.instagramLogoWhite"></IconLink>
			</li>
		</ul>

		<div id="navbar-collapse">
			<Menu>
				TobeyBeats
				<Transition>
					<MenuItems id="navbar-collapse-item-container">
						<ul>
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
								<IconLink href="#" :image-src="constants.assets.discordLogoWhite">Discord Server ↗</IconLink>
							</li>
							<li>
								<IconLink href="#" :image-src="constants.assets.instagramLogoWhite">Instagram ↗</IconLink>
							</li>
						</ul>
					</MenuItems>
				</Transition>
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

@mixin background {
	background-color: var(--background-color-25);
	--blur-amount: 10px;
	backdrop-filter: blur(var(--blur-amount));
	--webkit-backdrop-filter: blur(var(--blur-amount));
	box-shadow: var(--box-shadow-default);
}

#navbar {
	height: var(--navbar-height);
	width: 100%;
	position: fixed;
	top: 0;
	@include background;
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
	position: relative;

	@media screen and (min-width: $breakpoint) {
		display: none;
	}

	&-item-container {
		@include background;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		padding-inline: var(--space-sides);
		padding-block: calc(var(--navbar-height) / 2 - 0.5rem);

		& > ul {
			list-style: none;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
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
	z-index: 10;
}
</style>

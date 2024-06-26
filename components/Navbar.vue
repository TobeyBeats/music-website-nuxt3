<template>
	<nav id="navbar">
		<ul id="navbar-content">
			<li>
				<p>{{ $config.public.ownerArtistName }}</p>
			</li>
			<li>
				<p>—</p>
			</li>
			<li>
				<NuxtLink to="/" class="link">Home</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/releases" class="link">Releases</NuxtLink>
			</li>
			<li v-if="hasRoute('playlists')">
				<NuxtLink to="/playlists" class="link">Playlists</NuxtLink>
			</li>
			<li v-if="hasRoute('about')">
				<NuxtLink to="/about" class="link">About</NuxtLink>
			</li>
			<li style="margin-left: auto;">
				<a :href="ownerLinks.discordServer" target="_blank">
					<IconText :image-src="constants.assets.discordLogoWhite" class="link">Discord Server ↗&#xFE0E;</IconText>
				</a>
			</li>
			<li>
				<a :href="ownerLinks.instagram" target="_blank">
					<IconText :image-src="constants.assets.instagramLogoWhite"></IconText>
				</a>
			</li>
		</ul>

		<div id="navbar-collapse">
			<Menu v-slot="{ open, close }">
				{{ $config.public.ownerArtistName }}
				<Transition name="fade">
					<MenuItems id="navbar-collapse-item-container">
						<ul>
							<li>
								<NuxtLink to="/" @click="close" class="link">Home</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/releases" @click="close" class="link">Releases</NuxtLink>
							</li>
							<li v-if="hasRoute('playlists')">
								<NuxtLink to="/playlists" @click="close" class="link">Playlists</NuxtLink>
							</li>
							<li v-if="hasRoute('about')">
								<NuxtLink to="/about" @click="close" class="link">About</NuxtLink>
							</li>
							<li>
								<a :href="ownerLinks.discordServer" target="_blank">
									<IconText :image-src="constants.assets.discordLogoWhite" class="link">Discord Server ↗&#xFE0E;</IconText>
								</a>
							</li>
							<li>
								<a :href="ownerLinks.instagram" target="_blank">
									<IconText :image-src="constants.assets.instagramLogoWhite" class="link">Instagram ↗&#xFE0E;</IconText>
								</a>
							</li>
						</ul>
					</MenuItems>
				</Transition>
				<MenuButton class="menu-button hamburger hamburger--slider" :class="open ? 'is-active' : ''">
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</MenuButton>

			</Menu>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

const { hasRoute } = useRouter()
const config = useRuntimeConfig()

const { data, error } = config.public.ownerLinksPathApi && config.public.baseUrlApi ? await useFetch<{
	instagram: string,
	discordServer: string
}>(config.public.ownerLinksPathApi, {
	baseURL: config.public.baseUrlApi
}) : { data: null, error: null }

if (error?.value) {
	throw error
}

const ownerLinks = data && data.value ? data.value : { instagram: 'about:blank', discordServer: 'about:blank' }
</script>

<style lang="scss">
$breakpoint: 880px;

@mixin background {
	background-color: var(--background-color-25);
	--blur-amount: 10px;
	backdrop-filter: blur(var(--blur-amount));
	-webkit-backdrop-filter: blur(var(--blur-amount));
	box-shadow: var(--box-shadow-default);
}

#navbar {
	height: var(--navbar-height);
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 10;
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
			
			& > li > a {
				width: 100%;
			}
		}
	}
}

.menu-button {
	margin-left: auto;
	color: var(--text-color-highlight);
	display: flex;
	align-items: center;
	justify-content: center;
	.hamburger-box {
		transform: scale(0.5);
	}
	transition: transform 0.3s;
	&:not(.is-active):hover, &:not(.is-active):focus-visible {
		transform: scaleY(1.5);
	}
	&:hover, &:focus-visible {
		transform: scale(1.25);
	}
}
</style>

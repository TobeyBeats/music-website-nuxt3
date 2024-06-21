<template>
	<footer id="footer">
		<div id="footer-content">
			<div>
				<p style="margin-bottom: calc(var(--space-unit) / 4);">© 2023 {{ $config.public.ownerArtistName }}</p>
				<p>
					<NuxtLink class="link" to="/privacy-policy">Privacy Policy&nbsp;→&#xFE0E;</NuxtLink>
				</p>
			</div>
			<div style="margin-left: auto; text-align: right;">
				<p>Contact: <a class="link" :href="`mailto:${$config.public.ownerEmailAddress}`">{{ $config.public.ownerEmailAddress }}</a></p>
			</div>
		</div>
	</footer>
</template>

<style lang="scss">
#footer {
	height: var(--footbar-height);
	width: 100%;
	background-color: var(--background-color-25);
	--blur-amount: 10px;
	backdrop-filter: blur(var(--blur-amount));
	-webkit-backdrop-filter: blur(var(--blur-amount));
	box-shadow: var(--box-shadow-default);
	position: absolute;
	bottom: 0;

	#footer-content {
		max-width: var(--max-content-width);
		padding-inline: var(--space-sides);
		margin-inline: auto;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 3rem;
	}
}
</style>
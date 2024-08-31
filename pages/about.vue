<template>
	<h1 style="opacity: 0;">About Fedders</h1>
	<div id="about-wrapper">

		<div style="margin-top: -1px;">

			<div>
				<section class="pa-section" style="margin-top: calc(0px - var(--navbar-height) * 3)">
					<div class="pa-image-container">
						<img src="/images/press-pics/3.jpg" class="pa-pic-small-screen">
						<img src="/images/press-pics/2.jpg" class="pa-pic-large-screen">
					</div>

					<div class="pa-content">
						<div class="pa-content-box">
							<h2>Biography</h2>
							<p>
								Tobias, the man behind <button @click="showArtistPopoverHandler">Fedders</button>
								and <button @click="showArtistPopoverHandler">TobeyBeats</button>,
								is a 23 year old musician and producer from Germany who has developed his interest in music
								for as long as he can remember.
								His musical taste reaches all the way from classical instrumental music to modern pop and
								electronic music.
								After playing the drums and piano for a big part of his life, he's now producing and releasing his own music in various genres.
							</p>
						</div>
						<div class="pa-content-box">
							<h2>Instruments</h2>
							<p>
								Tobias has always felt affinity to music and rhythms, so in 2008 he started taking lessons on the
								drums, later additionally on mallets like marimba and xylophone and also piano.
								Since then he's consistently playing in many orchestras and bands as drummer and
								percussionist.
							</p>
						</div>
						<div class="pa-content-box">
							<h2>Electronic Music</h2>
							<p>
								<img src="/images/press-pics/electronic.jpg"
									class="rounded shadow-std float-start floating-pic" style="margin-right: 0.75rem;" />
								Around 2013 he started experimenting with recording music in Audacity and shortly after got
								into electronic production in a DAW called MuLab, and since 2015 in Ableton Live.
								After he already created and uploaded plenty of older tracks to Youtube, he got his first
								official release on platforms like Spotify in 2019 with his artist name <button  @click="showArtistPopoverHandler">TobeyBeats</button>.
								After getting a bit more serious about the music, he decided that he didn't want to mix up all kinds of genres and vibes under the same alias,
								so in the beginning of 2024, he founded his new alias <button @click="showArtistPopoverHandler">Fedders</button>, focussing on more deep and chill music,
								keeping <button @click="showArtistPopoverHandler">TobeyBeats</button> for more energetic and heavy music.
								Since then, he released on labels like 
								<button @click="showArtistPopoverHandler">Stardust</button>,
								<button @click="showArtistPopoverHandler">SWUTCH Music</button> and
								<button @click="showArtistPopoverHandler">Cracking Records</button>
								under <button @click="showArtistPopoverHandler">TobeyBeats</button>, and on labels like
								<button @click="showArtistPopoverHandler">Soave Records</button>,
								<button @click="showArtistPopoverHandler">Gahara</button> and
								<button @click="showArtistPopoverHandler">ChillYourMind</button> under <button @click="showArtistPopoverHandler">Fedders</button>.
							</p>
						</div>
						<div style="height: 170px;"></div>
					</div>
				</section>
				<section class="pa-section">
					<div class="pa-image-container">
						<img src="/images/press-pics/pc.jpg">
					</div>

					<div class="pa-content pa-content-2">
						<div class="pa-content-box">
							<h2>Discography – Overview</h2>
							<p>
								He's constantly trying out new genres, currently most of his releases on <button @click="showArtistPopoverHandler">Fedders</button> go into the direction
								of Deep House and Chill House, like one of his newest songs <NuxtLink to="releases/who-do-you-love" class="link">Who Do You Love&nbsp;→&#xFE0E;</NuxtLink>
								released on the label <button @click="showArtistPopoverHandler">ChillYourMind</button>,
								on <button @click="showArtistPopoverHandler">TobeyBeats</button> he has already released songs in many different genres
								like Future Bass, Future House, and Dubstep, like his song <NuxtLink to="releases/feel-alive" class="link">Feel Alive&nbsp;→&#xFE0E;</NuxtLink>.
							</p>
							<p></p>
							<div class="rounded shadow-std" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(0, 1fr));">
								<template v-for="coverUrl in coverUrlsRow1">
									<img :src="coverUrl" style="height: auto; width: 100%; object-fit: cover;" />
								</template>
							</div>
							<p>
								During the start of the pandemic in 2020, he established many contacts, especially other
								like-minded producers on Discord and Instagram.
								For the first time he realised the huge extent of the music community, which opened up the
								doors for collaborating with musicians worldwide.<br />
								In September 2021, he released
								<NuxtLink to="/releases/rescue-me" class="link">Rescue&nbsp;Me&nbsp;→&#xFE0E;</NuxtLink>,
								which is a big collaboration together with producers
								<button @click="showArtistPopoverHandler">Størm</button> from Bangladesh,
								<button @click="showArtistPopoverHandler">Skyptomiax</button> from
								India, lyricist
								<button @click="showArtistPopoverHandler">Veda Varshitha</button> from India and singer-songwriter
								<button @click="showArtistPopoverHandler">Ana Grosh</button> from
								Atlanta.<br />
							</p>
							<p>
								He appreciated the exchange of ideas and inspiration of such collaborations so much, that he
								worked together with other artists again on many songs,
								like on <NuxtLink to="/releases/alone-in-the-dark" class="link">Alone&nbsp;In&nbsp;The&nbsp;Dark&nbsp;→&#xFE0E;</NuxtLink>
								with producer
								<button @click="showArtistPopoverHandler">MAESTRI</button> from Austria and singer
								<button @click="showArtistPopoverHandler">Sir David</button> from
								Germany, released on OZLO
								(<button @click="showArtistPopoverHandler">SWUTCH Music</button>),
								and on <NuxtLink to="/releases/sad-songs" class="link">Sad&nbsp;Songs&nbsp;→&#xFE0E;</NuxtLink>, with
								<button @click="showArtistPopoverHandler">Taca Music</button>  from Norway and singer-songwriter
								<button @click="showArtistPopoverHandler">Laryssa Vachon</button> from Canada, released on
								<button @click="showArtistPopoverHandler">Stardust</button>.
							</p>
							<p></p>
							<div class="rounded shadow-std" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(0, 1fr));">
								<template v-for="coverUrl in coverUrlsRow2">
									<img :src="coverUrl" style="height: auto; width: 100%; object-fit: cover;" />
								</template>
							</div>
							<p>
								Over the time, he also got to appreciate the more chilled side of music as well, influencing his first Chill House song
								<NuxtLink to="/releases/under-water" class="link">Under Water&nbsp;→&#xFE0E;</NuxtLink>, together with singer-songwriter
								<button @click="showArtistPopoverHandler">LizAnn</button> from Switzerland, released on <button @click="showArtistPopoverHandler">Gahara</button> in late 2022.
								Since he still wanted to keep the energetic side of his music, he decided release all chill or rather commercial music under the alias <button @click="showArtistPopoverHandler">Fedders</button> from 2024 on,
								where he already released numerous songs in 2024 alone, like <NuxtLink to="/releases/problems" class="link">Problems&nbsp;→&#xFE0E;</NuxtLink>, again with singer-songwriter <button @click="showArtistPopoverHandler">LizAnn</button>,
								<NuxtLink to="/releases/riders-of-the-storm" class="link">Riders Of The Storm&nbsp;→&#xFE0E;</NuxtLink> with singer-songwriter <button @click="showArtistPopoverHandler">Kezano</button> from Sweden, both on <button @click="showArtistPopoverHandler">Soave Records</button>,
								but also <NuxtLink to="/releases/greedy" class="link">Greedy&nbsp;→&#xFE0E;</NuxtLink> with singer <button @click="showArtistPopoverHandler">Malin Horsevik</button> from Norway, covering a popular song originally by <button @click="showArtistPopoverHandler">Tate McRae</button> in form of melancholic and orchestral Chill Trap, released on <button @click="showArtistPopoverHandler">Trapical</button>.
							</p>
							<p>
								You can see all his latest and also upcoming music on the page <NuxtLink to="/releases" class="link">Releases&nbsp;→&#xFE0E;</NuxtLink>.
							</p>
						</div>
						<div style="height: 100px;"></div>
					</div>
				</section>
			</div>

		</div>

		<ArtistPopover ref="artistPopover" />

	</div>
</template>


<script setup lang="ts">
const artistPopover = ref<InstanceType<typeof ArtistPopover> | null>(null)

function showArtistPopoverHandler(event: MouseEvent) {
	artistPopover.value.show(event, (event.target as HTMLElement).textContent)
}

const config = useRuntimeConfig()

async function getCoverUrl(releaseId: string) {
	const release = await $fetch<ConstructorParameters<typeof Release>[0]>(`/releases/${releaseId}`, {
		baseURL: config.public.baseUrlApi
	})
	return release.thumbnailUrl
}

const coverUrlsRow1 = ref<string[]>([])
const coverUrlsRow2 = ref<string[]>([])
onMounted(async () => {
	for (const releaseId1 of ["rescue-me", "sad-songs", "feel-alive"]) {
		const url = await getCoverUrl(releaseId1)
		coverUrlsRow1.value.push(url)
	}
	for (const releaseId2 of ["problems", "greedy", "who-do-you-love"]) {
		const url = await getCoverUrl(releaseId2)
		coverUrlsRow2.value.push(url)
	}
})

definePageMeta({
	layout: "full-page-no-cursor-follower"
})
</script>


<style lang="scss">
#about-wrapper {
	--scale: 0.2;
	--space: 5vmin;
	--bg-rgb-triple: 10, 10, 10;

	button {
		color: var(--text-color-highlight);
		text-decoration: underline;
		text-decoration-color: transparent;
		&:hover, &:focus-within {
			text-decoration-color: currentColor;
		}
	}

	h2 {
		margin-bottom: 0.25rem;
	}
}

.float-start {
	float: left;
}
.float-end {
	float: right;
}

.pa-pic-small-screen {
	display: block!important;
	@media screen and (min-aspect-ratio: 7 / 8) {
		display: none!important;
	}
}
.pa-pic-large-screen {
	display: none!important;
	@media screen and (min-aspect-ratio: 7 / 8) {
		display: block!important;
	}
}

.pa-section {
	transform-origin: center top;
	transform: scaleY(calc(1 - var(--scale)));

	&>* {
		transform-origin: center top;
		transform: scaleY(calc(1 / (1 - var(--scale))));
	}
}

.pa-content {
	position: relative;
	margin: -50vh auto 0;

	max-width: 55ch;
	width: calc(100% - var(--space));

	&-2 {
		margin: -70vh auto 0;
	}

	&>*+* {
		margin-top: 4rem;
	}

	&-box {
		padding: min(var(--space), 40px);
		background-color: var(--background-color-50);
		border-radius: var(--border-radius-small);
		box-shadow: var(--shadow-std);
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);

		&>p {
			padding-top: min(var(--space), 33px);
		}
	}
}

.pa-image-container {
	position: sticky;
	top: 0;
	width: 100%;
	height: 100vh;
	z-index: -2;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom,
				var(--background-color) 0%,
				var(--background-color-50) 15%,
				transparent 20%,
				transparent 85%,
				var(--background-color-50) 88%,
				var(--background-color) 100%);
	}

	img {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.floating-pic {
	width: max(170px, 50%);

	@media only screen and (max-width:400px) {
		width: 100%;
	}
}

.floating-cover {
	width: min(170px, 50%);

	@media only screen and (max-width:350px) {
		width: 100%;
	}
}
</style>
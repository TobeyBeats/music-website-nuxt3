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
								Tobias, the man behind <ArtistPopover>Fedders</ArtistPopover>
								and his older alias and side project <ArtistPopover>TobeyBeats</ArtistPopover>,
								is a 22 year old musician and producer from Germany who has developed his interest in music
								for as long as he can remember.
								His musical taste reaches all the way from classical instrumental music to modern pop and
								electronic music.
								After playing the drums and piano for many years, he's currently also releasing his own
								music on various labels in the EDM scene.
							</p>
						</div>
						<div class="pa-content-box">
							<h2>Instruments</h2>
							<p>
								There has always been affinity to music and rhythms, so in 2008 he started taking lessons on the
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
								official release on platforms like Spotify in 2019.
								Since then, he released on labels like 
								<ArtistPopover>Big Smile Records</ArtistPopover>,
								<ArtistPopover>Stardust</ArtistPopover>,
								<ArtistPopover>SWUTCH Music</ArtistPopover> and
								<ArtistPopover>Gahara</ArtistPopover>.
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
								He's constantly trying out new genres, currently most of his releases go into the direction
								of House in various subgenres, like his track <NuxtLink to="releases/karma" class="link">Karma&nbsp;→</NuxtLink>,
								and Future Bass / Melodic Bass, like
								<NuxtLink to="/releases/rescue-me" class="link">Rescue&nbsp;Me&nbsp;→</NuxtLink>.
							</p>
							<p>

								<span class="float-end floating-cover" style="display: inline-flex; flex-direction: column; gap: 1rem; margin-left: 0.5rem;">
									<img src="/images/covers/rescue%20me%20cover.jpg" loading="lazy"
										class="rounded shadow-std" />
									<img src="/images/covers/alone in the dark cover.jpg" loading="lazy"
										class="rounded shadow-std" />
									<img src="/images/covers/Under%20Water%20Cover.jpeg" loading="lazy"
										class="rounded shadow-std" />
								</span>

								During the start of the pandemic in 2020, he established many contacts, especially other
								like-minded producers on Discord and Instagram.
								For the first time he realised the huge extent of the music community, which opened up the
								doors for collaborating with musicians worldwide.<br />
								In September 2021, he released his so far biggest project
								<NuxtLink to="/releases/rescue-me" class="link">Rescue&nbsp;Me&nbsp;→</NuxtLink>,
								which is a big collaboration together with producers
								<ArtistPopover>Størm</ArtistPopover> from Bangladesh,
								<ArtistPopover>Skyptomiax</ArtistPopover> from
								India, lyricist
								<ArtistPopover>Veda Varshitha</ArtistPopover> from India and singer-songwriter
								<ArtistPopover>Ana Grosh</ArtistPopover> from
								Atlanta.<br />

								He appreciated the exchange of ideas and inspiration of such collaborations so much, that he
								worked together with other artists again on many songs,
								like on <NuxtLink to="/releases/alone-in-the-dark" class="link">Alone&nbsp;In&nbsp;The&nbsp;Dark&nbsp;→</NuxtLink>
								with producer
								<ArtistPopover>MAESTRI</ArtistPopover> from Austria and singer
								<ArtistPopover>Sir David</ArtistPopover> from
								Germany, released on OZLO
								(<ArtistPopover>SWUTCH Music</ArtistPopover>),
								and on <NuxtLink to="/releases/sad-songs" class="link">Sad&nbsp;Songs&nbsp;→</NuxtLink>, with
								<ArtistPopover>Taca Music</ArtistPopover>  from Norway and singer-songwriter
								<ArtistPopover>Laryssa Vachon</ArtistPopover> from Canada, released on
								<ArtistPopover>Stardust</ArtistPopover>.<br />
								<br />

								One of his latest releases, and his personal favorite release so far,
								<NuxtLink to="/releases/under-water" class="link">Under&nbsp;Water&nbsp;→</NuxtLink>,
								is a Deep Progressive House song together with singer-songwriter
								<ArtistPopover>LizAnn</ArtistPopover> from
								Switzerland. It has been in the works for many months and was released on 9th December 2022 via the label
								<ArtistPopover>Gahara</ArtistPopover>.<br />
							</p>
							<p>
								You can see all his latest and also upcoming music on the page <NuxtLink to="/releases" class="link">Releases&nbsp;→</NuxtLink>.
							</p>
						</div>
						<div style="height: 100px;"></div>
					</div>
				</section>
			</div>

		</div>

	</div>
</template>


<script setup lang="ts">
definePageMeta({
	layout: "full-page-no-cursor-follower"
})
</script>

<!-- <script lang="ts">
import ShowSocialsButton from "~/components/ShowSocialsButton.vue"
import NuxtLinkWithTooltip from "~/components/NuxtLinkWithTooltip.vue";
import { Contributor, openArtistModal } from "~/composables/releases";
import { defineComponent } from "vue";
import globalConstants from "~/composables/globalConstants";

export default defineComponent({
	head() {
		return {
			meta: [
				{ hid: "description", name: "description", content: "TobeyBeats' biography and artist pictures" },
				{ property: "og:title", content: "About TobeyBeats", hid: "title" },
				{ property: "og:description", content: "TobeyBeats' biography and artist pictures", hid: "descriptionog" }
			]
		};
	},
	data() {
		return {
			contributors: [] as Contributor[],
			modalLinks: {} as { spotify: string, instagram: string, youtube: string },
			modalTitle: ""
		};
	},
	async asyncData(context) {
		const response = await context.$axios.get(`${globalConstants.tobeybeatsApiBaseUrl}/contributors/`)
		if (response.status != 200) {
			context.redirect("/404")
			return
		}
		const contributors: Contributor[] = response.data.map((obj: any) => new Contributor(obj))
		return {
			contributors
		}
	},
	methods: {
		openModal: function (event: MouseEvent) {
			openArtistModal(this, event.target, this.contributors);
		}
	},
	components: { NuxtLinkWithTooltip, ShowSocialsButton }
})
</script> -->


<style lang="scss">
#about-wrapper {
	--scale: 0.2;
	--space: 5vmin;
	--bg-rgb-triple: 10, 10, 10;
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
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },

    css: [
		'~/assets/fonts/Jost.css',
		'~/assets/hamburger.css',
	],

    app: {
		// pageTransition: { name: 'page', mode: 'out-in' }
	},

    runtimeConfig: {
		public: {
			baseUrl: process.env.BASE_URL,
			baseUrlApi: process.env.BASE_URL_API,
			ownerLinksPathApi: process.env.OWNER_LINKS_PATH_API,
			ownerArtistName: 'Fedders',
			contact: [
				{
					type: 'General Inquiries',
					uri: 'mailto:general@feddersmusic.com',
					display: 'general@feddersmusic.com',
				},
				{
					type: 'Demos',
					uri: 'mailto:demos@feddersmusic.com',
					display: 'demos@feddersmusic.com',
				},
				{
					type: 'Promos',
					uri: 'mailto:promo@feddersmusic.com',
					display: 'promo@feddersmusic.com',
				},
			]
		}
	},

	nitro: {
		prerender: {
			routes: [
				"/releases/down-on-the-road",
				"/releases/do-it-now",
				"/releases/broken-reactor-remix",
				"/releases/lose-my-mind",
				"/releases/lost-in-the-dark-remix",
				"/releases/get-it-up",
				"/releases/rescue-me",
				"/releases/rescue-me-remixes-vol1",
				"/releases/rescue-me-remixes-vol2",
				"/releases/helium-remix",
				"/releases/alone-in-the-dark",
				"/releases/take-me-away",
				"/releases/karma",
				"/releases/sad-songs",
				"/releases/pariah-remix",
				"/releases/breakdown",
				"/releases/under-water",
				"/releases/sad-songs-remixes",
				"/releases/fight-alone",
				"/releases/4am",
				"/releases/problems",
				"/releases/riders-of-the-storm",
				"/releases/feel-alive",
				"/releases/big-room-bang",
				"/releases/greedy"
			]
		}
	},
	vite: {
		server: {
			hmr: {
				overlay: false
			}
		}
	}
})
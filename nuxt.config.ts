// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

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
			ownerArtistName: 'Artist Name',
			contact: [
				{
					type: 'General Inquiries',
					uri: 'mailto:general@artist.com',
					display: 'general@artist.com',
				},
				{
					type: 'Promos',
					uri: 'mailto:promo@artist.com',
					display: 'promo@artist.com',
				},
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
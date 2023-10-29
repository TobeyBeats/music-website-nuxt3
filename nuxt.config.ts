// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: [
		'~/assets/fonts/Jost.css'
	],
	runtimeConfig: {
		public: {
			baseUrl: process.env.BASE_URL,
			baseUrlApi: process.env.BASE_URL_API
		}
	}
})

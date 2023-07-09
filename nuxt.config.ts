// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    css: [
        '~/assets/scss/style.scss',
    ],
    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Russo+One&display=swap",
                },
            ],

        }
    },
    runtimeConfig: {
        public: {
            API_BASE_URL: 'http://localhost:5000'
        },
    },

})

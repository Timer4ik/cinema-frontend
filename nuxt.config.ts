// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    runtimeConfig: {
        public: {
            apiBase: '/api'
        },
    },
    css: [
        '~/static/css/null.css',
        '~/static/css/style.css',
    ]
})


const useApiRequest = () => {

    const runtimeConfig = useRuntimeConfig()

    const API_BASE_URL = runtimeConfig.API_BASE_URL

    return {
        async request(route, options) {

            const url = API_BASE_URL + route

            const response = await $fetch(url, options)

            return response
        },
        async requestPost(route, options) {

            const url = API_BASE_URL + route

            options.method = "POST"

            const response = await $fetch(url, options)

            return response
        }
    }
}

export default () => {

    const { request, requestPost } = useApiRequest()

    return {
        async me(options) {
            return await request("/api/auth/me", options)
        },
        async login(options) {
            return await requestPost("/api/auth/login", options)
        },
        async register(options) {
            return await requestPost("/api/auth/register", options)
        },
        async getFilms(options) {
            return await request("/api/film", options)
        },
        async getFilmById(id, options) {
            return await request(`/api/film/${id}`, options)
        }
    }
}



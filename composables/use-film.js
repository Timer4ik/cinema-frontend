
export const useFilms = () => {
    const films = useUniqueState([])
    const Api = useApi()

    const fetchFilms = async (options) => {

        const { data } = await Api.getFilms(options)

        films.value = data
    }

    return { films, fetchFilms }
}



export const useFilmById = () => {
    const film = useUniqueState({})
    const Api = useApi()

    const fetchFilmById = async (id, options) => {
        const { data } = await Api.getFilmById(id, options)

        film.value = data
    }

    return {
        fetchFilmById, film
    }
}
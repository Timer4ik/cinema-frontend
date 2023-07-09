export default () => {

    const Api = useApi()

    const token = useUniqueState(null)
    const user_id = useUniqueState(null)
    const isAuth = useUniqueState(false)

    const user = useUniqueState({})

    const me = async () => {

        const data = await Api.me({
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        user.value = data
    }

    const register = async (name, email, password) => {

        const options = {
            body: JSON.stringify({
                name, email, password
            })
        }

        const response = await Api.register(options)

        await login(email, password)
    }

    const login = async (email, password) => {

        const options = {
            body: JSON.stringify({
                email, password
            })
        }

        const response = await Api.login(options)

    }

    return {
        login, register, me
    }
}
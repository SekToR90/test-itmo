export const DO_AUTH = 'DO_AUTH'
export const DO_AUTH_SUCCESS = 'DO_AUTH_SUCCESS'
export const DO_AUTH_FAILURE = 'DO_AUTH_FAILURE'
export const CANSEL_AUTH = 'CANSEL_AUTH'

export function fetchUsers() {
    return async (dispatch) => {
        dispatch({ type: DO_AUTH })

        try {
            const [response] = await Promise.all([
                fetch('https://jsonplaceholder.typicode.com/users'),
                new Promise(resolve => setTimeout(resolve, 1000))
            ]);

            const users = await response.json()
            dispatch({
                type: DO_AUTH_SUCCESS,
                payload: users[0]
            })

        } catch (error) {
            dispatch({
                type: DO_AUTH_FAILURE,
            })
        }
    }
}
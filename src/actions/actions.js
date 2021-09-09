export const DO_AUTH = 'DO_AUTH'
export const DO_AUTH_SUCCESS = 'DO_AUTH_SUCCESS'
export const DO_AUTH_FAILURE = 'DO_AUTH_FAILURE'

export function fetchPosts() {
    return async (dispatch) => {
        dispatch({ type: DO_AUTH })

        try {
            const [response] = await Promise.all([
                fetch('https://jsonplaceholder.typicode.com/users'),
                new Promise(resolve => setTimeout(resolve, 1000))
            ]);

            dispatch({
                type: DO_AUTH_SUCCESS,
                payload: await response.json()
            })

        } catch (error) {
            dispatch({
                type: DO_AUTH_FAILURE,
            })
        }
    }
}
export const DO_AUTH = 'DO_AUTH'
export const DO_AUTH_SUCCESS = 'DO_AUTH_SUCCESS'
export const DO_AUTH_FAILURE = 'DO_AUTH_FAILURE'

export function fetchPosts() {
    return async (dispatch) => {
        dispatch({ type: DO_AUTH })

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()

            dispatch({
                type: DO_AUTH_SUCCESS,
                payload: data
            })

        } catch (error) {
            dispatch({
                type: DO_AUTH_FAILURE,
            })
        }
    }
}
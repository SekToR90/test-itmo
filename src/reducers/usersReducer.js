import * as actions from '../actions/actions'

export const initialState = {
  user: null,
  isAuth: false,
  loading: false,
  hasErrors: false,
}
 
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.DO_AUTH:
      return { ...state, loading: true }
    case actions.DO_AUTH_SUCCESS:
      return { user: action.payload, isAuth: true, loading: false, hasErrors: false }
    case actions.DO_AUTH_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}


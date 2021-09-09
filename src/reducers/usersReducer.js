import * as actions from '../actions/actions'

export const initialState = {
  user: null,
  loading: false,
  hasErrors: false,
}
 
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.DO_AUTH:
      return { ...state, loading: true }
    case actions.DO_AUTH_SUCCESS:
      return { user: action.payload, loading: false, hasErrors: false }
    case actions.DO_AUTH_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}


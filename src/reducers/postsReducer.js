import * as actions from '../actions/actions'

export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
}
 
export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.DO_AUTH:
      return { ...state, loading: true }
    case actions.DO_AUTH_SUCCESS:
      return { posts: action.payload, loading: false, hasErrors: false }
    case actions.DO_AUTH_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}


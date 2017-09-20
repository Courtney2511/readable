import { LOAD_POST_COMMENTS } from '../actions'

const initialState = {
  comments: []
}

function comments(state=initialState, action) {
  switch(action.type) {
    case LOAD_POST_COMMENTS:
      const comments = action.payload.data
      return {
        ...state, comments
      }
    default:
      return state
  }
}

export default comments

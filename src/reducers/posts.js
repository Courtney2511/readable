import { GET_POSTS } from '../actions'

const initialState = {
  posts: []
}

function posts(state=initialState, action) {
  switch(action.type) {
    case GET_POSTS:
      const posts = action.data.data
      return {
        ...state, posts
      }
    default:
      return state
  }
}

export default posts

import { GET_POSTS, LOAD_POST_COMMENTS, GET_POSTS_BY_CATEGORY, GET_POST } from '../actions'

const initialState = {
  posts: [],
}

function posts(state=initialState, action) {
  switch(action.type) {
    case GET_POST:
      const post = action.payload.data
      return {
        ...state, post: post
      }
    case GET_POSTS_BY_CATEGORY:
      const posts = action.payload.data
      return {
        ...state, posts
      }
    case GET_POSTS:
      const postsByCategory = action.payload.data
      return {
        ...state, posts: postsByCategory
      }
    case LOAD_POST_COMMENTS:
      const comments = action.payload.data
      return {
        ...state, comments
      }
    default:
      return state
  }
}

export default posts

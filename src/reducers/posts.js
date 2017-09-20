import { GET_POSTS, LOAD_POST_COMMENTS, GET_POSTS_BY_CATEGORY, GET_POST, UPVOTE_POST } from '../actions'

const initialState = {
  posts: [],
  post: null,
  comments: [],
  updatedPost: null
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
        ...state, posts: posts
      }
    case GET_POSTS:
      const postsByCategory = action.payload.data
      return {
        ...state, posts: postsByCategory
      }
    case LOAD_POST_COMMENTS:
      const comments = action.payload.data
      return {
        ...state, comments: comments
      }
    case UPVOTE_POST:
      const updatedPost = action.payload.data
      return {
        ...state, updatedPost: updatedPost
      }
    default:
      return state
  }
}

export default posts

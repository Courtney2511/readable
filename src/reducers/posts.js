import { GET_POSTS, LOAD_POST_COMMENTS, FILTER_POSTS } from '../actions'

const initialState = {
  posts: [],
}

function posts(state=initialState, action) {
  switch(action.type) {
    case GET_POSTS:
      const posts = action.data.data
      return {
        ...state, posts
      }
    case LOAD_POST_COMMENTS:
      const comments = action.data.data
      return {
        ...state, comments
      }
    case FILTER_POSTS:
      return {
        ...state, filteredPosts: state.posts.filter(post => post.category === action.data)
      }
    default:
      return state
  }
}

export default posts

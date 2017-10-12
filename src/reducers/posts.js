import { GET_POSTS,
         GET_POSTS_BY_CATEGORY,
         SET_FILTER,
         REMOVE_FILTER,
         GET_POST,
         UPVOTE_POST,
         DOWNVOTE_POST,
         DELETE_POST } from '../actions/posts'

const initialState = {
  posts: [],
  filter: null,
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
      const postsByCategory = action.payload.data
      return {
        ...state, posts: postsByCategory
      }
    case SET_FILTER:
      return {
        ...state, filter: action.payload
      }
    case REMOVE_FILTER:
      return {
        ...state, filter: null
      }
    case GET_POSTS:
      const posts = action.payload.data
      return {
        ...state, posts: posts
      }
    case UPVOTE_POST:
      const upVotedPost = action.payload.data
      return {
        ...state, posts: state.posts.map(post => {
          if (post.id === upVotedPost.id) {
            return upVotedPost
          } else {
            return post
          }
        }),
                  post: upVotedPost
      }
    case DOWNVOTE_POST:
      const downVotedPost = action.payload.data
      return {
          ...state, posts: state.posts.map(post => {
            if (post.id === downVotedPost.id) {
              return downVotedPost
            } else {
              return post
            }
          })
        }
    case DELETE_POST:
      const deletedPost = action.payload.data
      return {
        ...state, posts: state.posts.map(post => {
          if (post.id === deletedPost.id) {
            return deletedPost
          } else {
            return post
          }
        }),
                  post: null
      }
    default:
      return state
  }
}

export default posts

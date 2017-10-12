import { GET_POSTS,
         GET_POSTS_BY_CATEGORY,
         SET_FILTER,
         REMOVE_FILTER,
         GET_POST,
         UPVOTE_POST,
         DOWNVOTE_POST,
         DELETE_POST,
         ADD_DATE_SORT_TOGGLE,
         REMOVE_DATE_SORT_TOGGLE } from '../actions/posts'

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
    case ADD_DATE_SORT_TOGGLE:
      console.log('reducer called')
      return {
        ...state, toggleSort: 'date'
      }
    case REMOVE_DATE_SORT_TOGGLE:
    return {
      ...state, toggleSort: 'vote'
    }
    default:
      return state
  }
}

export default posts

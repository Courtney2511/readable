import { GET_POSTS,
         LOAD_POST_COMMENTS,
         GET_POSTS_BY_CATEGORY,
         GET_POST,
         UPVOTE_POST,
         DOWNVOTE_POST,
         DELETE_POST } from '../actions'

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
      const postsByCategory = action.payload.data
      return {
        ...state, posts: postsByCategory
      }
    case GET_POSTS:
      const posts = action.payload.data
      return {
        ...state, posts: posts
      }
    case LOAD_POST_COMMENTS:
      const comments = action.payload.data
      return {
        ...state, comments: comments
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
        })
      }
    default:
      return state
  }
}

export default posts

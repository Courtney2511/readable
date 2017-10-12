import { LOAD_POST_COMMENTS,
         UPVOTE_COMMENT,
         DOWNVOTE_COMMENT,
         DELETE_COMMENT,
         ADD_NEW_COMMENT } from '../actions/comments'

const initialState = {
  comments: []
}

function comments(state=initialState, action) {
  switch(action.type) {
    case ADD_NEW_COMMENT:
      const newComment = action.payload.data
      return {
        ...state, comments: state.comments.push(newComment)
      }
    case LOAD_POST_COMMENTS:
      const comments = action.payload.data
      return {
        ...state, comments
      }
    case UPVOTE_COMMENT:
      const upVotedComment = action.payload.data
      return {
        ...state, comments: state.comments.map(comment => {
          if (comment.id === upVotedComment.id) {
            return upVotedComment
          } else {
            return comment
          }
        })
      }
    case DOWNVOTE_COMMENT:
      const downVotedComment = action.payload.data
      return {
        ...state, comments: state.comments.map(comment => {
          if (comment.id === downVotedComment.id) {
            return downVotedComment
          } else {
            return comment
          }
        })
      }
    case DELETE_COMMENT:
    const deletedComment = action.payload.data
    return {
      ...state, comments: state.comments.map(comment => {
        if (comment.id === deletedComment.id) {
          return deletedComment
        } else {
          return comment
        }
      })
    }
    default:
      return state
  }
}

export default comments

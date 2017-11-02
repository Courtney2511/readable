import { LOAD_POST_COMMENTS,
         UPVOTE_COMMENT,
         DOWNVOTE_COMMENT,
         DELETE_COMMENT,
         ADD_NEW_COMMENT,
         GET_COMMENT,
         EDIT_COMMENT,
         CLEAR_COMMENT,
         SELECT_COMMENT } from '../actions/comments'

const initialState = {
  comments: []
}

function comments(state=initialState, action) {
  switch(action.type) {
    case ADD_NEW_COMMENT:
      const newComment = action.payload.data
      return {
        ...state, comments: [...state.comments, newComment]
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
      ...state, comments: state.comments.filter(comment => comment.id !== deletedComment.id)
    }
    case GET_COMMENT:
      const comment = action.payload.data
      return {
        ...state, comment: comment
      }
    case EDIT_COMMENT:
      const updatedComment = action.payload.data
      return {
        ...state, comments: state.comments.map(comment => {
          if (comment.id === updatedComment.id) {
            return updatedComment
          } else {
            return comment
          }
        })
      }
    case CLEAR_COMMENT:
      return {
        ...state, comment: null
      }
    case SELECT_COMMENT:
      const id = action.payload
      return {
        ...state, comment: state.comments.find(comment => comment.id === id)
      }
    default:
      return state
  }
}

export default comments

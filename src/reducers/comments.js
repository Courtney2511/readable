import { LOAD_POST_COMMENTS, UPVOTE_COMMENT, DOWNVOTE_COMMENT } from '../actions'

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
    default:
      return state
  }
}

export default comments

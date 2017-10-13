import React, { Component } from 'react'
import VoteScore from './VoteScore'
import TrashIcon from 'react-icons/lib/ti/trash'
import WriteIcon from 'react-icons/lib/ti/pencil'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { upVoteComment, downVoteComment, deleteComment } from '../actions/comments'


class Comment extends Component {
  render() {
    const { id, voteScore, author, body } = this.props.comment
    const { upVote, downVote, deleteComment } = this.props
    return (
      <div className='comment-container'>
        <div className='comment-left'>
          <VoteScore id={ id } score={ voteScore } upVote={ upVote } downVote={ downVote }/>
        </div>
        <div className='comment-middle'>
          <p className='subscript'>{ author } wrote:</p>
          <p className='comment-body'>{ body }</p>
        </div>
        <div className='comment-right'>
          <Link to={`/comments/${id}/edit`} title="edit this comment"><WriteIcon size={20} /></Link>
          <button onClick={ () => deleteComment(id) } title="delete this comment"><TrashIcon size={20}/></button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      comments: state.comments.comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
      upVote: (id) => dispatch(upVoteComment(id)),
      downVote: (id) => dispatch(downVoteComment(id)),
      deleteComment: (id) => dispatch(deleteComment(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)

import React, { Component } from 'react'
import VoteScore from './VoteScore'
import TrashIcon from 'react-icons/lib/ti/trash'
import WriteIcon from 'react-icons/lib/ti/pencil'
import { connect } from 'react-redux'
import { upVoteComment, downVoteComment } from '../actions'


class Comment extends Component {
  render() {
    const { id, voteScore, author, body } = this.props.comment
    return (
      <div className='comment-container'>
        <div className='comment-left'>
          <VoteScore id={ id } score={ voteScore } upVote={this.props.upVote} downVote={this.props.downVote}/>
        </div>
        <div className='comment-middle'>
          <p className='subscript'>{ author } wrote:</p>
          <p className='comment-body'>{ body }</p>
        </div>
        <div className='comment-right'>
          <button><WriteIcon size={20} /></button>
          <button><TrashIcon size={20}/></button>
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
      downVote: (id) => dispatch(downVoteComment(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)

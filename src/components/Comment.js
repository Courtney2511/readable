import React, { Component } from 'react'
import VoteScore from './VoteScore'
import TrashIcon from 'react-icons/lib/ti/trash'
import WriteIcon from 'react-icons/lib/ti/pencil'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { upVoteComment, downVoteComment, deleteComment, selectComment, clearComment } from '../actions/comments'


class Comment extends Component {

  onDelete(id) {
    this.props.deleteComment(id)
    this.props.clearComment()
  }

  render() {
    const { id, voteScore, author, body } = this.props.comment
    const { upVote, downVote, deleteComment, selectComment } = this.props
    return (
      <article className='media'>
          <VoteScore id={ id } score={ voteScore } upVote={ upVote } downVote={ downVote }/>
        <div className='media-content'>
          <p>{ author } wrote:</p>
          <p>{ body }</p>
        </div>
        <div className='field is-grouped'>
          <button onClick={ () => selectComment(id) } title="edit this comment" className='button is-white'>
            <WriteIcon size={20}/></button>
          <button onClick={ () => deleteComment(id) } title="delete this comment" className='button is-white'>
            <TrashIcon size={20}/></button>
        </div>
      </article>
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
      selectComment: (id) => dispatch(selectComment(id)),
      clearComment: () => dispatch(clearComment())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)


// <Link to={`/comments/${id}/edit`} title="edit this comment" className='button is-white'>
//   <WriteIcon size={20} /></Link>

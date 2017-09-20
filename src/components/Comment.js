import React, { Component } from 'react'
import VoteScore from './VoteScore'
import TrashIcon from 'react-icons/lib/ti/trash'
import WriteIcon from 'react-icons/lib/ti/pencil'


class Comment extends Component {
  render() {
    const { voteScore, author, body } = this.props.comment
    return (
      <div className='comment-container'>
        <div className='comment-left'>
          <VoteScore score={ voteScore }/>
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

export default Comment

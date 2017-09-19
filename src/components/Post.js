import React, { Component } from 'react'
import FormattedDate from '../helpers/FormattedDate'
import VoteScore from './VoteScore'
import Link from 'react-router'


class Post extends Component {


  render() {
    return (
      <div className='post-container'>
        <div className='post-left'>
          <div className='rank'>
            <span>1</span>
          </div>
          <VoteScore score={ this.props.post.voteScore }/>
        </div>
        <div className='post-middle'>
          <p>{this.props.post.title}</p>
          <p>{this.props.post.body}</p>
          <span className='subscript'>
            <p>submitted @ <FormattedDate date={this.props.post.timestamp} /> by {this.props.post.author}</p>
            <p># comments</p>
          </span>
        </div>
        <div className='post-right'>
          <p>edit</p>
          <p>delete</p>
        </div>
      </div>
    )
  }
}

export default Post

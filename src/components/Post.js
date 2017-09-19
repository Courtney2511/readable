import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormattedDate from '../helpers/FormattedDate'
import VoteScore from './VoteScore'
import { Link } from 'react-router-dom'

class Post extends Component {
  render() {
    const { voteScore, category, id, title, body, timestamp, author } = this.props.post
    return (
      <div className='post-container'>
        <div className='post-left'>
          <div className='rank'>
            <span>1</span>
          </div>
          <VoteScore score={ voteScore }/>
        </div>
        <div className='post-middle'>
          <Link to={`/${category}/${id}`} onClick={() => this.props.getPost(category, id)}><h3>{title}</h3></Link>
          <p>{body}</p>
          <span className='subscript'>
            <p>submitted @ <FormattedDate date={timestamp} /> by {author}</p>
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

Post.PropTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired
}

export default Post

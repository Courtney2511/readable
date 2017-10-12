import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormattedDate from '../helpers/FormattedDate'
import VoteScore from './VoteScore'
import { Link } from 'react-router-dom'
import TrashIcon from 'react-icons/lib/ti/trash'
import WriteIcon from 'react-icons/lib/ti/pencil'
import { connect } from 'react-redux'
import { upVotePost, downVotePost, deletePost } from '../actions/posts'

class Post extends Component {

  render() {
    const { voteScore, category, id, title, body, timestamp, author } = this.props.post
    const { upVote, downVote, deletePost } = this.props
    return (
      <div className='post-container'>
        <div className='post-left'>
          <div className='rank'>
            <span>1</span>
          </div>
          <VoteScore id={ id } score={ voteScore } upVote={ upVote } downVote={ downVote }/>
        </div>
        <div className='post-middle'>
          <Link to={`/${category}/${id}`}><h3>{ title }</h3></Link>
          <p className='post-body'>{ body }</p>
          <span className='subscript'>
            <p>submitted @ <FormattedDate date={ timestamp } /> by { author }</p>
            <p># comments</p>
          </span>
        </div>
        <div className='post-right'>
          <Link to={`/${category}/${id}/edit`} post={this.props.post}>
            <WriteIcon size={20} />
          </Link>
          <button onClick={ () => deletePost(id) }><TrashIcon size={20}/></button>
        </div>
      </div>
    )
  }
}

Post.PropTypes = {
  post: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upVote: (id) => dispatch(upVotePost(id)),
    downVote: (id) => dispatch(downVotePost(id)),
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)

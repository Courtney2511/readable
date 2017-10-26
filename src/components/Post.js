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
    const { voteScore, category, id, title, body, timestamp, author, commentCount } = this.props.post
    const { upVote, downVote, deletePost } = this.props
    return (
      <div className='container'>
        <article className='media'>
          <div className='media-left'>
            <VoteScore id={ id } score={ voteScore } upVote={ upVote } downVote={ downVote }/>
          </div>
          <div className='media-content'>
            <Link to={`/${category}/${id}`}><h3>{ title }</h3></Link>
            <p>{ body }</p>
            <span>
              <p><FormattedDate date={ timestamp } /> by { author }</p>
              {
                (commentCount > 0)
                ? <p>{`${commentCount}`} comments</p>
                : <p>No comments yet!</p>
              }
            </span>
          </div>
          <div>
            <Link to={`/${category}/${id}/edit`} className='button is-white'>
              <WriteIcon size={20} color='#FFC107'/>
            </Link>
            <button onClick={ () => deletePost(id) } className='button is-white'>
              <TrashIcon size={20} color='red'/></button>
          </div>
        </article>
      </div>

    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
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

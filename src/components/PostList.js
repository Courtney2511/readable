import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions'
import FormattedDate from '../helpers/FormattedDate'
import VoteScore from './VoteScore'

class PostList extends Component {

  componentDidMount() {
    this.props.getPosts()
  }
  render() {
    return (
      <div className='posts-container'>
        {this.props.posts.map(post =>
          <div key = { post.id }className='post-container'>
            <div className='post-left'>
              <div className='rank'>
                <span>1</span>
              </div>
              <VoteScore score={ post.voteScore }/>
            </div>
            <div className='post-middle'>
              <p>{post.title}</p>
              <p>{post.body}</p>
              <span className='subscript'>
                <p>submitted @ <FormattedDate date={post.timestamp} /> by {post.author}</p>
                <p># comments</p>
              </span>
            </div>
            <div className='post-right'>
              <p>edit</p>
              <p>delete</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)

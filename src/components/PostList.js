import React, { Component } from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

class PostList extends Component {

  render() {
    const { posts } = this.props
    return (
      (posts)
      ? <div className='posts-container'>
          { posts.map(post =>
            <Post key={ post.id } post={post} />
          )}
        </div>
      : null
    )
  }
}

PostList.PropTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default PostList

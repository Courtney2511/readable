import React, { Component } from 'react'
import Post from './Post'

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

export default PostList

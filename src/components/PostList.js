import React, { Component } from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

class PostList extends Component {

  render() {
    const { posts } = this.props
    return (
      <div className='section'>
        <div className='container'>
          { (posts)
            ? posts.map(post =>
              <Post key={ post.id } post={post} />
              )
            : null
          }
          {
            (posts.length === 0)
            ? <div className='notification is-danger'>there are no posts in this category yet</div>
            : null
          }
        </div>
      </div>

    )
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default PostList

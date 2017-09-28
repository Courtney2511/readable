import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/posts'
import Post from './Post'

class PostList extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { posts } = this.props
    return (
      <div className='posts-container'>
        { posts.map(post =>
          <Post key={ post.id } post={post} />
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
    getPosts: () => dispatch(getPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)

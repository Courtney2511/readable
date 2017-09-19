import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts, getPost } from '../actions'
import Post from './Post'

class PostList extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return (
      <div className='posts-container'>
        {this.props.posts.map(post =>
          <Post key={post.id} post={post} getPost={this.props.getPost} />
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
    getPost: () => dispatch(getPost())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)

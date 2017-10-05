import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from '../components/PostList'
import { getPosts } from '../actions/posts'

class PostListContainer extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    console.log(this.props.posts)
    return (
      <PostList posts={this.props.posts}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)

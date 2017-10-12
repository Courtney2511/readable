import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from '../components/PostList'
import { getPosts } from '../actions/posts'

class PostListContainer extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return (
      (this.props.filter === null)
      ? <PostList posts={this.props.posts}/>
    : <PostList posts={this.props.posts.filter((post) => post.category === this.props.filter)} />
      )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    filter: state.posts.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)

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
      ? (this.props.toggleSort === 'date')
        ? <PostList posts={this.props.posts.sort((a,b) => b.timestamp - a.timestamp)}/>
        : <PostList posts={this.props.posts.sort((a,b) => b.voteScore - a.voteScore)}/>
      : (this.props.toggleSort === 'date')
        ? <PostList posts={this.props.posts.filter((post) => post.category === this.props.filter).sort((a,b) => b.timestamp - a.timestamp)} />
        : <PostList posts={this.props.posts.filter((post) => post.category === this.props.filter).sort((a,b) => b.voteScore - a.voteScore)} />
      )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    filter: state.posts.filter,
    toggleSort: state.posts.toggleSort
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)

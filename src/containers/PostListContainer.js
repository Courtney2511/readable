import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from '../components/PostList'
import { getPosts } from '../actions/posts'

class PostListContainer extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { filter, toggleSort } = this.props
    let { posts } = this.props

    if (filter !== null) {
        posts = posts.filter(post => post.category === filter)
    }

    switch (toggleSort) {
      case 'date':
        posts = posts.sort((a,b) => b.timestamp - a.timestamp)
        break;
      case 'vote':
      default:
        posts = posts.sort((a,b) => b.voteScore - a.voteScore)
    }

    return (<PostList posts={posts}/>)
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

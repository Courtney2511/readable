import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions'
import Post from './Post'

class PostDetail extends Component {

  componentDidMount() {
    this.props.getPost(this.props.match.params.postId)
  }

  render() {
    console.log(this.props.posts.post)
    return (
      <div>
        <h3>Post Detail Page</h3>
        {
          (this.props.posts.post)
          ? <Post post={this.props.posts.post}/>
          : null
        }

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    post: state.posts.post
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (id) => dispatch(getPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)

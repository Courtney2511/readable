import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditPostForm from '../components/EditPostForm'
import { getPost } from '../actions/posts'

class EditPostContainer extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.postId)
  }
  render() {
    return (
      <EditPostForm post={this.props.post}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (id) => dispatch(getPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostContainer)

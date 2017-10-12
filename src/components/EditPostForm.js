import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LocalForm, Control } from 'react-redux-form'
import { editPost } from '../actions/posts'
import { withRouter } from 'react-router'

class EditPostForm extends Component {

  handleSubmit(postId, values) {
    console.log('values', values)
    console.log('id', this.props.post.id)
    this.props.editPost(this.props.post.id, values)
    this.props.history.push(`/`)
  }

  render() {
    const { categories, post } = this.props
    return (
      (post)
      ? <div className="form-container">
          <h3>Edit Post</h3>
          <LocalForm model="post" onSubmit={ values => this.handleSubmit(post.id, values)} initialState={ post }>
            <Control.text model=".title" placeholder="title" />
            <Control.textarea model=".body" placeholder="body" />
            <button className="submit-button" type="submit">Submit</button>
          </LocalForm>
        </div>
      : null
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    post: state.posts.post
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editPost: (postId, values) => dispatch(editPost(postId, values))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostForm))

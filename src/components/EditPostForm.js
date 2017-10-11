import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LocalForm, Control } from 'react-redux-form'
import { addNewPost } from '../actions/posts'
import { withRouter } from 'react-router'

class EditPostForm extends Component {

  handleSubmit(values) {
    this.props.editPost(values)
    this.props.history.push(`/${this.props.post.id}`)
  }

  render() {
    const { categories, post } = this.props
    return (
      (post)
      ? <div className="form-container">
          <h3>Edit Post</h3>
          <LocalForm model="post" onSubmit={ values => this.handleSubmit(values)} initialState={ post }>
            <Control.text model=".title" placeholder="title" />
            <Control.text model=".author" placeholder="author"/>
            <Control.textarea model=".body" placeholder="body" />
            <Control.select model=".category" value="react">
              <option defaultValue value={null}>Choose...</option>
              { categories.map(category => {
                return <option key={category} value={category}>{category}</option>
              })}
            </Control.select>
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
    addNewPost: (values) => dispatch(addNewPost(values))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostForm))

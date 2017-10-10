import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LocalForm, Control } from 'react-redux-form'
import { addNewComment } from '../actions/comments'
import { withRouter } from 'react-router'

class NewCommentForm extends Component {
  handleSubmit(values, postId) {
    this.props.addNewComment(values, postId)
  }

  render() {
    return (
      <div className="form-container">
        <LocalForm model="comment" onSubmit={ values => this.handleSubmit(values, this.props.postId) }>
          <Control.text model=".author" placeholder="author"></Control.text>
          <Control.textarea model=".body" placeholder="comment"></Control.textarea>
        </LocalForm>
        <button className="submit-button" type="submit">Add</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  comments: state.comments.comments,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  addNewComment: (values, PostId) => dispatch(addNewComment(values, PostId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCommentForm)

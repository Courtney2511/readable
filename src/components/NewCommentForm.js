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
      <div className="new-comment-form">
        <h4 className="new-comment-header">Say something:</h4>
        <LocalForm model="comment" onSubmit={ values => this.handleSubmit(values, this.props.postId) }>
          <div className="control">
            <Control.text className="input" model=".author" placeholder="author"></Control.text>
          </div>
          <div className="control">
            <Control.textarea className="textarea" model=".body" placeholder="comment"></Control.textarea>
          </div>
          <div className="contorl">
            <button className="button is-link" type="submit">Add</button>
          </div>
        </LocalForm>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCommentForm))

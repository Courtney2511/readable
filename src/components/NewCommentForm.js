import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LocalForm, Control, actions } from 'react-redux-form'
import { addNewComment } from '../actions/comments'
import { withRouter } from 'react-router'

class NewCommentForm extends Component {
  handleSubmit(values, postId) {
    this.props.addNewComment(values, postId)
    this.formDispatch(actions.change('comment.body', ''))
  }

  attachDispatch(dispatch) {
    this.formDispatch = dispatch
  }


  render() {
    return (
      <div className="new-comment-form">
        <h4 className="new-comment-header">Say something:</h4>
        <LocalForm model="comment"
                   getDispatch={(dispatch) => this.attachDispatch(dispatch)}
                   onSubmit={ values => this.handleSubmit(values, this.props.postId) }>
          <div className='field'>
            <div className="control">
              <Control.text className="input" model=".author" placeholder="author"></Control.text>
            </div>
          </div>
          <div className='field'>
            <div className="control">
              <Control.textarea className="textarea" model=".body" placeholder="comment"></Control.textarea>
            </div>
          </div>
          <div className="control">
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

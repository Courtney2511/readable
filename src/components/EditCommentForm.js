import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LocalForm, Control } from 'react-redux-form'
import { withRouter } from 'react-router'


class EditCommentForm extends Component {
  handleSubmit(id, values) {
    console.log(id, values)
    this.props.editComment(id, values)
    this.props.history.goBack()
  }

  render() {
    const { comment } = this.props
    console.log(comment)
    console.log(this.props.history)
    return (
      (comment)
      ? <div className='form-container'>
          <h3>Edit Comment</h3>
          <LocalForm model="comment" onSubmit={values => this.handleSubmit(comment.id, values)} initialState={this.props.comment}>
            <Control.textarea model=".body" placeholder="body" />
            <button className="submit-button" type="submit">Submit</button>
          </LocalForm>
        </div>
      : null
    )
  }
}


export default withRouter(EditCommentForm)

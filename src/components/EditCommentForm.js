import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LocalForm, Control } from 'react-redux-form'
import { withRouter } from 'react-router'


class EditCommentForm extends Component {
  handleSubmit(id, values) {
    this.props.editComment(id, values)
    this.props.clearComment()
  }

  render() {
    const { comment } = this.props
    return (
      (comment)
      ? <div className='media'>
          <div className='media-content'>
            <LocalForm model="comment" onSubmit={values => this.handleSubmit(comment.id, values)} initialState={this.props.comment}>
              <div className='field'>
                <div className='control'>
                  <Control.textarea model=".body" placeholder="body" className='input' />
                </div>
              </div>
              <div className='field is-grouped'>
                <div className='control'>
                  <button className="button is-primary" type="submit">Submit</button>
                </div>
              </div>
            </LocalForm>
          </div>
        </div>
      : null
    )
  }
}

EditCommentForm.propTypes = {
  comment: PropTypes.object.isRequired,
  editComment: PropTypes.func.isRequired,
  clearComment: PropTypes.func.isRequired

}


export default withRouter(EditCommentForm)

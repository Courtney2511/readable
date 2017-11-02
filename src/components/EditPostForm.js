import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LocalForm, Control } from 'react-redux-form'
import { editPost } from '../actions/posts'
import { withRouter } from 'react-router'

class EditPostForm extends Component {

  handleSubmit(postId, values) {
    this.props.editPost(postId, values)
    this.props.history.push(`/`)
  }

  goBack() {
    this.props.history.goBack()
  }

  render() {
    const { post, categories } = this.props
    return (
      (post)
      ? <div className="form-container">
          <h3>Edit Post</h3>
          <LocalForm model="post" onSubmit={ values => this.handleSubmit(post.id, values)} initialState={ post }>
            <div className='field'>
              <div className='control'>
                <Control.text  className='input' model=".title" placeholder="title" />
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <Control.text className='input' model=".author" placeholder="author"/>
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <Control.textarea className='textarea' model=".body" placeholder="body" />
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <Control.select className='select' model=".category" value="react">
                  <option defaultValue value={null}>Choose...</option>
                  { categories.map(category => {
                    return <option key={category} value={category}>{category}</option>
                  })}
                </Control.select>
              </div>
            </div>

            <div className='field is-grouped'>
              <div className='control'>
                <button className="button is-primary" type="submit">Submit</button>
              </div>
              <div className='control'>
                <button className='button is-danger' type='button'
                  onClick={() => this.goBack()}>Cancel</button>
              </div>
            </div>
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

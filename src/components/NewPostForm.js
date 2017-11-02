import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LocalForm, Control } from 'react-redux-form'
import { addNewPost } from '../actions/posts'
import { withRouter } from 'react-router'

class NewPostForm extends Component {

  handleSubmit(values) {
    this.props.addNewPost(values)
    this.props.history.push('/')
  }

  goBack() {
    this.props.history.goBack()
  }

  render() {
    const { categories } = this.props
    return (
      <div className='posts-container'>
        <div className="form-container">
          <h3>Add a Post</h3>
          <LocalForm model="post" onSubmit={ values => this.handleSubmit(values)}>
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
                <button className='button is-danger' onClick={() => this.goBack()}>Cancel</button>
              </div>
            </div>
          </LocalForm>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewPost: (values) => dispatch(addNewPost(values))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPostForm))

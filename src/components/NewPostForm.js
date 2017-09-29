import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LocalForm, Control } from 'react-redux-form'
import { addNewPost } from '../actions/posts'

class NewPostForm extends Component {

  handleSubmit(values) {
    console.log(values)
    this.props.addNewPost(values)
  }

  render() {
    const { categories } = this.props
    return (
      <div>
        <h3>Add a Post</h3>
        <LocalForm model="post" onSubmit={ values => this.handleSubmit(values)}>
          <Control.text model=".title" />
          <Control.text model=".author" />
          <Control.textarea model=".body" />
          <Control.select model=".category">
            { categories.map(category => {
              return <option key={category} value={category}>{category}</option>
            })}
          </Control.select>
          <button type="submit">Submit</button>
        </LocalForm>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm)

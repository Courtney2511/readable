import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewPostForm extends Component {
  render() {
    return (
      <div>
        <h3>Add a Post</h3>
        <form>
          <input type='text' name='title' placeholder='title'></input>
          <textarea type='text' name='body'></textarea>
          <div className="category-select">
            <select name='category'>
              {this.props.categories.map(category => (
                <option key={ category } value={`${category}`}>{category}</option>
              )
              )}
            </select>
          </div>
          <button type='submit'>Post</button>
        </form>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.categories
  }
}

export default connect(mapStateToProps)(NewPostForm)

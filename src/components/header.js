import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions'

class Header extends Component {

  componentDidMount() {
    this.props.getCategories()
    // const url = 'http://localhost:3001/categories'
    // fetch(url, { headers: { 'Authorization': '12345' }})
    //   .then(res => res.json())
    //   .then(({ categories }) => categories.map(({ name }) => name ))
    //   .then((category) => this.setState({
    //     categories: category
    //   }))
  }

  render() {
    return (
      <div className='header'>
        <div className='header-left'>
          <h1>readable</h1>
        </div>
        <div className='header-right'>
          <ul className='nav'>
            {this.props.categories.map(category =>
            <li className='nav-li' key={category}>{category}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(getCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

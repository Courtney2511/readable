import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../actions'

class Header extends Component {

  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    return (
      <div className='header'>
        <div className='header-left'>
          <h1><Link to="/">readable</Link></h1>
        </div>
        <div className='header-right'>
          <ul className='nav'>
            {this.props.categories.map(category =>
            <li className='nav-li' key={category}>
              <Link to={`/${category}`}>{category}</Link></li>)}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(getCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

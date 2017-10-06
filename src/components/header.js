import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../actions/categories'
import { getPostsByCategory } from '../actions/posts'

class Header extends Component {

  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const { categories, getPostsByCategory } = this.props
    return (
      <div className='header'>
        <div className='header-left'>
          <h1><Link to='/'>readable</Link></h1>
        </div>
        <div className='header-middle'>
          <ul className='nav'>
            { categories.map(category =>
            <li className='nav-li' key={ category }>
              <Link to={`/${category}`} onClick={() => getPostsByCategory(category)}> { category }</Link>
            </li>)}
          </ul>
        </div>
        <div className="header-right">
          <Link to="/posts/new">New Post</Link>
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
    getCategories: () => dispatch(getCategories()),
    getPostsByCategory: (category) => dispatch(getPostsByCategory(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

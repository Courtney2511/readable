import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../actions/categories'
import { setFilter, removeFilter, addDateSortToggle, removeDateSortToggle } from '../actions/posts'

class Header extends Component {

  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const { categories, setFilter, removeFilter, addDateSortToggle, removeDateSortToggle } = this.props
    return (
      <div className='header'>
        <div className='header-left'>
          <h1><Link to='/' onClick={ () => removeFilter() }
                    title={`stuff about all things`}>readable</Link></h1>
        </div>
        <div className='header-middle'>
          <ul className='nav'>
            { categories.map(category =>
            <li className='nav-li' key={ category }>
              <Link to={ `/${category}` }
                    onClick={ () => setFilter(category) }
                    title={`stuff about ${category}`}> { category }</Link>
            </li>) }
          </ul>
        </div>
        <div className="header-right">
          <button onClick={() => removeDateSortToggle()}>Sort by Score</button>
          <button onClick={()=> addDateSortToggle()}>Sort by Date</button>
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
    setFilter: (category) => dispatch(setFilter(category)),
    removeFilter: () => dispatch(removeFilter()),
    addDateSortToggle: () => dispatch(addDateSortToggle()),
    removeDateSortToggle: () => dispatch(removeDateSortToggle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../actions/categories'
import { setFilter, removeFilter, addDateSortToggle, removeDateSortToggle } from '../actions/posts'
import AddNew from 'react-icons/lib/ti/document-add'
import List from 'react-icons/lib/ti/th-list'

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
          <button onClick={() => removeDateSortToggle()}><List size={20}></List>Score</button>
          <button onClick={()=> addDateSortToggle()}><List size={20}></List>Date</button>
          <Link to="/posts/new" title='add new post'><AddNew size={30}></AddNew></Link>
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

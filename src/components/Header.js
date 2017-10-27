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
      <div className='container'>
        <nav className='navbar'>
          <div className='navbar-brand'>
            <Link to='/' onClick={ () => removeFilter() }
                         title={`stuff about all things`}
                         className='navbar-item logo'>readable</Link>
          </div>
          <div className='navbar-menu is-active'>
            <div className='navbar-start navbar-tabs'>
                { categories.map(category =>
                    <Link to={ `/${category}` }
                        onClick={ () => setFilter(category) }
                        title={`stuff about ${category}`}
                        className='navbar-item is-tab'> { category }
                    </Link>
                  )
                }
            </div>
            <div className='navbar-end is-active'>
              <div className='navbar-item'>
                <div className='field is-grouped'>
                  <button onClick={() => removeDateSortToggle()} className='button is-white'>
                    <List size={20}></List>Score</button>
                  <button onClick={()=> addDateSortToggle()} className='button is-white'>
                    <List size={20}></List>Date</button>
                  <Link to="/posts/new" title='add new post'><AddNew size={30}></AddNew></Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <hr></hr>
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

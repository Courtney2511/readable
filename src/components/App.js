import React, { Component } from 'react'
import '../App.css'
import Header from './Header'
import PostList from './PostList'
import NewPostForm from './NewPostForm'
import { Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
          <Route exact path='/' component={ PostList }/>
          <Route exact path='/posts/new' component= { NewPostForm } />
          <Route exact path='/:category' component={ PostList } />
      </div>
    )
  }
}

export default App;

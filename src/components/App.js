import React, { Component } from 'react'
import '../App.css'
import Header from './Header'
import PostList from './PostList'
import { Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' render={() => (
          <PostList />
        )}/>
      <Route path='/:category' component={ PostList } />
      </div>
    )
  }
}

export default App;

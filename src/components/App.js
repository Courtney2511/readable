import React, { Component } from 'react'
import '../App.css'
import Header from './Header'
import PostList from './PostList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <PostList />
      </div>
    )
  }
}

export default App;

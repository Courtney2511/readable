import React, { Component } from 'react'
import '../App.css'
import Header from './Header'
import PostListContainer from '../containers/PostListContainer'
import PostList from './PostList'
import NewPostForm from './NewPostForm'
import PostDetail from './PostDetail'
import { Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route exact path='/' component={ PostListContainer }/>
            <Route exact path='/posts/new' component= { NewPostForm } />
            <Route exact path='/:category' component={ PostList } />
            <Route exact path='/:category/:postId' component={ PostDetail } />
          </Switch>
      </div>
    )
  }
}

export default App;

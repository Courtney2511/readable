import React, { Component } from 'react'
import '../App.css'
import Header from './Header'
import PostListContainer from '../containers/PostListContainer'
import NewPostForm from './NewPostForm'
import PostDetail from './PostDetail'
import EditPostContainer from '../containers/EditPostContainer'
import EditCommentContainer from '../containers/EditCommentContainer'
import { Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route exact path='/' component={ PostListContainer }/>
            <Route exact path='/posts/new' component= { NewPostForm } />
            <Route exact path='/:category' component={ PostListContainer } />
            <Route exact path='/:category/:postId' component={ PostDetail } />
            <Route exact path='/comments/:commentId/edit'
                   component={ EditCommentContainer} />
            <Route exact path='/:category/:postId/edit' component={ EditPostContainer } />

          </Switch>
      </div>
    )
  }
}

export default App;

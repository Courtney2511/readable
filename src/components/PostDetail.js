import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/posts'
import { loadPostComments } from '../actions/comments'
import Post from './Post'
import Comment from './Comment'

class PostDetail extends Component {

  componentDidMount() {
    this.props.getPost(this.props.match.params.postId)
    this.props.loadPostComments(this.props.match.params.postId)
  }

  render() {
    const { post, comments } = this.props
    return (
      <div>
        <h3>Post Detail Page</h3>
        {
          (post)
          ? <Post post={ post }/>
          : <div>loading...</div>
        }
        { // display comments if they exist and have not been flaged deleted
          (comments)
          ? <div className='comments-container'>
              <h3>Comments:</h3>
              { comments.filter(
                comment => comment.deleted === false
              ).map(
                comment => <Comment key={comment.id} comment={ comment } />
              )}
            </div>
          : null
        }
        <div>
          <input></input>
          <button>Add</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    post: state.posts.post,
    comments: state.comments.comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (id) => dispatch(getPost(id)),
    loadPostComments: (id) => dispatch(loadPostComments(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost, upVotePost, downVotePost } from '../actions/posts'
import { loadPostComments, deleteComment } from '../actions/comments'
import Post from './Post'
import Comment from './Comment'

class PostDetail extends Component {

  componentDidMount() {
    this.props.getPost(this.props.match.params.postId)
    this.props.loadPostComments(this.props.match.params.postId)
  }

  render() {
    return (
      <div>
        <h3>Post Detail Page</h3>
        {
          (this.props.posts.post)
          ? <Post post={this.props.posts.post}/>
          : <div>loading...</div>
        }
        { // display comments if they exist and have not been flaged deleted
          (this.props.comments)
          ? <div className='comments-container'>
              <h3>Comments:</h3>
              {this.props.comments.filter(
                comment => comment.deleted === false
              ).map(
                comment => <Comment key={comment.id} comment={comment} />
              )}
            </div>
          : null
        }
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
    upVotePost: (id) => dispatch(upVotePost(id)),
    downVotePost: (id) => dispatch(downVotePost(id)),
    deleteComment: (id)=> dispatch(deleteComment(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)

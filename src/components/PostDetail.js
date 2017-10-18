import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/posts'
import { loadPostComments } from '../actions/comments'
import Post from './Post'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'

class PostDetail extends Component {

  componentDidMount() {
    this.props.getPost(this.props.match.params.postId)
    this.props.loadPostComments(this.props.match.params.postId)
  }

  render() {
    const { post, comments } = this.props
    return (
      <div className='posts-container'>
        {
          (post)
          ? <div>
              <Post post={ post }/>
            </div>
          : null
        }
        { // display comments if they exist
          (comments)
          ? <div className='comments-container'>
              <h3 className='comments-title'>{ comments.length } comments:</h3>
              { comments.map(
                comment => <Comment key={ comment.id } comment={ comment } />
              )}
            </div>
          : null
        }
        {
          (post)
          ? <NewCommentForm postId={post.id}/>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)

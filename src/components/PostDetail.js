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
    let postDetail = null
    let commentList = null
    let commentForm = null

    if (post) {
      postDetail =  <div className='post-detail-container'>
                      <Post post={ post }/>
                    </div>
      commentForm = <NewCommentForm postId={post.id}/>
    } else {
      postDetail =  <div>
                      <h3>Post does not exist</h3>
                    </div>
    }
    if (comments) {
      commentList = <div className='comments-container'>
                      <h3 className='comments-title'>{ comments.length } comments:</h3>
                        { comments.filter(comment => comment.parentDeleted === false).map(
                          comment => <Comment key={ comment.id } comment={ comment } />
                        )}
                    </div>
    }

    return (
      <article className='media'>
        { postDetail }
        { commentList }
        { commentForm }
      </article>
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

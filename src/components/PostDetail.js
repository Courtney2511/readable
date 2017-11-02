import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/posts'
import { loadPostComments } from '../actions/comments'
import Post from './Post'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import EditCommentContainer from '../containers/EditCommentContainer'

class PostDetail extends Component {

  componentDidMount() {
    this.props.getPost(this.props.match.params.postId)
    this.props.loadPostComments(this.props.match.params.postId)
  }

  render() {
    const { post, comments, comment } = this.props
    let postDetail = null
    let commentList = null
    let commentForm = null

    if (post && post.deleted === false) {
      postDetail = <Post post={ post }/>
      commentForm = <NewCommentForm postId={post.id}/>

        if (comments) {
          commentList = <article>
                          <h3>{ comments.length } comments:</h3>
                            { comments.filter(comment => comment.parentDeleted === false).map(
                              comment => (
                                (this.props.comment && this.props.comment.id === comment.id)
                                ?  <EditCommentContainer key={comment.id} comment={ comment} />
                                :  <Comment key={ comment.id } comment={ comment } />)
                            )}
                        </article>
        }
    } else {
      postDetail =  <div className='notification is-danger'>
                      <h3>Post does not exist</h3>
                    </div>
    }


    return (
      <section className='section'>
        <div className='container'>
          <article className='media'>
            { postDetail }
          </article>
          <div className='comments-container'>
            <div className='box'>
              <div className='media'>
                { commentList }
              </div>
              { commentForm }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    post: state.posts.post,
    comments: state.comments.comments,
    comment: state.comments.comment
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPost: (id) => dispatch(getPost(id)),
    loadPostComments: (id) => dispatch(loadPostComments(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)

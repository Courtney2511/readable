import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions'
import FormattedDate from '../helpers/FormattedDate'
import ArrowUp from 'react-icons/lib/ti/arrow-sorted-up'
import ArrowDown from 'react-icons/lib/ti/arrow-sorted-down'

class PostList extends Component {

  componentDidMount() {
    this.props.getPosts()
  }
  render() {
    return (
      <div className='posts-container'>
        {this.props.posts.map(post =>
          <div key = { post.id }className='post-container'>
            <div className='post-left'>
              <div className='rank'>
                <span>1</span>
              </div>
              <div>
                <ArrowUp size={30} />
                <p>{post.voteScore}</p>
                <ArrowDown size={30}/>
              </div>
            </div>
            <div className='post-middle'>
              <p>{post.title}</p>
              <p>{post.body}</p>
              <span className='subscript'>
                <p>submitted @ <FormattedDate date={post.timestamp} /> by {post.author}</p>
                <p># comments</p>
              </span>
            </div>
            <div className='post-right'>
              <p>edit</p>
              <p>delete</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)

import React, { Component } from 'react'
import ArrowUp from 'react-icons/lib/ti/arrow-sorted-up'
import ArrowDown from 'react-icons/lib/ti/arrow-sorted-down'
import { connect } from 'react-redux'
import { upVotePost, downVotePost } from '../actions'

class VoteScore extends Component {
  render() {
    return (
      <div className='vote-container'>
        <button onClick={() => this.props.upVotePost(this.props.id)}><ArrowUp size={30} color='grey'/></button>
        <p>{this.props.score}</p>
        <button onClick={() => this.props.downVotePost(this.props.id)}><ArrowDown size={30} color='grey'/></button>
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
    upVotePost: (id) => dispatch(upVotePost(id)),
    downVotePost: (id) => dispatch(downVotePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteScore)

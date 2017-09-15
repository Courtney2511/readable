import React, { Component } from 'react'
import axios from 'axios'
import FormattedDate from '../helpers/FormattedDate'
import ArrowUp from 'react-icons/lib/ti/arrow-sorted-up'
import ArrowDown from 'react-icons/lib/ti/arrow-sorted-down'

class PostList extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    const url = 'http://localhost:3001/posts'
    const headers = {headers: { 'Authorization': '12345'}}

    axios.get(url, headers).then(result => this.setState({
      posts: result.data
    }))
  }
  render() {
    return (
      <div className='posts-container'>
        {this.state.posts.map(post =>
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

// function formatDate(timestamp) {
//   return moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')
// }

export default PostList

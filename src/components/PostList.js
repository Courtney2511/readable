import React, { Component } from 'react'
import axios from 'axios'
import ArrowUp from 'react-icons/lib/ti/arrow-sorted-up'
import ArrowDown from 'react-icons/lib/ti/arrow-sorted-down'


class PostList extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    const url = 'http://localhost:3001/posts'
    const headers = {headers: { 'Authorization': '12345'}}

    axios.get(url, headers).then(result => console.log(result.data))
  }
  render() {
    return (
      <div className='posts-container'>
        <div className='post-container'>
          <div className='post-left'>
            <div className='rank'>
              <span>1</span>
            </div>
            <div>
              <ArrowUp size={30} />
              <p>234</p>
              <ArrowDown size={30}/>
            </div>
          </div>
          <div className='post-middle'>
            <p>post text</p>
            <span className='subscript'>
              <p>submitted @ time by authour</p>
              <p># comments</p>
            </span>
          </div>
          <div className='post-right'>
            <p>edit</p>
            <p>delete</p>
          </div>
        </div>

      </div>
    )
  }
}

export default PostList

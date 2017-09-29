import axios from 'axios'

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY'
export const GET_POST = 'GET_POST'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_NEW_POST = 'ADD_NEW_POST'

const headers = { headers: { 'Authorization': 'stuff'} }

export function getPost(postId) {
  const url = `http://localhost:3001/posts/${postId}`
  return dispatch => {
    return axios.get(url, headers).then(result => dispatch({
      type: 'GET_POST',
      payload: result
    }))
  }
}

export function getPosts() {
  const url = 'http://localhost:3001/posts'
  return dispatch => {
    return axios.get(url, headers).then(result => dispatch({
      type: GET_POSTS,
      payload: result
    }))
  }
}

export function getPostsByCategory(category) {
  const url = `http://localhost:3001/${category}/posts`
  return dispatch => {
    return axios.get(url, headers).then(result => dispatch({
      type: GET_POSTS_BY_CATEGORY,
      payload: result
    }))
  }
}

export function upVotePost(postId) {
  const url = `http://localhost:3001/posts/${postId}`
  return dispatch => {
    return axios.post(url, {"option": "upVote"}, headers).then(result => dispatch({
      type: UPVOTE_POST,
      payload: result
    }))
  }
}

export function downVotePost(postId) {
  const url = `http://localhost:3001/posts/${postId}`
  return dispatch => {
    return axios.post(url, {"option": "downVote"}, headers).then(result => dispatch({
      type: DOWNVOTE_POST,
      payload: result
    }))
  }
}

export function deletePost(postId) {
  const url = `http://localhost:3001/posts/${postId}`
  return dispatch => {
    return axios.delete(url, headers).then(result => dispatch({
      type: DELETE_POST,
      payload: result
    }))
  }
}

export function addNewPost(values) {
  const url = `http://localhost:3001/posts`
  return dispatch => {
    return axios.post(url, {
      id: values.title,
      timestamp: Date.now(),
      title: values.title,
      body: values.body,
      author: values.author,
      category: values.category
    }, headers).then(result => dispatch({
      type: ADD_NEW_POST,
      payload: result
    }))
  }
}

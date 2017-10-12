import axios from 'axios'

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY'
export const GET_POST = 'GET_POST'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const SORT_POSTS_BY_VOTE = 'SORT_POSTS_BY_VOTE'
export const EDIT_POST = 'EDIT_POST'
export const SET_FILTER = 'SET_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'

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

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter
  }
}

export function removeFilter() {
  return {
    type: REMOVE_FILTER,
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

export function sortPostsByVote() {
  return {
    type: SORT_POSTS_BY_VOTE,
  }
}

export function editPost(postId, values) {
  const url = `http://localhost:3001/posts/${postId}`
  return dispatch => {
    return axios.put(url, {
      title: values.title,
      body: values.body
    }, headers).then(result => dispatch({
      type: 'EDIT_POST',
      payload: result
    }))
  }
}

import axios from 'axios'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const LOAD_POST_COMMENTS = 'LOAD_POST_COMMENTS'
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY'
export const GET_POST = 'GET_POST'

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

export function loadPostComments(postId) {
  const url = `http://localhost:3001/posts/${postId}/comments`
  console.log(url)
  return dispatch => {
    return axios.get(url, headers).then(result => dispatch({
      type: LOAD_POST_COMMENTS,
      payload: result
    }))
  }
}

export function getCategories() {
  const url = 'http://localhost:3001/categories'
  return dispatch => {
    return axios.get(url, headers).then(result => dispatch({
      type: GET_CATEGORIES,
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

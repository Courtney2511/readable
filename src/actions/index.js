import axios from 'axios'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const LOAD_POST_COMMENTS = 'LOAD_POST_COMMENTS'
export const FILTER_POSTS = 'FILTER_POSTS'

const headers = {headers: { 'Authorization': '12345'}}

export function filterPosts(category) {
  return {
    type: 'FILTER_POSTS',
    data: category
  }
}

export function loadPostComments(category, postId) {
  const url = `http://localhost:3001/${category}/${postId}`
  return dispatch => {
    return axios.get(url, headers).then(result => dispatch({
      type: LOAD_POST_COMMENTS,
      data: result
    }))
  }
}

export function getCategories() {
  const url = 'http://localhost:3001/categories'
  return dispatch => {
    return axios.get(url, headers).then(result => dispatch({
      type: GET_CATEGORIES,
      data: result
    }))
  }
}

export function getPosts() {
  const url = 'http://localhost:3001/posts'
  return dispatch => {
    return axios.get(url, headers).then(result => dispatch({
      type: GET_POSTS,
      data: result
    }))
  }
}

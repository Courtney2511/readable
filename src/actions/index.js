import axios from 'axios'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'

const headers = {headers: { 'Authorization': '12345'}}

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
  const url = 'http://localhost:301/posts'
  return dispatch => {
    return axios.get(url, headers).then(result => dispatch({
      type: GET_POSTS,
      data: result
    }))
  }
}

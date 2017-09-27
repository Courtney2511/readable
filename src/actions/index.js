import axios from 'axios'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const LOAD_POST_COMMENTS = 'LOAD_POST_COMMENTS'
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY'
export const GET_POST = 'GET_POST'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'
epxort const DELETE_COMMENT = 'DELETE_COMMENT'

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

export function upVoteComment(commentId) {
  const url = `http://localhost:3001/comments/${commentId}`
  return dispatch => {
    return axios.post(url, {"option": "upVote"}, headers).then(result => dispatch({
      type: UPVOTE_COMMENT,
      payload: result
    }))
  }
}

export function downVoteComment(commentId) {
  const url = `http://localhost:3001/comments/${commentId}`
  return dispatch => {
    return axios.post(url, {"option": "downVote"}, headers).then(result => dispatch({
      type: DOWNVOTE_COMMENT,
      payload: result
    }))
  }
}

export function deleteComment(commentId) {
  const url = `http://localhost:3001/comment/${commentId}`
  return dispatch => {
    return axios.delete(url, headers).then(result => dispatch({
      type: DELETE_COMMENT,
      payload: result
    }))
  }
}

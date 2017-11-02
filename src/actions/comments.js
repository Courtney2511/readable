import axios from 'axios'
import constants from './constants'

export const LOAD_POST_COMMENTS = 'LOAD_POST_COMMENTS'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT'
export const GET_COMMENT = 'GET_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const CLEAR_COMMENT = 'CLEAR_COMMENT'
export const SELECT_COMMENT = 'SELECT_COMMENT'

const headers = { headers: { 'Authorization': 'stuff'} }

export function loadPostComments(postId) {
  const url = `${constants.API_SERVER_URL}/posts/${postId}/comments`
  return dispatch => {
    return axios.get(url, headers).then(result => dispatch({
      type: LOAD_POST_COMMENTS,
      payload: result
    }))
  }
}

export function upVoteComment(commentId) {
  const url = `${constants.API_SERVER_URL}/comments/${commentId}`
  return dispatch => {
    return axios.post(url, {"option": "upVote"}, headers).then(result => dispatch({
      type: UPVOTE_COMMENT,
      payload: result
    }))
  }
}

export function downVoteComment(commentId) {
  const url = `${constants.API_SERVER_URL}/comments/${commentId}`
  return dispatch => {
    return axios.post(url, {"option": "downVote"}, headers).then(result => dispatch({
      type: DOWNVOTE_COMMENT,
      payload: result
    }))
  }
}

export function deleteComment(commentId) {
  const url = `${constants.API_SERVER_URL}/comments/${commentId}`
  return dispatch => {
    return axios.delete(url, headers).then(result => dispatch({
      type: DELETE_COMMENT,
      payload: result
    }))
  }
}

export function addNewComment(values, postId) {
  const uuid = require('uuid/v1')
  const url = `${constants.API_SERVER_URL}/comments`
  return dispatch => {
    return axios.post(url, {
      id: uuid(),
      timestap: Date.now(),
      body: values.body,
      author: values.author,
      parentId: postId
    }, headers).then(result => dispatch({
      type: ADD_NEW_COMMENT,
      payload: result
    }))
  }
}

export function getComment(id) {
  const url = `${constants.API_SERVER_URL}/comments/${id}`
  return dispatch => {
    return axios.get(url, headers).then(result => dispatch({
      type: GET_COMMENT,
      payload: result
    }))
  }
}

export function editComment(id, values) {
  const url = `${constants.API_SERVER_URL}/comments/${id}`
  return dispatch => {
    return axios.put(url, {
      body: values.body
    }, headers).then(result => dispatch({
      type: EDIT_COMMENT,
      payload: result
    }))
  }
}

export function clearComment() {
  return {
    type: CLEAR_COMMENT,
  }
}

export function selectComment(id) {
  console.log('action was called')
  return {
    type: SELECT_COMMENT,
    payload: id
  }
}

import axios from 'axios'
import constants from './constants'

export const LOAD_POST_COMMENTS = 'LOAD_POST_COMMENTS'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT'
export const GET_COMMENT = 'GET_COMMENT'

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
  const url = `${constants.API_SERVER_URL}/comments`
  return dispatch => {
    return axios.post(url, {
      id: Date.now(),
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

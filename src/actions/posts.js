import axios from 'axios'
import constants from './constants'

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
export const ADD_DATE_SORT_TOGGLE = 'ADD_DATE_SORT_TOGGLE'
export const REMOVE_DATE_SORT_TOGGLE = 'REMOVE_DATE_SORT_TOGGLE'

const headers = { headers: { 'Authorization': 'stuff'} }

export function getPost(postId) {
  const url = `${constants.API_SERVER_URL}/posts/${postId}`
  return dispatch => {
    return axios.get(url, headers).then(result => dispatch({
      type: 'GET_POST',
      payload: result
    }))
  }
}

export function getPosts() {
  const url = `${constants.API_SERVER_URL}/posts`
  return dispatch => {
    return axios.get(url, headers).then(result => dispatch({
      type: GET_POSTS,
      payload: result
    }))
  }
}

export function getPostsByCategory(category) {
  const url = `${constants.API_SERVER_URL}/${category}/posts`
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
  const url = `${constants.API_SERVER_URL}/posts/${postId}`
  return dispatch => {
    return axios.post(url, {"option": "upVote"}, headers).then(result => dispatch({
      type: UPVOTE_POST,
      payload: result
    }))
  }
}

export function downVotePost(postId) {
  const url = `${constants.API_SERVER_URL}/posts/${postId}`
  return dispatch => {
    return axios.post(url, {"option": "downVote"}, headers).then(result => dispatch({
      type: DOWNVOTE_POST,
      payload: result
    }))
  }
}

export function deletePost(postId) {
  const url = `${constants.API_SERVER_URL}/posts/${postId}`
  return dispatch => {
    return axios.delete(url, headers).then(result => dispatch({
      type: DELETE_POST,
      payload: result
    }))
  }
}

export function addNewPost(values) {
  const uuid = require('uuid/v1')
  const url = `${constants.API_SERVER_URL}/posts`
  return dispatch => {
    return axios.post(url, {
      id: uuid(),
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

export function editPost(postId, values) {
  const url = `${constants.API_SERVER_URL}/posts/${postId}`
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

export function addDateSortToggle() {
  console.log('toggle action called')
  return {
      type: 'ADD_DATE_SORT_TOGGLE'
  }
}

export function removeDateSortToggle() {
  return {
    type: 'REMOVE_DATE_SORT_TOGGLE'
  }
}

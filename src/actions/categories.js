import axios from 'axios'

export const GET_CATEGORIES = 'GET_CATEGORIES'

const headers = { headers: { 'Authorization': 'stuff'} }

export function getCategories() {
  const url = 'http://localhost:3001/categories'
  return dispatch => {
    return axios.get(url, headers).then(result => dispatch({
      type: GET_CATEGORIES,
      payload: result
    }))
  }
}

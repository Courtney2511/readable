import axios from 'axios'
import constants from './constants'

export const GET_CATEGORIES = 'GET_CATEGORIES'

const headers = { headers: { 'Authorization': 'stuff'} }

export function getCategories() {
  const url = `${constants.API_SERVER_URL}/categories`
  return dispatch => {
    return axios.get(url, headers).then(result => dispatch({
      type: GET_CATEGORIES,
      payload: result
    }))
  }
}

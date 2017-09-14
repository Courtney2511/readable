import axios from 'axios'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export function getCategories() {
  console.log('get categories was called')
  const url = 'http://localhost:3001/categories'
  return dispatch => {
      console.log('dispatch function was called')
      return axios.get(url, {
      headers: {
        'Authorization': '12345'
      }
    }).then(result => dispatch({
      type: GET_CATEGORIES,
      data: result
    }))
  }
}

// const data = fetch(url, { headers: { 'Authorization': '12345' }})
//   .then(res => res.json())
//   .then(({ categories }) => categories.map(({ name }) => name ))

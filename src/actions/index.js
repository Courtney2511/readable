import axios from 'axios'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export function getCategories(dispatch) {
  const url = 'http://localhost:3001/categories'
  const data = axios.get(url, {
    headers: {
      'Authorization': '12345'
    }
  })
  return {
    type: GET_CATEGORIES,
    data: data
  }
}

// const data = fetch(url, { headers: { 'Authorization': '12345' }})
//   .then(res => res.json())
//   .then(({ categories }) => categories.map(({ name }) => name ))

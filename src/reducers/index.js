import { GET_CATEGORIES } from '../actions'

const initialState = {
  categories: [],
  posts: []
}

function categories(state=initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
    const categories = action.data.data.categories.map(category => category.name)
      return {
        ...state, categories: categories
      }
    default:
      return state
  }
}

export default categories

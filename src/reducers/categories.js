import { GET_CATEGORIES } from '../actions/categories'

const initialState = {
  categories: [],
}

function categories(state=initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
    const categories = action.payload.data.categories.map(category => category.name)
      return {
        ...state, categories: categories
      }
    default:
      return state
  }
}

export default categories

import { GET_CATEGORIES } from '../actions'

const initialState = {
  categories: ["this", "will", "be", "replaced"]
}

function categories(state=initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
    console.log(action)
      return {
        ...state, categories: action.data
      }
    default:
      return state
  }
}

export default categories

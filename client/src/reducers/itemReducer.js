import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from '../actions/types'

const initialState = {
  items: [],
  loading: false
}

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => {
          return item.id !== action.payload
        })
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    default:
      return state
  }
}